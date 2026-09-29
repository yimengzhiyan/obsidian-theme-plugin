import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "AGENTS.md",
  "CHANGELOG.md",
  "LICENSE",
  "README.md",
  "manifest.json",
  "package-lock.json",
  "package.json",
  "scripts/build.mjs",
  "scripts/check.mjs",
  "settings/style-settings.css",
  "src/base/variables.css",
  "src/base/colors.css",
  "src/base/light.css",
  "src/base/dark.css",
  "src/base/typography.css",
  "src/workspace/tabs.css",
  "src/workspace/sidebar.css",
  "src/workspace/ribbon.css",
  "src/workspace/statusbar.css",
  "src/workspace/scrollbar.css",
  "theme.css",
  "docs/AI_HANDOFF.md",
  "docs/CURRENT_STATUS.md",
  "docs/DECISIONS.md",
  "docs/TASKS.md"
];

function fail(message) {
  throw new Error(message);
}

async function validateManifest() {
  const manifestPath = path.join(projectRoot, "manifest.json");
  let manifest;

  try {
    manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  } catch (error) {
    fail(`manifest.json is not valid JSON: ${error.message}`);
  }

  for (const field of ["name", "author", "version", "minAppVersion"]) {
    if (typeof manifest[field] !== "string" || manifest[field].trim() === "") {
      fail(`manifest.json must contain a non-empty string field: ${field}`);
    }
  }

  if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) {
    fail("manifest.json version must use x.y.z semantic version format.");
  }

  if (!/^\d+\.\d+\.\d+$/.test(manifest.minAppVersion)) {
    fail("manifest.json minAppVersion must use x.y.z format.");
  }
}

async function validateCss() {
  const css = await readFile(path.join(projectRoot, "theme.css"), "utf8");
  const expectedBanner = "/*\n * GENERATED FILE\n * Do not edit theme.css directly.\n * Edit files under src/ instead.\n */";

  if (!css.startsWith(expectedBanner)) {
    fail("theme.css does not start with the generated-file banner.");
  }

  for (const marker of ["--theme-bg-primary", "--theme-accent", "--theme-radius-md", "/* @settings"]) {
    if (!css.includes(marker)) {
      fail(`theme.css is missing expected marker: ${marker}`);
    }
  }

  const withoutCommentsAndStrings = css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
  let depth = 0;
  for (const character of withoutCommentsAndStrings) {
    if (character === "{") depth += 1;
    if (character === "}") depth -= 1;
    if (depth < 0) fail("theme.css contains an unmatched closing brace.");
  }
  if (depth !== 0) fail("theme.css contains unmatched braces.");
}

async function check() {
  for (const relativePath of requiredFiles) {
    try {
      await access(path.join(projectRoot, relativePath));
    } catch {
      fail(`Required project file is missing: ${relativePath}`);
    }
  }

  await validateManifest();

  const build = spawnSync(process.execPath, [path.join(projectRoot, "scripts/build.mjs")], {
    cwd: projectRoot,
    encoding: "utf8"
  });
  if (build.stdout) process.stdout.write(build.stdout);
  if (build.stderr) process.stderr.write(build.stderr);
  if (build.status !== 0) {
    fail(`Build exited with status ${build.status}.`);
  }

  await validateCss();
  console.log("Check passed: manifest, required files, build, and CSS foundation are valid.");
}

check().catch((error) => {
  console.error(`Check failed: ${error.message}`);
  process.exitCode = 1;
});
