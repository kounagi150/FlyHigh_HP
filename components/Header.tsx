'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Header() {
  // モバイルメニューの開閉状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // メニューを閉じる
    }
  };

  // ナビゲーション項目
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'links', label: 'LINKS' }
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-lg py-2"
          : "bg-transparent border-transparent py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center h-16 sm:h-20">
        {/* ロゴセクション */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/FHTxt_touka.png"
            alt="Fly High!! ロゴ"
            width={120}
            height={28}
            className="h-auto w-auto"
          />
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative transition-all duration-300 font-semibold tracking-wide group",
                isScrolled ? "text-gray-700 hover:text-orange-500" : "text-white hover:text-orange-200"
              )}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* モバイルハンバーガーメニュー */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="メニューを開く"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "p-2 rounded-md hover:bg-white/20 transition-colors",
              isScrolled ? "text-gray-700" : "text-white"
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニューパネル */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-md overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-2 rounded-md text-gray-800 hover:bg-orange-50 transition-colors font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}