import { motion } from 'framer-motion';

/**
 * SectionHeading
 * Consistent heading used at the top of every section.
 *
 * @param {string} eyebrow  - small mono label above the title
 * @param {string} title    - main heading text
 * @param {string} subtitle - optional supporting line
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyber-cyan"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display text-3xl font-bold sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
      {/* gradient underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-6 h-0.5 w-20 origin-center rounded-full bg-accent-gradient"
      />
    </div>
  );
}
