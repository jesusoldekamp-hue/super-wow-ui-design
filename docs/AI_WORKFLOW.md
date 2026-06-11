# Flujo para Claude Code y Codex

## 1. Brief

Antes de generar UI, concreta:

- producto, audiencia y acción principal;
- mensaje que debe recordar el visitante;
- contenido real disponible;
- secciones y prioridades;
- personalidad visual en 3-5 adjetivos;
- restricciones de marca, rendimiento y accesibilidad.

Si faltan datos no críticos, usa supuestos explícitos y contenido específico del producto. Evita lorem ipsum.

## 2. Dirección visual

Define un sistema pequeño:

- una tipografía protagonista y una funcional;
- una escala de espacio consistente;
- un color de acento con función clara;
- dos o tres tipos de superficie;
- una gramática de movimiento: entrada, continuidad y feedback.

Busca calidad comparable a referentes líderes, no semejanza literal. La identidad, composición y contenido deben ser originales.

## 3. Arquitectura

- Parte de la plantilla más cercana.
- Reutiliza `packages/ui`.
- Usa `packages/effects` únicamente para momentos de alto valor.
- Conserva datos y contenido separados de la presentación cuando vayan a repetirse.
- Mantén Server Components salvo interacción, navegador, animación o WebGL.

## 4. Movimiento

1. CSS para hover, estados y efectos ligados al scroll sencillos.
2. Motion para gestos, presencia y layout.
3. GSAP para timelines, pinning, SplitText y MorphSVG.
4. Lenis solo si el ritmo de scroll forma parte del concepto.
5. Three.js solo si aporta comprensión, atmósfera o interacción.

Cada capa debe degradar a una experiencia estática completa con `prefers-reduced-motion`.

## 5. Verificación

Ejecuta:

```bash
corepack pnpm doctor
corepack pnpm check
corepack pnpm test:e2e
```

Después inspecciona:

- 375 px, tablet y escritorio;
- menú, enlaces, formularios y foco por teclado;
- movimiento reducido;
- overflow horizontal;
- errores de consola e hidratación;
- LCP, CLS y peso de escenas avanzadas.

`corepack pnpm ready` agrupa las validaciones automatizadas.
