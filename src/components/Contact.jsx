import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa'
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success'|'error', text: '' }
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        "service_ke35w09",
        "template_bn6507j",
        form.current,
        "gQbG8B56YQNFPKng2"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage({
            type: 'success',
            text: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
          });
          e.target.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage({
            type: 'error',
            text: 'Oops! Failed to send message. Please try again or email me directly.'
          });
          console.error(error);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id='contact'
      className='py-24 bg-dark-200 scroll-mt-20'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
            Get In <span className='text-purple'>Touch</span>
          </h2>
          <p className='text-gray-400 max-w-xl mx-auto text-sm sm:text-base'>
            Let's connect and discuss your next web development project, creative design, or collaboration!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-start'>
          
          {/* Contact Form */}
          <div className='lg:col-span-2 bg-dark-300/80 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-xl'>
            <form className='space-y-6' ref={form} onSubmit={sendEmail}>
              
              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl text-sm font-medium border ${
                      statusMessage.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label htmlFor="name" className='block text-gray-300 text-sm font-medium mb-2'>
                  Your Name <span className="text-purple">*</span>
                </label>
                <input
                  id="name"
                  name='name'
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className='w-full bg-dark-400/80 border border-white/10 focus:border-purple rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 text-sm font-medium mb-2'>
                  Email Address <span className="text-purple">*</span>
                </label>
                <input
                  id="email"
                  name='email'
                  type="email"
                  required
                  placeholder="name@example.com"
                  className='w-full bg-dark-400/80 border border-white/10 focus:border-purple rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 text-sm font-medium mb-2'>
                  Your Message <span className="text-purple">*</span>
                </label>
                <textarea
                  id="message"
                  name='message'
                  required
                  rows={5}
                  placeholder="Type your message here..."
                  className='w-full bg-dark-400/80 border border-white/10 focus:border-purple rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple rounded-xl font-semibold text-white shadow-lg shadow-purple/30 hover:bg-purple-600 transition duration-300 disabled:opacity-50 cursor-pointer'
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Copy Buttons */}
          <div className='space-y-6 lg:pl-4'>
            
            {/* Location */}
            <div className='bg-dark-300/80 border border-white/5 rounded-2xl p-5 flex items-start gap-4 shadow-lg hover:border-purple/30 transition-all'>
              <div className='p-3 bg-purple/15 text-purple rounded-xl text-xl flex-shrink-0'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-base font-semibold text-white mb-1'>Location</h3>
                <p className='text-gray-300 text-sm'>Gurugram, Sector-1, IMT Manesar, Haryana</p>
              </div>
            </div>

            {/* Email (Click to copy) */}
            <div
              onClick={() => copyToClipboard('chawlajagriti75@gmail.com', 'email')}
              className='bg-dark-300/80 border border-white/5 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-lg hover:border-purple/30 transition-all cursor-pointer group'
              title="Click to copy Email"
            >
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-purple/15 text-purple rounded-xl text-xl flex-shrink-0 group-hover:bg-purple/25 transition-colors'>
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-white mb-1'>Email Address</h3>
                  <p className='text-gray-300 text-sm break-all'>chawlajagriti75@gmail.com</p>
                </div>
              </div>
              <button className="text-gray-400 group-hover:text-purple text-lg p-2 transition-colors">
                {copiedField === 'email' ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone (Click to copy) */}
            <div
              onClick={() => copyToClipboard('+917015770884', 'phone')}
              className='bg-dark-300/80 border border-white/5 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-lg hover:border-purple/30 transition-all cursor-pointer group'
              title="Click to copy Phone"
            >
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-purple/15 text-purple rounded-xl text-xl flex-shrink-0 group-hover:bg-purple/25 transition-colors'>
                  <FaPhone />
                </div>
                <div>
                  <h3 className='text-base font-semibold text-white mb-1'>Phone Number</h3>
                  <p className='text-gray-300 text-sm'>+91 7015770884</p>
                </div>
              </div>
              <button className="text-gray-400 group-hover:text-purple text-lg p-2 transition-colors">
                {copiedField === 'phone' ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Social Accounts */}
            <div className='bg-dark-300/80 border border-white/5 rounded-2xl p-5 shadow-lg'>
              <h3 className='text-base font-semibold text-white mb-4'>Follow Me</h3>
              <div className='flex items-center gap-4'>
                <a
                  href="https://github.com/chawlajagriti10/"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-11 h-11 rounded-xl bg-dark-400 border border-white/5 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 text-xl'
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jagriti-chawla-5b4919269"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-11 h-11 rounded-xl bg-dark-400 border border-white/5 flex items-center justify-center text-purple hover:bg-blue-500 hover:text-white transition duration-300 text-xl'
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact;