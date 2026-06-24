import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { experiences } from '../data/portfolioData';

/**
 * Experience
 * Vertical timeline of roles. Each entry animates in as it enters the viewport.
 */
export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <div className="relative">
        {/* Vertical line */}
        <span className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyber-violet via-cyber-cyan to-transparent md:left-6" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Node */}
              <span className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full bg-accent-gradient text-white shadow-glow md:h-12 md:w-12">
                <Briefcase size={20} />
              </span>

              <div className="gradient-border glass rounded-2xl p-6" data-cursor="hover">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                  <span className="font-mono text-xs text-cyber-cyan">{exp.period}</span>
                </div>
                <p className="mt-1 font-medium text-slate-300">{exp.company}</p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyber-violet" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
