import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, FolderGit2, Mail, Github, Linkedin } from 'lucide-react';
import { profile, contact } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';

/**
 * Hero
 * The opening statement: name, role, an animated typing line cycling through
 * the taglines, three CTAs, and floating gradient blobs that drift on scroll
 * for a parallax feel.
 */
export default function Hero() {
  const typed = useTypewriter(profile.taglines);

  // Parallax: move background blobs as the page scrolls
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 120]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -90]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20"
    >
      {/* Decorative grid + parallax blobs */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        style={{ y: yBlob1 }}
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyber-violet/30 blur-[120px]"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-cyber-cyan/25 blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Status pill */}
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-300 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for opportunities
        </motion.span>

        <motion.p variants={item} className="mb-3 font-mono text-sm text-cyber-cyan">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">{profile.firstName}</span> {profile.lastName}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg"
        >
          {profile.role}
        </motion.p>

        {/* Typing line */}
        <motion.div
          variants={item}
          className="mt-6 flex items-center justify-center gap-1 font-mono text-lg sm:text-xl"
        >
          <span className="text-slate-400">&gt;</span>
          <span className="text-gradient font-semibold">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-cyber-cyan" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download size={18} /> Download Resume
          </a>
          <a href="#projects" className="btn-ghost">
            <FolderGit2 size={18} /> View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-5">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Github size={22} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 rounded-full bg-cyber-cyan" />
        </div>
      </motion.div>
    </section>
  );
}
