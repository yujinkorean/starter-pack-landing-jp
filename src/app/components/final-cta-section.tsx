import { ArrowRight, Check, Clock } from "lucide-react";

const LINE_URL = "https://lin.ee/YaJg73C";
const CHECKOUT_COACHING = "https://yujinkorean.gumroad.com/l/rknprh";

type FinalCTASectionProps = {
  id?: string;
  pricingId?: string;
  previewId?: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FinalCTASection({
  id = "final-cta",
  pricingId = "pricing",
  previewId = "preview",
}: FinalCTASectionProps) {
  return (
    <section id={id} className="w-full bg-neutral-50 px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[960px]">

        {/* ━━━ メインカード ━━━ */}
        <div className="relative overflow-hidden rounded-[3rem] bg-neutral-900 px-6 py-16 text-center shadow-2xl md:px-16 md:py-24">

          {/* 배경 글로우 */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/10 hidden md:block md:blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 hidden md:block md:blur-[80px]" />

          <div className="relative z-10">
            {/* 긴급 배지 */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2">
              <Clock size={14} className="text-orange-400" />
              <span className="text-xs font-bold text-orange-400">
                初期リリース限定価格 · 期間終了後は価格変更予定
              </span>
            </div>

            <h2 className="mx-auto max-w-[22ch] text-3xl font-extrabold leading-[1.35] tracking-tight text-white md:text-5xl md:leading-[1.25]">
              「また続かなかった」を<br />
              最後にする6週間を、<br />
              ここから始めましょう。
            </h2>

            <p className="mx-auto mt-8 max-w-[56ch] text-base leading-relaxed text-neutral-400 md:text-lg">
              まずは無料の20ページから体験できます。<br />
              本気で始めたいなら、コーチングプランがおすすめです。
            </p>

            {/* CTAボタン2つ */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] py-4 text-base font-bold text-white shadow-lg shadow-green-900/30 transition hover:opacity-90 sm:w-auto sm:px-8"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/>
                </svg>
                まず無料で20ページ体験する
              </a>
              <button
                onClick={() => scrollToId(pricingId)}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-base font-bold text-neutral-900 shadow-sm transition hover:bg-neutral-100 sm:w-auto sm:px-8"
              >
                コーチングプランを見る
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* 체크리스트 */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-neutral-400 md:gap-6">
              {[
                "初心者向け",
                "日本円決済対応",
                "スマホ・PC対応",
                "AIではなく人間が回答",
                "買い切り・追加料金なし",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-white/60">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ━━━ 사보험 (불안 해소) ━━━ */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-2xl">📱</p>
            <p className="mt-2 text-sm font-bold text-neutral-800">購入後すぐ届く</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              決済完了後、メールでダウンロードリンクが届きます
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-2xl">💬</p>
            <p className="mt-2 text-sm font-bold text-neutral-800">AIではなく人間が答える</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              韓国語ネイティブ講師が24時間以内に返信します
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center">
            <p className="text-2xl">🔒</p>
            <p className="mt-2 text-sm font-bold text-neutral-800">追加料金は一切なし</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              コーチングもサポートも、プラン料金に含まれています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
