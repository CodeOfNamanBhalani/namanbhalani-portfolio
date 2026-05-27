/**
 * Batch-convert frame sequences to WebP for hero/ambient folders.
 *
 * Usage:
 *   npm install -D sharp
 *   node scripts/optimize-frames.mjs ./raw-frames ./public/frames/hero 120
 *
 * Drop numbered PNG/JPG into raw-frames; outputs 0001.webp … in target folder.
 */
import fs from "fs";
import path from "path";

const [inputDir, outputDir, maxFramesArg] = process.argv.slice(2);

if (!inputDir || !outputDir) {
  console.error(
    "Usage: node scripts/optimize-frames.mjs <inputDir> <outputDir> [maxFrames]",
  );
  process.exit(1);
}

const maxFrames = maxFramesArg ? parseInt(maxFramesArg, 10) : 240;

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Install sharp: npm install -D sharp");
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort();

  const slice = files.slice(0, maxFrames);
  let i = 0;
  for (const file of slice) {
    i++;
    const out = path.join(outputDir, `${String(i).padStart(4, "0")}.webp`);
    await sharp(path.join(inputDir, file))
      .resize(1920, 1080, { fit: "cover" })
      .webp({ quality: 82 })
      .toFile(out);
    console.log(`Wrote ${out}`);
  }
  console.log(`Done: ${i} frames → ${outputDir}`);
}

main();
