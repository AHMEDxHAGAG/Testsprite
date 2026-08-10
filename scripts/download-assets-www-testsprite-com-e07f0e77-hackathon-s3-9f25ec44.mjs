import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://www.testsprite.com";
const assetRoot = join(
  process.cwd(),
  "public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44",
);

const assets = [
  ["images/cli-verify-dark.png", "/home/cli-verify-dark.png"],
  ["images/cli-verify-light.png", "/home/cli-verify-light.png"],
  ["images/s3-prize-tiers-dark.png", "/hackathon/s3-prize-tiers-dark.png"],
  ["images/s3-prize-tiers-light.png", "/hackathon/s3-prize-tiers-light.png"],
  ["images/s3-cli-bonus-dark.png", "/hackathon/s3-cli-bonus-dark.png"],
  ["images/s3-cli-bonus-light.png", "/hackathon/s3-cli-bonus-light.png"],
  ["images/s3-loopmd-dark.png", "/hackathon/s3-loopmd-dark.png"],
  ["images/s3-loopmd-light.png", "/hackathon/s3-loopmd-light.png"],
  ["images/s3-github-repo-dark.png", "/hackathon/s3-github-repo-dark.png"],
  ["images/s3-github-repo-light.png", "/hackathon/s3-github-repo-light.png"],
  ["images/s3-submit-checklist-dark.png", "/hackathon/s3-submit-checklist-dark.png"],
  ["images/s3-submit-checklist-light.png", "/hackathon/s3-submit-checklist-light.png"],
  ["images/event-aws-datadog.png", "/hackathon/event-aws-datadog.png"],
  ["images/event-testsprite-ai-dev.png", "/hackathon/event-testsprite-ai-dev.png"],
  ["images/event-sf-vibe-coding.png", "/hackathon/event-sf-vibe-coding.png"],
  ["images/soc2-dark.png", "/home/soc2-dark.png"],
  ["images/soc2-light.png", "/home/soc2-light.png"],
  ["images/frontend-content.png", "/frontend/Content.png"],
  ["images/hero-bg.png", "/home/hero-bg.png"],
  ["images/hero-bg-light.png", "/home/hero-bg-light.png"],
  ["images/with-testsprite.png", "/home/with-testsprite.png"],
  ["seo/favicon.ico", "/favicon.ico"],
  ["seo/favicon.svg", "/favicon.svg"],
  ["seo/apple-touch-icon.png", "/apple-touch-icon.png"],
  [
    "seo/hackathon-og.png",
    "https://framerusercontent.com/images/hMEbxGbRjpi0xFeUtHcSz6AT93c.png",
  ],
  [
    "fonts/open-sauce-two-400.woff2",
    "/_next/static/media/open-sauce-two-latin-400-normal.0db2f4bf.woff2",
  ],
  [
    "fonts/open-sauce-two-500.woff2",
    "/_next/static/media/open-sauce-two-latin-500-normal.7a4dc8b9.woff2",
  ],
  [
    "fonts/open-sauce-two-600.woff2",
    "/_next/static/media/open-sauce-two-latin-600-normal.943fdd0d.woff2",
  ],
  [
    "fonts/open-sauce-two-700.woff2",
    "/_next/static/media/open-sauce-two-latin-700-normal.3c22b3b3.woff2",
  ],
  [
    "fonts/inter-400.woff2",
    "/_next/static/media/inter-latin-400-normal.ef6d3f52.woff2",
  ],
  [
    "fonts/inter-500.woff2",
    "/_next/static/media/inter-latin-500-normal.b7b43ace.woff2",
  ],
  [
    "fonts/inter-600.woff2",
    "/_next/static/media/inter-latin-600-normal.8fb1a964.woff2",
  ],
  [
    "fonts/inter-700.woff2",
    "/_next/static/media/inter-latin-700-normal.953b7aa5.woff2",
  ],
];

async function download([relativePath, sourcePath]) {
  const destination = join(assetRoot, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  const response = await fetch(new URL(sourcePath, origin), {
    headers: { "user-agent": "Mozilla/5.0" },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${sourcePath}`);
  }

  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  return relativePath;
}

for (let index = 0; index < assets.length; index += 4) {
  const batch = assets.slice(index, index + 4);
  const downloaded = await Promise.all(batch.map(download));
  for (const path of downloaded) console.log(`downloaded ${path}`);
}

console.log(`Downloaded ${assets.length} assets to ${assetRoot}`);
