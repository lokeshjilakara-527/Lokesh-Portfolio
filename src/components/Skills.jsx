import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { skillGroups } from '../data/portfolioData';

/**
 * Skills
 * Interactive cards grouped by category. Cards lift and reveal a gradient
 * border on hover; individual skill pills highlight on hover.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="My toolkit"
        title="Skills & Technologies"
        subtitle="The languages, frameworks, and tools I work with."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="gradient-border glass group rounded-2xl p-6"
            data-cursor="hover"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient-soft text-cyber-cyan transition-transform duration-300 group-hover:scale-110">
                <group.icon size={20} />
              </span>
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyber-violet/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
