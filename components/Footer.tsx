import { Twitter, Trophy, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = [
    {
      title: '大会公式X',
      handle: '@FlyHigh_smash',
      url: 'https://twitter.com/FlyHigh_smash',
      icon: Twitter,
      description: '最新情報をお届け',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '主催：釜塚ABふらいX',
      handle: '@ABFly_Kamazuka',
      url: 'https://twitter.com/ABFly_Kamazuka',
      icon: Twitter,
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
    <footer id="links" className="relative bg-black text-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tight font-mono">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                LINKS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              公式SNSで最新情報をチェック、エントリーはstart.ggから
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${link.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-orange-400 font-mono font-semibold mb-3 text-lg">
                    {link.handle}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {link.description}
                  </p>
                  
                  {/* ホバーエフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </a>
              );
            })}
          </div>
          
          {/* 追加セクション */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">
                次回大会への参加について
              </h3>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                プレイヤー同士の交流と競技参加の機会を提供します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                  エントリー情報を確認
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors">
                  過去大会を見る
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-2">
                  © 2025 Fly High!!  All rights reserved.
                </p>
                <p className="text-sm text-gray-500">
                  
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-4xl font-black font-mono tracking-wider">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    FLY HIGH!!
                  </span>
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  次回開催: 2025年11月予定
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}