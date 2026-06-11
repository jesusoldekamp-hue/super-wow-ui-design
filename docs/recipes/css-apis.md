# View Transitions y Scroll-Driven Animations

Estas APIs reducen JavaScript, pero requieren mejora progresiva:

```css
@supports (animation-timeline: scroll()) {
  .progress {
    animation: grow linear;
    animation-timeline: scroll(root);
  }
}
```

No ocultes contenido si la API no existe. Mantén la navegación y el estado funcionales sin animación.
