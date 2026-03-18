import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';

const Career: React.FC = () => {
  return (
    <section id="career" className="py-24 px-6 bg-[var(--card)]/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Career & Education</h2>
          <div className="w-20 h-1.5 bg-[var(--accent)] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Vertical line connector for desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-[var(--border)] -translate-x-1/2" />

          {/* Work Experience */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg">
                <LuBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Experience</h3>
            </div>

            {portfolioData.experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-[var(--border)] md:border-l-0 md:pl-0"
              >
                {/* Dot for mobile/timeline */}
                {/* <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)] md:hidden" /> */}
                
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2 block">
                  {exp.period}
                </span>
                <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                <p className="text-[var(--text)]/60 font-medium mb-4">{exp.company}</p>
                <p className="text-sm text-[var(--text)]/80 mb-4">{exp.summary}</p>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm text-[var(--text)]/80 flex gap-2">
                      <span className="text-[var(--accent)]">•</span> {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg">
                <LuGraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-[var(--border)] md:border-l-0 md:pl-0"
              >
                {/* <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)]" /> */}
                
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2 block">
                  {edu.period}
                </span>
                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-[var(--text)]/60 font-medium mb-2">{edu.institution}</p>
                {edu.focus && <p className="text-sm text-[var(--text)]/80 mb-2 italic">{edu.focus}</p>}
                {edu.thesis && <p className="text-sm text-[var(--text)]/80 mb-2">Thesis: {edu.thesis}</p>}
                {edu.grade && <p className="text-sm font-bold">Grade: {edu.grade}</p>}
                {edu.gpa && <p className="text-sm font-bold">GPA: {edu.gpa}</p>}
                {edu.projects && (
                  <div className="mt-4 space-y-3">
                    <p className="text-xs font-bold uppercase opacity-50">Notable Projects:</p>
                    {edu.projects.map((proj, i) => (
                      <div key={i} className="bg-[var(--card)] p-3 rounded-lg border border-[var(--border)]">
                        <p className="text-sm font-bold text-[var(--accent)]">{proj.name}</p>
                        <p className="text-xs text-[var(--text)]/70">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
