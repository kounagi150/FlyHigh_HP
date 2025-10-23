export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* セクションヘッダー */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </div>
        
        {/* 大会説明 */}
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            「Fly High!!」は、プレイヤーを中心としたeスポーツ大会です。
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            競技を通じてプレイヤー同士の交流を促進し、
            初心者から上級者まで参加できる環境を提供しています。
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            大会運営は参加者の体験を重視し、
            適切な進行と公平な競技環境の確保に努めています。
          </p>
        </div>
      </div>
    </section>
  );
}