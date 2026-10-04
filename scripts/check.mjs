import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredSemanticTokens = [
  "--theme-bg-primary",
  "--theme-bg-secondary",
  "--theme-bg-sidebar",
  "--theme-bg-card",
  "--theme-bg-hover",
  "--theme-bg-active",
  "--theme-text-normal",
  "--theme-text-muted",
  "--theme-text-faint",
  "--theme-text-on-accent",
  "--theme-accent",
  "--theme-accent-hover",
  "--theme-active-bg",
  "--theme-active-text",
  "--theme-hover-bg",
  "--theme-indicator",
  "--theme-border",
  "--theme-border-hover",
  "--theme-border-active",
  "--theme-link",
  "--theme-link-hover",
  "--theme-link-external",
  "--theme-link-unresolved",
  "--theme-code-bg",
  "--theme-code-text",
  "--theme-radius-xs",
  "--theme-radius-sm",
  "--theme-radius-md",
  "--theme-radius-lg",
  "--theme-radius-xl",
  "--theme-space-xs",
  "--theme-space-sm",
  "--theme-space-md",
  "--theme-space-lg",
  "--theme-space-xl",
  "--theme-transition-fast",
  "--theme-transition-normal",
  "--theme-transition-slow",
  "--theme-font-interface",
  "--theme-font-text",
  "--theme-font-monospace",
  "--theme-line-height",
  "--theme-reading-width"
];
const styleSettingTokens = [
  "theme-accent",
  "theme-radius-md",
  "theme-line-height",
  "theme-reading-width"
];
const styleSettingTypes = new Map([
  ["theme-accent", "variable-text"],
  ["theme-radius-md", "variable-number-slider"],
  ["theme-line-height", "variable-number-slider"],
  ["theme-reading-width", "variable-number-slider"]
]);
const styleSettingMappings = new Map([
  ["theme-accent", "--color-accent: var(--theme-accent)"],
  ["theme-radius-md", "--radius-m: var(--theme-radius-md)"],
  ["theme-line-height", "--line-height-normal: var(--theme-line-height)"],
  ["theme-reading-width", "--file-line-width: var(--theme-reading-width)"]
]);
const nativeControlAccentMappings = [
  "--color-accent: var(--theme-accent)",
  "--color-accent-1: var(--theme-accent-hover)",
  "--color-accent-2: var(--theme-accent-hover)",
  "--interactive-accent: var(--theme-accent)",
  "--interactive-accent-hover: var(--theme-accent-hover)",
  "--checkbox-marker-color: var(--theme-text-on-accent)",
  "--checkbox-color: var(--theme-accent)",
  "--checkbox-color-hover: var(--theme-accent-hover)"
];
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

function extractThemeDeclarations(css) {
  return [...css.matchAll(/(--theme-[a-z0-9-]+)\s*:\s*([^;]+);/g)].map((match) => ({
    name: match[1],
    value: match[2].trim()
  }));
}

