# Lenis

Usa Lenis solo cuando el scroll suave sea parte de la dirección de arte. No bloquees navegación por teclado, anclas ni la preferencia de reducir movimiento.

```tsx
import { LenisProvider } from "@workspace/effects/lenis-provider"
```

El provider incluido se desactiva con `prefers-reduced-motion`. Evita combinarlo con múltiples controladores de scroll.
