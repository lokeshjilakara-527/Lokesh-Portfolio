import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { profile, stats } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';

/** A single animated statistic. */
function StatCard({ stat }) {
  const [ref, value] = useCountUp(stat.value, 1600, stat.decimals || 0);
  return (
    <div
      ref={ref}
      className="gradient-border glass rounded-2xl p-6 text-center"
      data-cursor="hover"
    >
      <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {value}
        {stat.suffix}
      </div>
      <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
    </div>
  );
}

/**
 * About
 * Professional summary on the left, quick facts + animated counters on the right.
 */
export default function About() {
  const facts = [
    { icon: GraduationCap, label: profile.degree },
    { icon: MapPin, label: profile.university },
    { icon: Calendar, label: `Expected Graduation · ${profile.graduationYear}` },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>

          <ul className="mt-8 space-y-4">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-slate-300">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-gradient-soft text-cyber-cyan">
                  <f.icon size={18} />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
