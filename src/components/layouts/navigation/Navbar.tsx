import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../atoms/actions/Button';
import { FaChevronDown } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="px-3 sm:px-6 py-2 bg-gradient-to-r from-amber-600 via-amber-800 to-neutral-900 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex justify-between items-center gap-2 sm:gap-6 w-full max-w-xl mx-auto shadow-lg backdrop-blur-md relative">
      <div className="flex justify-start items-center gap-3 sm:gap-5">
        {/* Link: Inicio */}
        <a href="/" className="inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/90 text-xs sm:text-sm font-medium font-sans leading-5">Inicio</div>
        </a>

        {/* Desktop Links: Show only on screens >= sm */}
        <a href="/non-profit" className="hidden sm:inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/70 text-xs sm:text-sm font-medium font-sans leading-5">Fundaciones</div>
        </a>
        <a href="/blog" className="hidden sm:inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
          <div className="justify-center text-white/70 text-xs sm:text-sm font-medium font-sans leading-5">Blog</div>
        </a>

        {/* Mobile Dropdown: Show only on screens < sm */}
        <div className="relative sm:hidden flex items-center" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium font-sans leading-5 focus:outline-none cursor-pointer"
          >
            <span>Fundación</span>
            <FaChevronDown className={`text-[8px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-3 bg-neutral-950/95 border border-white/10 rounded-2xl p-1.5 shadow-2xl min-w-[130px] flex flex-col z-50">
              <a
                href="/non-profit"
                className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-xs sm:text-sm font-medium font-sans"
                onClick={() => setIsOpen(false)}
              >
                Iniciativa
              </a>
              <a
                href="/blog"
                className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-xs sm:text-sm font-medium font-sans"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Button: Portafolio */}
      <a href="/portafolio" className="shrink-0">
        <Button variant="dark" label="Portafolio" className="!px-3 sm:!px-5 !py-1.5 sm:!py-2 text-xs sm:text-sm" />
      </a>
    </div>
  );
};

