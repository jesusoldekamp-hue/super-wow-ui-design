# GSAP, ScrollTrigger, SplitText y MorphSVG

Usa GSAP para timelines complejas, narrativa con scroll, tipografía cinética o morphing SVG. Registra únicamente los plugins usados y ejecuta el código en componentes cliente.

```tsx
import { ScrollStory } from "@workspace/effects/scroll-story"
import { SplitTextReveal } from "@workspace/effects/split-text-reveal"
import { MorphingSymbol } from "@workspace/effects/morphing-symbol"
```

Los wrappers incluidos registran los plugins y respetan `prefers-reduced-motion`. Conserva el contenido y el estado final sin desplazamientos intensos.
