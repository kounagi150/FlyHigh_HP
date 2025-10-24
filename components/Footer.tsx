import { Trophy, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Xアイコン（旧Twitter）のSVGコンポーネント
const XIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  // SNSリンクとエントリーサイト
  const socialLinks = [
    {
      title: '大会公式X',
      handle: '@FlyHigh_smash',
      url: 'https://twitter.com/FlyHigh_smash',
      icon: XIcon,
      description: '最新情報をお届け',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '主催者X',
      handle: '@ABFly_Kamazuka',
      url: 'https://twitter.com/ABFly_Kamazuka',
      icon: XIcon,
      description: '大会運営者',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'start.gg',
      handle: '大会エントリー',
      url: 'https://start.gg',
      icon: Trophy,
      description: 'エントリーはこちら',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <footer id="links" className="relative bg-gray-100 text-gray-900 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 py-16 pb-0">
        <div className="mx-auto max-w-7xl px-6">
          {/* セクションヘッダー */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight font-mono text-orange-500 mb-8">
              LINKS
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              公式SNSで最新情報をチェック、エントリーはstart.ggから
            </p>
            <div className="w-32 h-2 bg-orange-500 mx-auto mt-8"></div>
          </div>
          
          {/* ソーシャルリンクグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300"
                >
                  {/* アイコンとリンク表示 */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 bg-gradient-to-r ${link.color} border-2 border-gray-400`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {link.title}
                  </h3>
                  <p className="text-orange-600 font-mono font-semibold mb-3 text-lg">
                    {link.handle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              );
            })}
          </div>
          
          {/* フッター情報 */}
          <div className="pt-20 pb-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-700 mb-2 font-semibold">
                  © 2025 Fly High!!  All rights reserved.
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <Image
                  src="/FHTxt_touka.png"
                  alt="Fly High!! ロゴ"
                  width={180}
                  height={50}
                  className="mx-auto mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}