# Abdul Rehman Baig — developer portfolio

An existing Next.js 16 / React 19 portfolio, redesigned with charcoal lighting, oversized typography, a chrome 3D sculpture, and alternating project reveals. TypeScript, Tailwind 4, custom CSS, and locally bundled Inter / Space Grotesk remain in use.

## Develop and validate

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
```

Development runs at `http://localhost:3000`. Production is statically exported to `out/` for the existing Netlify hosting configuration. Serve `out/` with a static HTTP server when checking the production artifact.

## Content and design

- `app/page.tsx`: original single-page section composition.
- `app/data/projects.ts`: seven projects, original images, and preserved repository / demo URLs.
- `app/data/journey.ts`: education and employment content.
- `app/globals.css`: charcoal design tokens, atmosphere, navigation, hero, and footer.
- `app/styles/`: project, skill, and supporting section styles.
- `app/components/animations/`: GSAP entrances and existing Motion tilt / magnetic interactions.
- `app/components/layout/`: Lenis / ScrollTrigger integration, ambient controls, and CSS atmosphere.
- `app/components/three/HeroScene.tsx`: lazy-loaded desktop sculpture; static artwork is available on mobile and with reduced motion.

Desktop smooth scrolling uses Lenis with the GSAP ticker. Touch scrolling stays native. Scroll triggers, media-query listeners, resize observers, clock intervals, and WebGL event listeners are cleaned up on unmount. The motion control pauses the ambient atmosphere and sculpture; OS reduced-motion preferences disable entrance motion and WebGL loading.

Project images have existing optimized WebP variants. Regenerate them with `node scripts/optimize-images.mjs`. Regenerate the local Open Graph image with `node scripts/create-social-preview.mjs`.

The contact form retains its existing Web3Forms integration. Browser verification uses intercepted responses; it does not send real messages. HealthMate's existing image is preserved, but no undocumented project details or URLs have been added.

See `docs/content-audit.md` for source provenance and `docs/redesign-plan.md` for the redesign plan.
