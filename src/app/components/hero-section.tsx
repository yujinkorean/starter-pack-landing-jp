import React from 'react';

export const HeroSection = ({ previewId, pricingId }: { previewId: string; pricingId: string }) => {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF9] pt-20 pb-24 md:pt-32 md:pb-40">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .jp-serif{
            font-family: "Noto Sans JP", system-ui, sans-serif;
          }
          .hero-title{
            font-weight:500;
            letter-spacing:-0.01em;
            color:#1F2937;
            line-height:1.3;
          }
          .hero-accent{
            color:#F97316;
          }
        `,
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-6 text-center">
        {/* 상단 신뢰 뱃지 */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs md:text-sm text-gray-600 shadow-sm mb-8 md:mb-10">
          <span className="flex items-center justify-center text-[16px] leading-none mr-2">🎓</span>
          現役韓国語講師が監修した、物語テキスト
        </div>

        {/* 메인 카피 */}
        <h1 className="jp-serif hero-title text-3xl md:text-5xl mb-6 md:mb-8">
          韓国語が続かない。
          <br className="hidden md:block" />
          参考書が終わらない。
          <br className="hidden md:block" />
          いつも<span className="whitespace-nowrap">3ページで終わってた。</span>
          <br />
          <span className="hero-accent block mt-4 md:mt-6">
            だから、彼女のために作った
            <span className="whitespace-nowrap">「物語で続く」韓国語。</span>
          </span>
        </h1>

        <p className="jp-serif text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          韓国人の彼氏・彼女、友だちと、
          <span className="whitespace-nowrap">LINEで自然に返したい日本人向け。</span>
          文法問題ではなく、物語と会話で「最初の一言」から一緒に作っていくスタート教材です。
        </p>

        {/* 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-14 md:mb-16 text-left">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">📖</div>
            <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-gray-800">
              小説型テキスト
            </h3>
            <p className="text-gray-500 leading-relaxed text-xs md:text-sm">
              暗記ではなく「没入」。ユジンとエヴァンの物語を追いながら、挨拶・自己紹介・LINEで返せる一言まで、止まらず読み進められます。
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">🔖</div>
            <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-gray-800">
              対話型単語帳
            </h3>
            <p className="text-gray-500 leading-relaxed text-xs md:text-sm">
              ユジンの質問に答えながら単語を覚える形式。タメ口〜敬語まで、実際に彼氏・彼女に送りたくなるフレーズで身につきます。
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4">🎙️</div>
            <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-gray-800">
              8分間の音声ガイド
            </h3>
            <p className="text-gray-500 leading-relaxed text-xs md:text-sm">
              日本人エヴァンと一緒に受けるユジンの直講。AI音声ではない「生の会話」で、発音とリズムをまとめて真似できます。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center">
          {/* 프리뷰 페이지로 이동 */}
          <a
            href="https://starter-pack-landing-jp.vercel.app/preview/"
            className="bg-black text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-gray-900 transition shadow-lg hover:-translate-y-0.5 mb-3 md:mb-4"
          >
            1話分を無料で読んでみる
          </a>

          {/* 가격 섹션으로 스크롤 */}
          <button
            onClick={() =>
              document.getElementById(pricingId)?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-1 text-xs md:text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900"
          >
            すぐに始めたい方はこちら（料金を見る）
          </button>

          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mt-5 md:mt-6">
            <span className="flex items-center gap-2 px-3.5 md:px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-600 shadow-sm">
              🎙️ AI音声なし・ネイティブ収録
            </span>
            <span className="flex items-center gap-2 px-3.5 md:px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-600 shadow-sm">
              ✍️ 韓国語講師が監修した物語テキスト
            </span>
            <span className="flex items-center gap-2 px-3.5 md:px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-600 shadow-sm">
              💬 LINEで質問OK（プラン別）
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};