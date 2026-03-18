import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { LuArrowDown } from 'react-icons/lu';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.title;
  const [index, setIndex] = useState(0);
  const glitchRef = useRef<HTMLSpanElement>(null);

  const startTyping = () => {
    setDisplayText('');
    setIndex(0);
  };

  useEffect(() => {
    const glitchElement = glitchRef.current;
    if (glitchElement) {
      glitchElement.classList.add('glitch-effect');
      const timer = setTimeout(() => {
        glitchElement.classList.remove('glitch-effect');
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="about" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[var(--accent)] mb-4 block">
            Computer Engineer
          </span>
          <h1 onMouseEnter={startTyping} className="text-5xl md:text-8xl font-display font-bold tracking-tight uppercase leading-[0.9] mb-8">
            I'm <span ref={glitchRef} className="glitch-text" data-text={portfolioData.name}>{portfolioData.name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl"
        >
          <p onMouseEnter={startTyping} className="text-xl md:text-2xl font-light text-[var(--text)]/80 leading-relaxed mb-10 min-h-[3.5rem]">
            {displayText}
            <span className="animate-pulse inline-block ml-1 w-1 h-6 bg-[var(--accent)]" />
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold rounded-full hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              Discover my work
            </motion.a>
            <motion.a
              href="#career"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 font-medium hover:text-[var(--accent)] transition-colors group"
            >
              See my background 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <LuArrowDown className="text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
