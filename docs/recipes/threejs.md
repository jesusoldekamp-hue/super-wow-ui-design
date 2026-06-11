# Three.js y React Three Fiber

Carga escenas 3D mediante `next/dynamic` y `ssr: false` únicamente en la sección que las muestra.

```tsx
const AmbientOrb = dynamic(
  () => import("@workspace/effects/ambient-orb").then((module) => module.AmbientOrb),
  { ssr: false },
)
```

`AmbientOrb` limita DPR, soporta movimiento reducido y ofrece fallback. Para escenas nuevas conserva una composición CSS equivalente para dispositivos modestos y ahorro de datos.