function extractStyleSettingEntries(css) {
  const metadata = css.match(/\/\*\s*@settings\s*([\s\S]*?)\*\//)?.[1];
  if (!metadata) fail("Style Settings metadata block is missing.");

  return metadata
    .split(/^\s{2}-\s*$/m)
    .slice(1)
    .map((entry) => Object.fromEntries(
      [...entry.matchAll(/^\s{4}([a-z][a-z0-9-]*):\s*(.*?)\s*$/gm)]
        .map((match) => [match[1], match[2]])
    ));
}

function assertSameTokenContract(lightCss, darkCss) {
  const lightTokens = new Set(extractThemeDeclarations(lightCss).map(({ name }) => name));
  const darkTokens = new Set(extractThemeDeclarations(darkCss).map(({ name }) => name));
  const lightOnly = [...lightTokens].filter((token) => !darkTokens.has(token));
  const darkOnly = [...darkTokens].filter((token) => !lightTokens.has(token));

  if (lightOnly.length || darkOnly.length) {
    fail(`Light/Dark token contract mismatch. Light only: ${lightOnly.join(", ") || "none"}; Dark only: ${darkOnly.join(", ") || "none"}.`);
  }
}

function assertNoThemeTokenCycles(declarations) {
  const dependencies = new Map();
  for (const { name, value } of declarations) {
    if (!dependencies.has(name)) dependencies.set(name, new Set());
    for (const match of value.matchAll(/var\((--theme-[a-z0-9-]+)/g)) {
      dependencies.get(name).add(match[1]);
    }
  }

  const visiting = new Set();
  const visited = new Set();
  function visit(token) {
    if (visiting.has(token)) fail(`Circular Theme Token reference detected at ${token}.`);
    if (visited.has(token)) return;
    visiting.add(token);
    for (const dependency of dependencies.get(token) ?? []) visit(dependency);
    visiting.delete(token);
    visited.add(token);
  }

  for (const token of dependencies.keys()) visit(token);
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
  const lightCss = await readFile(path.join(projectRoot, "src/base/light.css"), "utf8");
  const darkCss = await readFile(path.join(projectRoot, "src/base/dark.css"), "utf8");
  const colorsCss = await readFile(path.join(projectRoot, "src/base/colors.css"), "utf8");
  const typographyCss = await readFile(path.join(projectRoot, "src/base/typography.css"), "utf8");
  assertCoreTypographyContract(typographyCss);
  const workspaceCss = await Promise.all([
    "tabs.css",
    "sidebar.css",
    "ribbon.css",
    "statusbar.css",
    "scrollbar.css"
  ].map((file) => readFile(path.join(projectRoot, "src/workspace", file), "utf8")));
  const settingsCss = await readFile(path.join(projectRoot, "settings/style-settings.css"), "utf8");
  const expectedBanner = "/*\n * GENERATED FILE\n * Do not edit theme.css directly.\n * Edit files under src/ instead.\n */";

  if (!css.startsWith(expectedBanner)) {
    fail("theme.css does not start with the generated-file banner.");
  }

  for (const marker of ["/* @settings", "--background-primary", "--color-accent", "--file-line-width"]) {
    if (!css.includes(marker)) {
      fail(`theme.css is missing expected marker: ${marker}`);
    }
  }

  const declarations = extractThemeDeclarations(css);
  const definedTokens = new Set(declarations.map(({ name }) => name));
  for (const token of requiredSemanticTokens) {
    if (!definedTokens.has(token)) fail(`Required Semantic Token is missing: ${token}`);
  }

  const referencedTokens = new Set([...css.matchAll(/var\((--theme-[a-z0-9-]+)/g)].map((match) => match[1]));
  for (const token of referencedTokens) {
    if (!definedTokens.has(token)) fail(`Theme Token is referenced but never defined: ${token}`);
  }

  assertSameTokenContract(lightCss, darkCss);
  assertNoThemeTokenCycles(declarations);

  const styleSettingEntries = extractStyleSettingEntries(settingsCss);
  const styleSettingIds = styleSettingEntries.map((entry) => entry.id).filter(Boolean);
  const duplicateStyleSettingIds = styleSettingIds.filter((id, index) => styleSettingIds.indexOf(id) !== index);
  if (duplicateStyleSettingIds.length) {
    fail(`Duplicate Style Setting id: ${[...new Set(duplicateStyleSettingIds)].join(", ")}`);
  }

  for (const token of styleSettingTokens) {
    const setting = styleSettingEntries.find((entry) => entry.id === token);
    if (!setting || !definedTokens.has(`--${token}`)) {
      fail(`Style Setting does not resolve to a defined Theme Token: ${token}`);
    }
    if (setting.type !== styleSettingTypes.get(token)) {
      fail(`Style Setting ${token} must use type ${styleSettingTypes.get(token)}.`);
    }
    if (setting.default === undefined) {
      fail(`Style Setting ${token} must declare a default value.`);
    }
    if (!css.includes(styleSettingMappings.get(token))) {
      fail(`Style Setting Theme Token is not mapped to its Obsidian variable: ${token}`);
    }
  }

  for (const [mode, modeCss] of [["Light", lightCss], ["Dark", darkCss]]) {
    for (const token of ["--theme-bg-hover", "--theme-bg-active"]) {
      const declaration = extractThemeDeclarations(modeCss).find(({ name }) => name === token);
      if (!declaration?.value.includes("var(--theme-accent)")) {
        fail(`${mode} ${token} must derive from --theme-accent.`);
      }
    }
  }

  const nativeControlAccentBlock = colorsCss.match(/body\.theme-light,\s*body\.theme-dark\s*\{([\s\S]*?)\}/)?.[1];
  if (!nativeControlAccentBlock) {
    fail("Native control Accent mappings must use the body.theme-light/body.theme-dark selector.");
  }
  for (const mapping of nativeControlAccentMappings) {
    if (!nativeControlAccentBlock.includes(mapping)) {
      fail(`Native control Accent mapping is missing: ${mapping}`);
    }
  }

  if (workspaceCss.some((source) => /#[0-9a-f]{3,8}\b|(?:rgb|hsl|oklch)a?\(/i.test(source))) {
    fail("Workspace CSS must consume Semantic Tokens instead of hard-coded colors.");
  }

  if (css.includes("!important")) fail("theme.css must not use !important in the Foundation layer.");
  if (/\{\{|\}\}|<%|%>/.test(css)) fail("theme.css contains an unresolved template marker.");

  const withoutCommentsAndStrings = css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
  if (/[^{}]+\{\s*\}/.test(withoutCommentsAndStrings)) fail("theme.css contains an empty rule.");

  let depth = 0;
  for (const character of withoutCommentsAndStrings) {
    if (character === "{") depth += 1;
    if (character === "}") depth -= 1;
    if (depth < 0) fail("theme.css contains an unmatched closing brace.");
  }
  if (depth !== 0) fail("theme.css contains unmatched braces.");
}

// A small contract check for the approved Core Typography scope, not a CSS linter.
function assertCoreTypographyContract(source) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, "").trim();
  const rulePattern = /([^{}]+)\{([^{}]*)\}/g;
  const rules = [...css.matchAll(rulePattern)];
  if (rules.length !== 4 || css.replace(rulePattern, "").trim() || rules[0][1].trim() !== "body") {
    fail("Core Typography must contain the body contract and exactly three approved Live Preview blank-line rules.");
  }
  const block = rules[0][2];

  // Exact selectors, declarations and source order keep this exception narrowly scoped.
  const editor = '.markdown-source-view.mod-cm6.is-live-preview';
  const blank = '.cm-line:not([class*="HyperMD-"]):is(:empty, :has(> br:only-child))';
  const blankLine = `${editor} ${blank}`;
  const approvedSpacingRules = [
    [blankLine, "line-height: var(--theme-space-sm); min-height: var(--theme-space-sm);"],
    [`${blankLine}:has(+ .cm-line.HyperMD-header)`, "line-height: var(--theme-space-lg); min-height: var(--theme-space-lg);"],
    [`${editor} .cm-line.HyperMD-header + ${blank}:has(+ .cm-line.HyperMD-header)`, "line-height: var(--theme-space-sm); min-height: var(--theme-space-sm);"]
  ];
  for (const [index, [selector, declaration]] of approvedSpacingRules.entries()) {
    const rule = rules[index + 1];
    const actualSelector = rule[1].trim().replace(/\s+/g, " ");
    // Source must retain native line geometry; no generic editor or Source rule.
    if (!actualSelector.startsWith(`${editor} `)) {
      fail("Typography blank-line rules must target Live Preview only, never Source Mode.");
    }
    // Public spacing may be view-scoped; retain direct Theme spacing consumption.
    // This restriction applies only to the approved Live Preview exceptions, not body.
    if (/var\(\s*--(?:p|heading)-spacing\b/.test(rule[2])) {
      fail("Editor blank-line rules must consume Theme spacing directly, not view-scoped public spacing.");
    }
    if (actualSelector !== selector ||
        rule[2].replace(/\s+/g, "") !== declaration.replace(/\s+/g, "")) {
      fail(`Core Typography editor spacing rule ${index + 1} must match its approved contract.`);
    }
  }

  const expected = new Map([
    ["--font-interface-theme", "var(--theme-font-interface)"],
    ["--font-text-theme", "var(--theme-font-text)"],
    ["--font-monospace-theme", "var(--theme-font-monospace)"],
    ["--line-height-normal", "var(--theme-line-height)"],
    ["--file-line-width", "var(--theme-reading-width)"],
    ["--heading-formatting", "var(--theme-text-faint)"],
    ["--heading-spacing", "var(--theme-space-lg)"],
    ["--p-spacing", "var(--theme-space-sm)"],
    ["--bold-modifier", "200"],
    ["--bold-color", "var(--theme-text-normal)"],
    ["--italic-color", "var(--theme-text-normal)"]
  ]);
  const sizes = ["1.75em", "1.50em", "1.30em", "1.15em", "1.05em", "1.00em"];
  const weights = ["bold", "bold", "semibold", "semibold", "medium", "medium"];
  const lineHeights = ["1.20", "1.25", "1.30", "1.30", "1.30", "1.30"];
  for (let index = 0; index < 6; index += 1) {
    const heading = `--h${index + 1}`;
    expected.set(`${heading}-color`, "var(--theme-text-normal)");
    expected.set(`${heading}-size`, sizes[index]);
    expected.set(`${heading}-weight`, `var(--font-${weights[index]})`);
    expected.set(`${heading}-line-height`, lineHeights[index]);
  }

  const found = new Set();
  for (const declaration of block.split(";").map((part) => part.trim()).filter(Boolean)) {
    const match = declaration.match(/^(--[a-z0-9-]+)\s*:\s*(.+)$/s);
    if (!match) fail("Core Typography must contain only public variable declarations.");
    const [, name, value] = match;
    // An allowlist also rejects new Theme Tokens, hard-coded colors, font overrides,
    // deferred properties and !important, including duplicate overriding declarations.
    if (!expected.has(name) || expected.get(name) !== value.trim() || found.has(name)) {
      fail(`Core Typography has an unapproved or duplicate declaration: ${name}.`);
    }
    found.add(name);
  }
  for (const name of expected.keys()) {
    if (!found.has(name)) fail(`Core Typography public variable is missing: ${name}.`);
  }
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

  const themePath = path.join(projectRoot, "theme.css");
  const themeBeforeBuild = await readFile(themePath, "utf8");
  const build = spawnSync(process.execPath, [path.join(projectRoot, "scripts/build.mjs")], {
    cwd: projectRoot,
    encoding: "utf8"
  });
  if (build.stdout) process.stdout.write(build.stdout);
  if (build.stderr) process.stderr.write(build.stderr);
  if (build.status !== 0) {
    fail(`Build exited with status ${build.status}.`);
  }
  const themeAfterBuild = await readFile(themePath, "utf8");
  if (themeBeforeBuild !== themeAfterBuild) {
    fail("theme.css was out of date; the check rebuilt it. Review and run check again.");
  }

  await validateCss();
  console.log("Check passed: manifest, generated CSS, Semantic Tokens, theme modes, Style Settings, Foundation CSS, and Core Typography are valid.");
}

check().catch((error) => {
  console.error(`Check failed: ${error.message}`);
  process.exitCode = 1;
});
