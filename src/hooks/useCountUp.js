import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * useCountUp
 * Animates a number from 0 to `end` once the element scrolls into view.
 * Returns [ref, displayValue].
 *
 * @param {number} end       - target value
 * @param {number} duration  - animation length in ms
 * @param {number} decimals  - decimal places to show
 */
export function useCountUp(end, duration = 1600, decimals = 0) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return [ref, value.toFixed(decimals)];
}
