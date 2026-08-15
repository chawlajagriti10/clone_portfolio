import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-md shadow-lg border-b border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-20 h-20 flex justify-between items-center">
        {/* Logo on Left */}
        <a
          href="#home"
          className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5 flex-shrink-0"
        >
          <span>Jagriti</span>
          <span className="text-purple">Chawla</span>
          <div className="w-2.5 h-2.5 bg-purple rounded-full animate-pulse"></div>
        </a>

        {/* Desktop Menu on Right */}
        <div className="hidden lg:flex items-center gap-10 ml-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-[16px] font-medium transition-colors duration-300 ${
                  isActive ? "text-purple font-semibold" : "text-gray-300 hover:text-purple"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-purple transition-all duration-300 rounded-full ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX className="text-purple" /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-dark-100/98 backdrop-blur-xl border-b border-purple/20 shadow-2xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-white font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition-colors py-1 px-4 rounded-lg ${
                  isActive
                    ? "text-purple font-bold bg-purple/10"
                    : "text-gray-300 hover:text-purple"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
