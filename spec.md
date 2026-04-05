# SONO Luxury Headphones

## Current State
New project. No existing frontend or backend code.

## Requested Changes (Diff)

### Add
- Full-page luxury headphones marketing website for brand "SONO"
- Cinematic loader: black screen → SONO wordmark fades in/out
- Hero section: fullscreen animated dark gradient background simulating cinematic lighting, "Hear Beyond Sound" headline with slow fade+zoom, subtext, scroll indicator
- Sound Experience section: animated CSS/SVG equalizer bars, emotional audio copy
- Design section: 3-column material detail cards (Aluminum, Leather, Titanium), dark cards with subtle red border accents
- Lifestyle section: 3 full-width CSS gradient art panels (night city, travel, studio scenes)
- Features section: 8-card icon grid (ANC, 40hr Battery, Hi-Res Audio, Spatial Sound, etc.) with entrance animations
- Interactive 3D Product section: React Three Fiber headphones model built from Three.js geometries, mouse-controlled rotation, scroll-triggered light emergence, camera zoom
- Final CTA section: pure black, bold headline, red glow button
- Floating AI chat assistant: glass morphism panel, bottom-right, rule-based luxury-brand responses
- Custom cursor: small dot + trailing red glow halo
- Scroll-triggered animations: Intersection Observer, fade+slide+blur-to-sharp transitions
- Parallax effects on background elements
- Fixed dark nav bar with SONO wordmark and navigation links
- Smooth scroll behavior throughout

### Modify
N/A (new project)

### Remove
N/A (new project)

## Implementation Plan
1. Set up project with Three.js + React Three Fiber dependencies
2. Build Motoko backend (minimal, for future chat/analytics hooks)
3. Build App.tsx with loader + custom cursor + all page sections
4. HeadphonesModel component: Three.js geometry-based 3D headphone, metallic materials, red emissive accents, mouse rotation, scroll light
5. ChatAssistant component: glass morphism floating panel, rule-based responses
6. ScrollReveal hook: Intersection Observer for fade+slide+blur animations
7. All sections: Hero, SoundExperience, Design, Lifestyle, Features, Product3D, CTA
8. CSS animations: equalizer bars, gradient background motion, cursor glow
9. Performance: React.lazy + Suspense for 3D section, GPU-accelerated transforms
