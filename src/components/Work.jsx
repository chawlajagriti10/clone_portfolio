import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id='experience'
      className='py-24 bg-dark-100 scroll-mt-20'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
            Work <span className='text-purple'>Experience</span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto text-sm sm:text-base'>
            My professional journey, roles, and hands-on industry experience.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='relative border-l-2 border-purple/60 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12'>
            {workData.map((data, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-purple border-4 border-dark-100 shadow-md group-hover:scale-125 transition-transform duration-300'></div>

                {/* Content Box */}
                <div className='bg-dark-300/80 border border-white/5 hover:border-purple/40 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1'>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3'>
                    <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-purple transition-colors'>
                      {data.role}
                    </h3>
                    <span className='self-start sm:self-auto px-3.5 py-1 bg-purple/15 text-purple border border-purple/30 rounded-full text-xs font-semibold'>
                      {data.duration}
                    </span>
                  </div>

                  <p className='text-purple-300 font-medium mb-4 text-sm sm:text-base'>
                    {data.company}
                  </p>

                  <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                    {data.description}
                  </p>

                  {/* Key Responsibilities Bullet Points */}
                  {data.responsibilities && (
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Key Responsibilities & Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {data.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-sm text-gray-300 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple mt-2 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work;