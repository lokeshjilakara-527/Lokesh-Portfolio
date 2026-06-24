import { motion } from 'framer-motion';

/**
 * LoadingScreen
 * Full-screen intro shown on first paint. The parent (App) controls when it
 * unmounts via AnimatePresence; here we just render the animated content.
 */
export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Spinning gradient ring with monogram */}
      <div className="relative grid h-24 w-24 place-items-center">
        <motion.span
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          style={{
            background:
              'linear-gradient(135deg,#7c5cff,#22d3ee) border-box',
            WebkitMask:
              'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
        <span className="font-display text-3xl font-bold text-gradient">LJ</span>
      </div>

      <motion.p
        className="mt-6 font-mono text-xs tracking-[0.3em] text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        LOADING PORTFOLIO
      </motion.p>
    </motion.div>
  );
}
