import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress
 * A thin gradient bar pinned to the top of the viewport that fills as the
 * user scrolls down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-accent-gradient"
    />
  );
}
