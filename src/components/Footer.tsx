import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-display font-bold tracking-tighter">
            PG<span className="text-[var(--accent)]">.</span>
          </div>
          <p className="text-sm text-[var(--text)]/50">
            © {new Date().getFullYear()} Pierpaolo Guidotti. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <motion.a
            whileHover={{ y: -3, color: 'var(--accent)' }}
            href={`https://${portfolioData.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)]/60 transition-colors"
          >
            <LuGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: 'var(--accent)' }}
            href={`https://${portfolioData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)]/60 transition-colors"
          >
            <LuLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: 'var(--accent)' }}
            href={`mailto:${portfolioData.contact.email}`}
            className="text-[var(--text)]/60 transition-colors"
          >
            <LuMail size={24} />
          </motion.a>
        </div>

        <div className="text-xs font-bold uppercase tracking-widest opacity-30 text-center md:text-right">
          Built with React + Tailwind v4 + Framer Motion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
