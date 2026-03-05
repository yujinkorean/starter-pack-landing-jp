import { BookOpen, Headphones, NotebookPen, ArrowDown } from "lucide-react";

// 🌟 부드러운 스크롤 이동을 위한 함수 추가 🌟
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PackageSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[900px]">
        
        {/* 1. Header */}
        <div className="mb-16 text-center md:mb-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-5xl md:leading-[1.3]">
            なぜ「本・音声・単語」が<br className="hidden md:block" />
            一緒だと学びやすいのか
          </h2>
          <p className="mt-8 text-lg font-medium text-neutral-600 md:text-xl">
            <span className="font-bold text-neutral-900">読む</span> → <span className="font-bold text-neutral-900">話す</span> → <span className="font-bold text-neutral-900">定着する</span>。<br />
            3つで1セットにしたのは、「最初に話せる実感」を最短で作るためです。
          </p>
        </div>

        {/* 2. Vertical Stack */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Block 01 */}
          <div className="group flex flex-col items-start gap-6 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-10 md:p-12">
            <div className="flex shrink-0 items-center gap-6">
              <span className="text-5xl font-black text-neutral-300 transition-colors group-hover:text-neutral-500 md:text-6xl">
                01
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                <BookOpen size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                ストーリー型メインテキスト
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
                ユジンとエヴァンの物語を追いながら、挨拶・発音・最初の会話まで。「次が気になる」流れで自然に前へ進めます。
              </p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="group flex flex-col items-start gap-6 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-10 md:p-12">
            <div className="flex shrink-0 items-center gap-6">
              <span className="text-5xl font-black text-neutral-300 transition-colors group-hover:text-neutral-500 md:text-6xl">
                02
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                <Headphones size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                会話オーディオ
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
                短い音声を聞いて、真似して、もう一度。リズムと口の動きを“同時に”作るためのガイドです。
              </p>
            </div>
          </div>

          {/* Block 03 */}
          <div className="group flex flex-col items-start gap-6 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-10 md:p-12">
            <div className="flex shrink-0 items-center gap-6">
              <span className="text-5xl font-black text-neutral-300 transition-colors group-hover:text-neutral-500 md:text-6xl">
                03
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                <NotebookPen size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                ボキャブラリーノート
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
                単語を“リスト”で終わらせず、物語の文で回収する復習ノート。短時間で振り返れて、忘れにくい形に整えます。
              </p>
            </div>
          </div>

        </div>

        {/* 🌟 3. Footer (스무스 스크롤이 적용된 CTA 버튼) 🌟 */}
        <div className="mt-16 text-center">
          <button 
            type="button"
            onClick={() => scrollToId("pricing")}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-8 py-4 text-sm font-bold tracking-widest text-neutral-600 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:shadow-lg md:text-base"
          >
            3つが揃って、はじめて「話せる」が始まります。
            <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
}