import React from 'react'
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='py-8 bg-dark-300 border-t border-white/5 relative'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4'>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-semibold text-white">Jagriti Chawla</span>.
          <span>All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/chawlajagriti10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple text-lg transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jagriti-chawla-5b4919269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple text-lg transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-purple/20 hover:bg-purple text-purple hover:text-white rounded-xl transition-all duration-300 shadow-md cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-sm" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer;