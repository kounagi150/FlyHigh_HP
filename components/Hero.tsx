'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { NEXT_EVENT_DATE } from '@/constants/siteConfig';

export default function Hero() {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center text-white overflow-hidden">
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/group.jpeg"
            alt="Fly High!! 集合写真"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* 薄い白フィルター */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {/* ロゴ表示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Fly High!! ロゴ"
            width={500}
            height={250}
            className="mx-auto filter drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* 開催日情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            次回開催日: <span className="text-orange-600 font-semibold">{NEXT_EVENT_DATE}</span>
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* エントリーボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-2"
        >
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-3 rounded-full font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl transform hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              大会にエントリー
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}