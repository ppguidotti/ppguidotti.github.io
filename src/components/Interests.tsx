import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { LuHeart, LuBookOpen, LuUsers, LuCpu } from 'react-icons/lu';

const Interests: React.FC = () => {
  const icons = [<LuHeart />, <LuBookOpen />, <LuUsers />, <LuCpu />];

  return (
    <section id="interests" className="py-24 px-6 bg-[var(--card)]/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Life & Passions</h2>
          <div className="w-20 h-1.5 bg-[var(--accent)] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {portfolioData.interests.map((interest, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--accent)] transition-all relative overflow-hidden ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="z-10">
                  <div className="text-[var(--accent)] text-2xl mb-4 group-hover:scale-110 transition-transform origin-left">
                    {icons[idx % icons.length]}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{interest.category}</h4>
                </div>
                  {interest.description && <p className="text-[var(--text)]/80 mb-4">{interest.description}</p>}
                <div className="z-10 flex flex-wrap gap-2">
                  {interest.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium text-[var(--text)]/60 bg-[var(--bg)]/50 px-3 py-1 rounded-full border border-[var(--border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            );
          })}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white"
          >
            <LuHeart className="text-4xl mb-4 animate-pulse" />
            <h4 className="text-xl font-bold mb-2">Always Learning</h4>
            <p className="text-sm opacity-80">Continuously exploring new horizons in tech and non-tech fields.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
