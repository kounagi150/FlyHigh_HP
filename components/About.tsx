import MotionWrapper from './MotionWrapper';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* セクションヘッダー */}
        <MotionWrapper direction="up" className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </MotionWrapper>

        {/* 大会説明 */}
        <div className="max-w-3xl mx-auto space-y-8">
          <MotionWrapper direction="up" delay={0.2}>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              「Fly High!!」は、スマブラSPの非公式オフライン大会です。
            </p>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.4}>
            <p className="text-lg text-gray-600 leading-relaxed">
              ガチ勢もエンジョイ勢も、誰もが楽しめる場所を目指して。<br />
              ただ勝つだけでなく、同じゲームを愛する仲間との出会いや、<br />
              熱狂を共有できる空間を大切にしています。
            </p>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.6}>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500">
                ※本大会は個人の有志による非公式大会であり、任天堂株式会社様および関連企業様とは一切関係ありません。
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}