// src/directives/scrollReveal.ts
import type { Directive } from 'vue';


type RevealOptions = {
  threshold?: number;        // 0..1
  rootMargin?: string;       // '0px 0px -10% 0px'
  once?: boolean;            // si true, solo una vez (default true)
  className?: string;        // clase que se agrega (default 'is-visible')
};

const observerMap = new WeakMap<Element, IntersectionObserver>();

function isIntersectionObserverAvailable(): boolean {
  return typeof window !== 'undefined' && 'IntersectionObserver' in window;
}

export const vScrollReveal: Directive = {
  beforeMount(el: Element, binding) {
    if (!isIntersectionObserverAvailable()) {
      // Fallback: simplemente mostrar el elemento si no existe IntersectionObserver (SSR / navegadores viejos)
      el.classList.add(binding?.value?.className ?? 'is-visible');
      return;
    }

    const opts: RevealOptions = binding?.value || {};
    const threshold = typeof opts.threshold === 'number' ? opts.threshold : 0.15;
    const rootMargin = typeof opts.rootMargin === 'string' ? opts.rootMargin : '0px';
    const once = opts.once !== undefined ? opts.once : true;
    const className = opts.className ?? 'is-visible';

    // Estado inicial (solo si no lo hizo ya)
    if (!el.classList.contains('scroll-reveal-item')) {
      el.classList.add('scroll-reveal-item');
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            if (once) {
              observer.unobserve(entry.target);
              // opcional: disconnect para liberar recursos inmediatamente
              observer.disconnect();
              observerMap.delete(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerMap.set(el, io);
    io.observe(el);
  },

  unmounted(el: Element) {
    const io = observerMap.get(el);
    if (io) {
      try {
        io.unobserve(el);
      } catch (e) {
        // silently ignore
      }
      try {
        io.disconnect();
      } catch (e) {
        // silently ignore
      }
      observerMap.delete(el);
    }
  },
};
