import Image from 'next/image';

export default function Gallery() {
  const galleryItems = [
    { 
      id: 1, 
      src: '/venue.jpg',
      title: '会場の熱気', 
      description: '会場の雰囲気',
      category: 'VENUE'
    },
    { 
      id: 2, 
      src: '/match.jpeg',
      title: '対戦の様子', 
      description: 'プレイヤーたちの対戦',
      category: 'MATCH'
    },
    { 
      id: 3, 
      src: '/group.jpeg',
      title: 'プレイヤーたち', 
      description: '参加者の集合写真',
      category: 'COMMUNITY'
    },
    { 
      id: 4, 
      src: '/booth.jpeg',
      title: 'ウメブラ出展ブース', 
      description: 'ウメブラでの出展ブース',
      category: 'EXHIBITION'
    },
    { 
      id: 5, 
      src: '/staff.jpeg',
      title: '大会運営', 
      description: '大会運営スタッフ',
      category: 'MANAGEMENT'
    },
    { 
      id: 6, 
      src: '/smile.jpeg',
      title: 'プレイヤーの様子', 
      description: 'プレイヤーたち',
      category: 'PLAYER'
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>
      
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight font-mono">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            大会の様子をご覧ください
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-8"></div>
        </div>
        
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0 || index === 3 ? 'md:col-span-1 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative ${
                index === 0 || index === 3 ? 'aspect-[16/10]' : 'aspect-[4/5]'
              } overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* カテゴリータグ */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-orange-200">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
              
              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg italic">
            詳細は公式SNSで随時更新中
          </p>
        </div>
      </div>
    </section>
  );
}