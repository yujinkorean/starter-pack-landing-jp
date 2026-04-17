import { BookOpen, NotebookPen, ArrowDown } from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PackageSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[860px]">

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">Package</p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            なぜ「本・単語」が<br className="md:hidden" />
            セットだと学びやすいのか
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.85] text-neutral-500 md:text-lg">
            <span className="font-bold text-neutral-900">読む → 定着する。</span><br />
            2つをセットにしたのは、「最初の一言が出る実感」を最短で作るためです。
          </p>
        </div>

        <div className="flex flex-col gap-4">

          {/* Block 01 */}
          <div className="group flex flex-col items-start gap-5 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-10 md:p-10">
            <div className="flex shrink-0 items-center gap-4">
              <span className="text-4xl font-black text-neutral-200 transition-colors group-hover:text-neutral-400 md:text-5xl">01</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                <BookOpen size={28} strokeWidth={1.5} className="text-neutral-800" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">ストーリー型メインテキスト</h3>
              <p className="mt-3 text-[15px] leading-[1.85] text-neutral-600 md:text-base">
                ユジンとエヴァンの物語を追いながら、挨拶・発音・最初の会話まで。
                「次が気になる」流れで自然に前へ進めます。
                ストーリー・語彙・会話が自然につながる形で設計しています。
              </p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="group flex flex-col items-start gap-5 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-10 md:p-10">
            <div className="flex shrink-0 items-center gap-4">
              <span className="text-4xl font-black text-neutral-200 transition-colors group-hover:text-neutral-400 md:text-5xl">02</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                <NotebookPen size={28} strokeWidth={1.5} className="text-neutral-800" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">毎週LINE個別単語帳</h3>
              <p className="mt-3 text-[15px] leading-[1.85] text-neutral-600 md:text-base">
                単語を「リスト」で終わらせず、物語の文脈で回収する復習ノート。
                あなたの進度に合わせて毎週LINEで届くので、
                「今週覚えること」が常に明確です。
              </p>
              <p className="mt-2 text-xs text-neutral-400">※ 単語帳は毎週LINEで順次配信します</p>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => scrollToId("pricing")}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3.5 text-sm font-bold text-neutral-600 transition-all hover:bg-neutral-900 hover:text-white"
          >
            2つが揃って、はじめて「続く」が始まります。
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
