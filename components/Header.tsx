'use client';

import Image from 'next/image';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Fly High!! ロゴ"
            width={50}
            height={50}
            className="rounded-lg shadow-md"
          />
          <h1 className="text-2xl font-black text-gray-900 tracking-wide font-mono">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              FLY HIGH!!
            </span>
          </h1>
        </div>
        <nav className="flex gap-8">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'gallery', label: 'GALLERY' },
            { id: 'links', label: 'LINKS' }
          ].map((item) => (
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
      </div>
    </header>
  );
}