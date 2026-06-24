import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { contact } from '../data/portfolioData';

/**
 * Contact
 * Direct contact details as tappable cards. Kept simple and link-based (no
 * backend required) so it works the moment the site is deployed.
 */
export default function Contact() {
  const methods = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/lokesh-jilakara', href: contact.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/lokesh', href: contact.github },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-5 py-24">
      <SectionHeading
        eyebrow="Let's connect"
        title="Get In Touch"
        subtitle="Open to internships, collaborations, and a good conversation. The fastest way to reach me is email."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {methods.map((m, i) => (
          <motion.a
            key={m.label}
            href={m.href}
            target={m.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="gradient-border glass group flex items-center gap-4 rounded-2xl p-5"
            data-cursor="hover"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyber-cyan transition-transform duration-300 group-hover:scale-110">
              <m.icon size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{m.label}</p>
              <p className="truncate font-medium text-slate-200">{m.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Primary CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a href={`mailto:${contact.email}`} className="btn-primary">
          <Send size={18} /> Say Hello
        </a>
      </motion.div>
    </section>
  );
}
