# Redesign validation — 24 October 2026

## Automated checks

- `npm.cmd run lint`: passed, no lint errors or warnings. The baseline-browser-mapping dependency prints an informational database-age notice.
- `npx.cmd tsc --noEmit`: passed; the final Next.js build also completed its TypeScript check.
- `npm.cmd run build`: passed. Static output is in `out/`.
- `git diff --check`: passed.
- Compared current project URLs with the original Git version: all 14 repository, demo, and source URLs are unchanged across seven project records. The resume and HealthMate image remain present.

## Production browser verification

Playwright drove the installed Chrome against a local HTTP server serving `out/`. No application page errors, unexpected console errors, or failed local requests were recorded in the final run.

- Desktop hero renders an actual WebGL canvas after the text introduction. Mobile and reduced-motion views use the lightweight static sculpture.
- Project filtering produces three Full-Stack projects and restores all seven projects.
- Case-study dialog opens, closes with Escape, and restores keyboard focus to its trigger.
- Skill selection works by click and arrow keys.
- Empty contact submission marks all three invalid fields. Intercepted success and failure responses exercise both feedback paths; **no real messages were sent**. The deliberate HTTP 500 is an expected test event, excluded only for the intercepted Web3Forms endpoint from the console-error assertion.
- Karachi local time advances, and the ambient motion control updates its paused state.
- Document width matches viewport width at 320, 390, 768, 1024, and 1440 pixels.
- Touch navigation opens and closes its dialog and follows the Projects anchor.
- Reduced motion leaves all reveal content visible, stops ambient animation, and does not mount a WebGL canvas.
- All internal anchors resolve. Resume PDF, grain SVG, and social preview image return HTTP 200.
- Desktop back-to-top navigation reaches the top with Lenis enabled.

Desktop hero, project, skill, footer, and mobile captures were visually reviewed. Local browser tools, screenshots, and run results are kept in ignored `.qa-tools/`; they are not runtime dependencies.

## Fixes found during validation

- Scoped Turbopack to this checkout to prevent an unrelated ancestor lockfile from selecting the wrong workspace root.
- Corrected legacy lint violations without removing legacy components or their content.
- Fixed the inherited WebGL fallback lifecycle: a component rendered inside the canvas fallback was unconditionally invoking `onFailure` on mount. Static fallback markup now leaves the functioning renderer mounted; the existing error boundary and context-loss listener still handle actual failures.
- Added the missing local social-preview image already referenced by SEO metadata.

## Scope of verification

Responsive testing used Chromium device emulation, not physical iOS / Android devices or Safari. Existing external deployment and repository availability is outside the local verification; their original URLs are preserved. HealthMate has an asset but no documented project metadata, so no case study or URL was invented. The supplied screenshot was not accessible in the conversation; the written visual direction and linked GIATS page informed the original design.
