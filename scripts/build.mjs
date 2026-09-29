import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = path.join(projectRoot, "theme.css");

const sourceGroups = [
  { directory: "settings" },
  {
    directory: "src/base",
    order: ["variables.css", "colors.css", "light.css", "dark.css", "typography.css"]
  },
  {
    directory: "src/workspace",
    order: ["tabs.css", "sidebar.css", "ribbon.css", "statusbar.css", "scrollbar.css"]
  },
  { directory: "src/editor" },
  { directory: "src/navigation" },
  { directory: "src/components" },
  { directory: "src/layout" },
  { directory: "src/effects" },
  { directory: "src/apps" }
];

const banner = `/*
 * GENERATED FILE
 * Do not edit theme.css directly.
 * Edit files under src/ instead.
 */`;

async function collectCssFiles(relativeDirectory, preferredOrder = []) {
  const absoluteDirectory = path.join(projectRoot, relativeDirectory);
  let entries;

  try {
    entries = await readdir(absoluteDirectory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }

  const files = [];
  const orderIndex = new Map(preferredOrder.map((name, index) => [name, index]));
  entries.sort((a, b) => {
    const aIndex = orderIndex.get(a.name) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderIndex.get(b.name) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex || a.name.localeCompare(b.name, "en");
  });

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectCssFiles(relativePath));
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      files.push(relativePath);
    }
  }

  return files;
}

async function build() {
  const sourceFiles = [];
  for (const group of sourceGroups) {
    sourceFiles.push(...await collectCssFiles(group.directory, group.order));
  }

  if (sourceFiles.length === 0) {
    throw new Error("No CSS source files found.");
  }

  const sections = [banner];
  for (const sourceFile of sourceFiles) {
    const contents = (await readFile(path.join(projectRoot, sourceFile), "utf8")).trim();
    sections.push(`/* Source: ${sourceFile} */\n${contents}`);
  }

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, `${sections.join("\n\n")}\n`, "utf8");
  console.log(`Built theme.css from ${sourceFiles.length} source files.`);
}

build().catch((error) => {
  console.error(`Build failed: ${error.message}`);
  process.exitCode = 1;
});
