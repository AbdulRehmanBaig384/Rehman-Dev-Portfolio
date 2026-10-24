import sharp from "sharp";
import { fileURLToPath } from "node:url";

// A local, reproducible social card; no remote image or font request is required.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><radialGradient id="light"><stop stop-color="#454548"/><stop offset="1" stop-color="#0d0d0f"/></radialGradient></defs>
<rect width="1200" height="630" fill="#0d0d0f"/><ellipse cx="960" cy="160" rx="600" ry="470" fill="url(#light)"/>
<g fill="#f5f5f2" font-family="Arial, sans-serif"><text x="70" y="76" font-size="14" letter-spacing="4">FULL-STACK SOFTWARE ENGINEER</text>
<text x="60" y="268" font-size="170" font-weight="700" letter-spacing="-10">ABDUL</text>
<text x="60" y="425" font-size="170" font-weight="700" letter-spacing="-10">REHMAN</text>
<path d="M70 487H1130" stroke="#ffffff" stroke-opacity=".2"/>
<text x="70" y="548" font-size="22">Thoughtful code. Extraordinary experiences.</text>
<text x="1130" y="548" font-size="16" text-anchor="end" fill="#a7a7aa">KARACHI, PAKISTAN</text></g></svg>`;
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("../public/social-preview.png", import.meta.url)));
console.log("Created public/social-preview.png (1200 × 630)");
