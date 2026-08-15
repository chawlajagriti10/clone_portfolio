import React from 'react'
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'
import { FaGithub, FaEnvelope, FaFileAlt, FaLinkedin, FaCode, FaPalette, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen pt-28 pb-20 flex items-center bg-[#0c0b17] overflow-hidden scroll-mt-20'
    >
      <div className='w-full max-w-[1380px] mx-auto px-8 md:px-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
        
        {/* Left Side Info (Balanced desktop layout shifted slightly inward) */}
        <div className='w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col items-center lg:items-start'>
          <div className='inline-flex items-center gap-2 bg-[#18142a] border border-purple/30 px-5 py-2.5 rounded-full mb-6 text-sm md:text-base font-semibold text-purple-300 shadow-inner'>
            👋 Hello & Welcome to my Portfolio!
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight'>
            I'm <span className='text-purple bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>Jagriti Chawla</span>
          </h1>

          <h2 className='text-2xl sm:text-3xl font-bold mt-4 text-purple-300'>
            Frontend Developer & Designer
          </h2>

          <p className='text-lg sm:text-xl mt-6 text-gray-300 leading-relaxed max-w-xl font-normal'>
            From responsive web applications to creative UI designs and digital marketing, I craft impactful, high-performance digital solutions that are functional and visually engaging.
          </p>

          {/* Purple Line Accent */}
          <div className='w-20 h-1.5 bg-gradient-to-r from-purple to-pink-500 rounded-full mt-6 mb-8'></div>

          {/* Action Buttons */}
          <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto'>
            <a
              href="#projects"
              className='px-8 py-4 bg-purple rounded-xl font-bold text-white shadow-lg shadow-purple/30 hover:bg-purple-600 hover:scale-105 transition-all duration-300 text-center flex-1 sm:flex-initial text-base'
            >
              View Work
            </a>
            <a
              href="#contact"
              className='px-8 py-4 border-2 border-purple/80 rounded-xl font-bold text-white hover:bg-purple/20 transition-all duration-300 text-center flex-1 sm:flex-initial text-base'
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start items-center gap-5 mt-10">
            <a
              href="https://github.com/chawlajagriti10/"
              target='_blank'
              rel='noopener noreferrer'
              className="p-3.5 bg-dark-300/80 rounded-xl border border-white/5 text-gray-300 hover:text-purple hover:border-purple/50 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="text-2xl sm:text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/jagriti-chawla-5b4919269"
              target='_blank'
              rel='noopener noreferrer'
              className="p-3.5 bg-dark-300/80 rounded-xl border border-white/5 text-gray-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl sm:text-3xl" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chawlajagriti75@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-dark-300/80 rounded-xl border border-white/5 text-gray-300 hover:text-orange-400 hover:border-orange-500/50 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="text-2xl sm:text-3xl" />
            </a>

            <a
              href="/Jagriti_Chawla_Resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center gap-2 px-4 py-3.5 bg-dark-300/80 rounded-xl border border-white/5 text-gray-300 hover:text-purple hover:border-purple/50 transition-all duration-300 text-base font-semibold"
              title="Resume"
            >
              <FaFileAlt className="text-xl text-purple" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side Profile Photo & Glassmorphism Card */}
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-0 pb-28 sm:pb-20 lg:pb-0'>
          <div className='relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full'>
            
            {/* Glowing Ring strictly bounded behind image */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 animate-pulse opacity-80 blur-xs'></div>

            {/* Profile Photo */}
            <motion.img
              src={assets.profileImg}
              alt="Jagriti Chawla"
              className='relative w-full h-full rounded-full object-cover border-[6px] border-purple shadow-2xl z-10'
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut"
              }}
            />

            {/* Overlaid Glassmorphism Card (Shifted further right to bottom-right corner) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-24 -right-12 sm:-bottom-20 sm:-right-8 lg:-bottom-6 lg:-right-8 z-30 w-[230px] sm:w-[275px] rounded-2xl border border-purple/20 bg-dark-300/95 backdrop-blur-xl shadow-2xl p-4 sm:p-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple/20 flex items-center justify-center text-purple text-base sm:text-lg">
                      <FaCode />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      Frontend Developer
                    </span>
                  </div>
                  <FaCheckCircle className='text-green-400 text-xs sm:text-base' />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-base sm:text-lg">
                      <FaPalette />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      Graphic Designer
                    </span>
                  </div>
                  <FaCheckCircle className='text-green-400 text-xs sm:text-base' />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-base sm:text-lg">
                      <FaChartLine />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      Digital Marketer
                    </span>
                  </div>
                  <FaCheckCircle className='text-green-400 text-xs sm:text-base' />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero;








