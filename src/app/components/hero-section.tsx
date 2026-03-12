import React from 'react';

export const HeroSection = ({ previewId, pricingId }: { previewId: string; pricingId: string }) => {
  return (
<section className="relative overflow-hidden bg-[#FCFBF9] pt-24 pb-28 md:pt-36 md:pb-44">

<style dangerouslySetInnerHTML={{ __html: `

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

`}} />

<div className="max-w-6xl mx-auto px-6 text-center">

{/* 상단 신뢰 뱃지 */}
<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 shadow-sm mb-10">
<span className="flex items-center justify-center text-[16px] leading-none">🎓</span>
現役の韓国語教師が直接執筆
</div>


{/* 메인 카피 */}

<h1 className="jp-serif hero-title text-4xl md:text-6xl mb-12">

韓国語が続かない。<br/>
参考書が終わらない。<br/>

<span className="hero-accent block mt-6">
だから、物語で始める韓国語。
</span>

</h1>


{/* 카드 */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 text-left">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
<div className="text-3xl mb-4">📖</div>

<h3 className="font-semibold text-lg mb-3 text-gray-800">
小説型テキスト
</h3>

<p className="text-gray-500 leading-relaxed text-sm">
暗記ではなく「没入」。現役のプロ教師が設計したストーリーで、挫折せず最後まで学べます。
</p>

</div>



<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">

<div className="text-3xl mb-4">🔖</div>

<h3 className="font-semibold text-lg mb-3 text-gray-800">
対話型単語帳
</h3>

<p className="text-gray-500 leading-relaxed text-sm">
ユジンの質問に答えながら、タメ口〜敬語まで自然に使い分ける新しい学習体験。
</p>

</div>



<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">

<div className="text-3xl mb-4">🎙️</div>

<h3 className="font-semibold text-lg mb-3 text-gray-800">
8分間の音声ガイド
</h3>

<p className="text-gray-500 leading-relaxed text-sm">
日本人のエヴァン(Evan)と一緒に受けるユジンの直講。AIではない「生の声」で学べます。
</p>

</div>

</div>


{/* CTA */}

<div className="flex flex-col items-center">

<button
  onClick={() => document.getElementById(previewId)?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-black text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition shadow-lg hover:-translate-y-0.5 mb-10"
>
  ユジンの手紙を受け取る
</button>


<div className="flex flex-wrap justify-center gap-3 mt-6">

<span className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
🎙️ AI音声なし
</span>

<span className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
✍️ 著者制作ストーリー
</span>

<span className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
💬 LINE 1:1 質問対応
</span>

</div>

</div>

</div>

</section>
  );
};