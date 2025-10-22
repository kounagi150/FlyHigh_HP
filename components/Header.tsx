'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  const items = [
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'links', label: 'LINKS' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center h-16 sm:h-20">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo Image A */}
          <Image
            src="/FHlogoTouka.png"
            alt="Fly High!! ロゴ"
            width={40}
            height={40}
            className="rounded-lg shadow-md"
          />
          {/* Text Image B */}
          <Image
            src="/FHTxt_touka.png"
            alt="Fly High!!"
            width={120}
            height={30}
            className="h-auto w-auto"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold tracking-wide group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-3 px-2 rounded-md text-gray-800 hover:bg-orange-50 transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}