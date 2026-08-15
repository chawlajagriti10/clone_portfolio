import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  const images = [assets.profileImg, assets.profileImg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200 scroll-mt-20'
    >
      <div className='max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20'>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
            About <span className='text-purple'>Me</span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto text-base'>
            Get to know more about my background and passion
          </p>
        </div>

        {/* Image + Journey Content */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          
          {/* Framed Profile Image Carousel */}
          <div className='w-full max-w-[340px] sm:max-w-md lg:max-w-[450px] mx-auto rounded-2xl overflow-hidden relative group border border-purple/20 shadow-2xl bg-dark-300'>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Profile"
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-top rounded-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Hover Shine Effect */}
            <div className='absolute inset-0 rounded-2xl overflow-hidden pointer-events-none'>
              <div className='absolute -left-40 top-0 h-full w-24 bg-white/10 rotate-12 group-hover:left-[120%] transition-all duration-1000 ease-in-out'></div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className='rounded-2xl p-2 sm:p-4'>
              <h3 className='text-2xl font-semibold text-white mb-6'>My Journey</h3>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                My journey as a Frontend Developer began with a simple curiosity about how websites are created. I started learning HTML, CSS, and JavaScript to understand the basics of web development. As I gained confidence, I explored modern technologies like React.js, Bootstrap, and Tailwind CSS to build faster, more interactive, and responsive websites.
              </p>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                Along with frontend development, I also learned programming languages such as C, C++, and Core Java, which helped me improve my logical thinking and problem-solving skills. Every project I build teaches me something new and helps me become a better developer.
              </p>

              <p className='text-gray-300 mb-10 leading-relaxed'>
                I enjoy turning ideas into real websites that are clean, responsive, and easy to use. I believe that learning is a continuous journey, so I always try to improve my skills by building new projects and exploring new technologies. My goal is to create websites that not only look good but also provide a great experience for everyone who uses them.
              </p>

              {/* Info Cards Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6'>
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer border border-white/5 hover:border-purple/30'
                  >
                    <div className='text-purple text-4xl mb-3'>
                      <data.icon />
                    </div>
                    <h4 className='text-xl font-semibold text-white mb-2'>{data.title}</h4>
                    <p className='text-gray-400 text-sm leading-relaxed'>{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About;

