import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/portfolioData';

/**
 * Projects
 * Filterable project grid. Categories are derived from the data so adding a
 * new project with a new category automatically adds a filter button.
 * Cards animate in/out with AnimatePresence + layout animation.
 */
export default function Projects() {
  // Build the unique category list: "All" + every category in the data
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="What I've built"
        title="Featured Projects"
        subtitle="A selection of things I've designed and shipped."
      />

      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 font-mono text-sm transition-all duration-300 ${
              active === cat
                ? 'bg-accent-gradient text-white shadow-glow'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="gradient-border glass group flex flex-col rounded-2xl p-6"
              data-cursor="hover"
            >
              {/* Category tag + actions */}
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-gradient-soft px-3 py-1 font-mono text-xs text-cyber-cyan">
                  <Sparkles size={12} /> {project.category}
                </span>
                <div className="flex gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="View source"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="#"
                    aria-label="Live demo"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold">{project.title}</h3>

              {/* Features */}
              <ul className="mt-4 flex-1 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-violet" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
