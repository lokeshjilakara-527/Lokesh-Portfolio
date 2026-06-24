import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor
 * A glowing dot that tracks the pointer exactly, plus a larger ring that
 * lags behind with spring physics. Grows when hovering interactive elements.
 * Only renders on devices with a fine pointer (desktops) — touch users keep
 * their normal experience.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Raw pointer position
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Springy ring that trails the dot
  const ringX = useSpring(x, { stiffness: 250, damping: 28 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    // Grow the cursor over links/buttons
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovering(false);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Precise dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-cyan"
        style={{ x, y }}
      />
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyber-violet/70"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
