import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { LuGithub, LuLayers } from 'react-icons/lu';
import { Github } from 'lucide-react';

interface ShowcaseProject {
  github: string | undefined;
  name: string;
  description: string;
  technologies: string[] | undefined;
}

const Projects: React.FC = () => {
  const projects: ShowcaseProject[] = [
    ...portfolioData.projects.map(prj => ({
      name: prj.title,
      description: prj.description,
      technologies: prj.technologies,
      github: prj.github
    }))
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <div className="w-20 h-1.5 bg-[var(--accent)] rounded-full" />
          </div>
          <p className="max-w-md text-[var(--text)]/60 text-lg">
            A collection of engineering projects, research prototypes, and professional contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 flex flex-col h-full hover:border-[var(--accent)] transition-all relative overflow-hidden"
            >
              {/* Decorative Icon BG */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <LuLayers size={120} />
              </div>

              {/* //only show github icon if link is available */}
             
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                  <LuLayers size={24} />
                </div>
                {project.github &&
                <div className="flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <LuGithub size={20} />
                  </motion.a>
                </div>
                }
              </div>

              <h4 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors text-[var(--accent)]">
                {project.name}
              </h4>
              <p className="text-[var(--text)]/70 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies?.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-[var(--bg)] text-[var(--text)]/60 text-[10px] font-bold uppercase tracking-widest rounded-full border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
