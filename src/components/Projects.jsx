import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'

const projectCategories = ['All', 'React', 'JavaScript', 'Fullstack'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='projects'
      className='py-20 bg-dark-200 scroll-mt-20'
    >
      <div className='max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20'>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
            My <span className='text-purple'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto text-base'>
            A Selection of my recent work
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-purple text-white shadow-lg shadow-purple/30 scale-105'
                  : 'bg-dark-300 text-gray-400 hover:text-white hover:bg-dark-400 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto'
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects;