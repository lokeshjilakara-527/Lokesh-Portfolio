import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { education, certifications } from '../data/portfolioData';

/**
 * Education
 * Two-part section: an academic timeline on the left and certifications on the
 * right. Kept together because they're closely related credentials.
 */
export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="My background" title="Education & Certifications" />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Education timeline */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <GraduationCap className="text-cyber-cyan" size={22} /> Academic Journey
          </h3>

          <div className="relative pl-8">
            <span className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyber-violet via-cyber-cyan to-transparent" />
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-cyber-cyan bg-ink-950" />
                <div className="gradient-border glass rounded-xl p-5" data-cursor="hover">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display font-semibold">{edu.school}</h4>
                    <span className="font-mono text-xs text-slate-400">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-300">{edu.detail}</p>
                  <p className="mt-2 inline-block rounded-md bg-accent-gradient-soft px-2.5 py-1 font-mono text-xs text-cyber-cyan">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <Award className="text-cyber-cyan" size={22} /> Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="gradient-border glass flex items-center gap-4 rounded-xl p-5"
                data-cursor="hover"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
                  <Award size={22} />
                </span>
                <div>
                  <h4 className="font-display font-semibold leading-snug">{cert.title}</h4>
                  <p className="mt-0.5 text-sm text-slate-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
