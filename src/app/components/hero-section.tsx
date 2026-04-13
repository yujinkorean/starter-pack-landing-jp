import React, { useState, useEffect } from 'react';

const LINE_URL = "https://lin.ee/YaJg73C";

export const HeroSection = ({ previewId, pricingId }: { previewId: string; pricingId: string }) => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 shadow-lg md:px-8">
          <p className="text-xs font-semibold text-white md:text-sm">
            🔥 <span className="text-orange-400">初期リリース限定価格</span>
            <span className="ml-2 hidden text-white/60 md:inline">· 期間終了後は価格変更予定</span>
          </p>
          <div className="flex items-center gap-3">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-[#06C755] px-4 py-1.5 text-xs font-bold text-white hover:opacity-90">
              無料で試す
            </a>
            <button onClick={() => document.getElementById(pricingId)?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-neutral-900 hover:bg-neutral-100">
              料金を見る
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 pb-20 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-100/50 blur-[80px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100/30 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">

          {/* 권위 배지 */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-600 shadow-sm">
            🇰🇷 韓国の入試家庭教師兼小説家が、構成から執筆まで直接制作
          </div>

          {/* 메인 카피 */}
          <h1 className="mb-5 text-[28px] font-extrabold leading-[1.35] tracking-tight text-neutral-900 md:text-[46px] md:leading-[1.25]">
            韓国語、何度始めても<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">同じ場所で止まっていませんか？</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded-sm bg-orange-100" />
            </span>
          </h1>

          {/* 서브 카피 */}
          <p className="mx-auto mb-3 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            韓国の受験教育の聖地・江南エリア<strong className="text-neutral-900">「大峙洞」</strong>の
            家庭教師スタイルで設計した<strong className="text-neutral-900">「管理型」6週間韓国語プログラム。</strong>
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base">
            小説のように読める教材 × 毎週届く個別単語帳 × 個別QnAコーチング。<br />
            「続かない」を、構造から変えます。
          </p>

          {/* 타깃 레벨 */}
          <p className="mx-auto mb-8 max-w-xl rounded-xl border border-neutral-200 bg-white px-5 py-3 text-xs font-medium text-neutral-500 md:text-sm">
            📌 独学4〜5ヶ月の初級者さん、何度も挫折してきた方を想定して設計しました。
          </p>

          {/* 3 포인트 */}
          <div className="mb-10 grid grid-cols-1 gap-3 text-left md:grid-cols-3">
            {[
              { icon: "📖", title: "小説のように読める教材", desc: "文法暗記ではなく、会話と状況で韓国語が自然に染み込む" },
              { icon: "📩", title: "毎週LINE個別単語帳", desc: "あなたの進度に合わせた単語帳が毎週自動で届く" },
              { icon: "🎯", title: "個別QnAコーチング", desc: "「ㅇパッチムが難しい」→ みかんで解決。詰まった瞬間を即サポート" },
            ].map((p) => (
              <div key={p.title} className={`flex items-start gap-3 rounded-2xl border p-5 ${p.icon === "🎯" ? "border-orange-200 bg-orange-50" : "border-neutral-200 bg-white"}`}>
                <span className="mt-0.5 text-xl">{p.icon}</span>
                <div>
                  <p className={`text-sm font-bold ${p.icon === "🎯" ? "text-orange-800" : "text-neutral-900"}`}>{p.title}</p>
                  <p className={`mt-1 text-xs leading-relaxed ${p.icon === "🎯" ? "text-orange-700" : "text-neutral-500"}`}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>


          {/* LA 배우 추천사 */}
          <div className="mx-auto mb-8 max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white px-6 py-5 shadow-sm text-left">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-lg">
                🎬
              </div>
              <div>
                <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
                  <span className="text-neutral-400">"</span>
                  An exceptional teacher, knowledgeable in his craft, and caters his lessons to needs.
                  Incredible at teaching language fluency, and his new book is a{" "}
                  <strong className="text-neutral-900">language learners dream.</strong>
                  <span className="text-neutral-400">"</span>
                </p>
                <p className="mt-3 text-xs font-bold text-neutral-500">
                  — 俳優 / 脚本家 / 監督　（LA在住）
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="group flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#06C755] py-4 text-base font-bold text-white shadow-lg shadow-green-200 transition hover:scale-105 md:text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/>
              </svg>
              まず無料で20ページ体験する
            </a>
            <button onClick={() => document.getElementById(pricingId)?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-neutral-400 underline underline-offset-4 hover:text-neutral-700">
              料金プランを確認する →
            </button>
          </div>

          {/* 소셜 프루프 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400 md:gap-7">
            <span>★★★★★ ベータ読者より</span>
            <span>✓ 完全初心者OK</span>
            <span>✓ スマホ・PC対応</span>
            <span>✓ 日本円決済</span>
            <span>✓ 追加課金なし</span>
          </div>
        </div>
      </section>
    </>
  );
};
