import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='bg-dark-300 border border-white/5 hover:border-purple/40 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] cursor-pointer flex flex-col justify-between h-full group'>
      <div>
        {/* Thumbnail Image */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-dark-400">
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
          />
        </div>

        {/* Card Content */}
        <div className='p-6'>
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors'>
            {title}
          </h3>

          <p className='text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3'>
            {description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {tech?.map((item, index) => (
              <span
                key={index}
                className='px-3 py-1 bg-dark-400 rounded-full text-xs font-medium text-gray-300'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='p-6 pt-0 flex gap-3'>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple rounded-xl font-semibold text-white text-sm hover:bg-purple-600 shadow-md shadow-purple/20 transition-all duration-300'
        >
          <span>View Demo</span>
          <FaExternalLinkAlt className="text-xs" />
        </a>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-purple rounded-xl font-semibold text-white text-sm hover:bg-purple/20 transition-all duration-300'
        >
          <span>Code</span>
          <FaGithub className="text-sm" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;