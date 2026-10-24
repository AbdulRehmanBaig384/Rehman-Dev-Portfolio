import { mkdir, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

// Regenerates presentation assets only; the original screenshots are preserved.
const root = fileURLToPath(new URL("../", import.meta.url));
const inputDirectory = path.join(root, "app", "images");
const outputDirectory = path.join(root, "public", "projects");
await mkdir(outputDirectory, { recursive: true });
const files = (await readdir(inputDirectory)).filter((name) => name.endsWith(".png")).sort();
const report = [];

for (const file of files) {
  const input = path.join(inputDirectory, file);
  const stem = path.parse(file).name;
  const originalBytes = (await stat(input)).size;
  const variants = [];
  for (const width of [1400, 640]) {
    const filename = `${stem}${width === 640 ? "-640" : ""}.webp`;
    const result = await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(outputDirectory, filename));
    variants.push({ path: `/projects/${filename}`, width: result.width, height: result.height, bytes: result.size });
  }
  report.push({ source: file, originalBytes, variants });
}

console.log(JSON.stringify(report, null, 2));
