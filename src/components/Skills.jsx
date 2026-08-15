import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../assets/assets';

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Marketing'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='skills'
      className='py-20 bg-dark-100 scroll-mt-20'
    >
      <div className='w-full px-6 md:px-12 lg:px-20'>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
            My <span className='text-purple'>Skills</span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto text-base'>
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple text-white shadow-lg shadow-purple/30 scale-105'
                  : 'bg-dark-300 text-gray-400 hover:text-white hover:bg-dark-400 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Equal Square Dimensions */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto'
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.title}
                className='bg-dark-300/90 border border-white/5 hover:border-purple/50 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] flex flex-col justify-between min-h-[300px] group'
              >
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='p-3 bg-purple/15 rounded-2xl text-purple text-3xl group-hover:scale-110 group-hover:bg-purple/25 transition-all duration-300 flex-shrink-0'>
                      <skill.icon />
                    </div>
                    <h3 className='text-xl font-bold text-white group-hover:text-purple transition-colors'>
                      {skill.title}
                    </h3>
                  </div>

                  <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                    {skill.description}
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 pt-4 border-t border-white/5'>
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-dark-400 rounded-full text-xs text-gray-300 font-medium border border-purple/10'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills;
