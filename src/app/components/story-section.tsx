const LINE_URL = "https://lin.ee/YaJg73C";

export function StorySection() {
  return (
    <section className="w-full bg-[#FAFAF8] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-[780px]">

        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">About</p>
          <h2 className="text-[26px] font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            なぜ、この教材を作ったのか。
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">

          {/* 배지 */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-100 px-6 py-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-bold text-white">
              📍 大峙洞・서초동 現役講師
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
              📚 指導歴5年 / 현재도 현역
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold text-indigo-700">
              ✍️ Webノベル ロマンス1位
            </span>
          </div>

          <div className="space-y-6 px-6 py-6 md:px-8 md:py-7">

            {/* 경력 */}
            <div className="space-y-2">
              <p className="text-[15px] leading-[1.85] text-neutral-700">
                2021年から、<strong className="text-neutral-900">大峙洞（テチドン）</strong>——韓国の受験教育の最激戦区——で教え始め、
                翌年は<strong className="text-neutral-900">서초동の大手学院</strong>へ。
                高3を<strong className="text-neutral-900">5等級→2等級</strong>に引き上げた実績、3科目同時指導で<strong className="text-neutral-900">3問ミス</strong>の成績を出したこともあります。
              </p>
              <p className="text-[15px] leading-[1.85] text-neutral-700">
                今も韓国で高校生・中学生を現役で教えながら、この教材を作っています。
              </p>
            </div>

            <div className="border-t border-neutral-100" />

            {/* origin story */}
            <div className="space-y-2">
              <p className="text-[15px] leading-[1.85] text-neutral-700">
                LAに住むアメリカ人俳優に韓国語を教えたとき、既存の教材を見て驚きました。
                <strong className="text-neutral-900">文法の羅列ばかりで、言葉が生きていない。</strong>
              </p>
              <p className="text-[15px] leading-[1.85] text-neutral-700">
                受験指導で磨いてきた<strong className="text-neutral-900">ストーリーテリング</strong>を使ったところ、反応が全く変わりました。
                「やっとわかった」と。——それが、この教材の出発点です。
              </p>
            </div>

            <div className="border-t border-neutral-100" />

            {/* 웹소설 */}
            <div className="space-y-2">
              <p className="text-[15px] leading-[1.85] text-neutral-700">
                私はWebノベル作家でもあります。ロマンスカテゴリで<strong className="text-neutral-900">プラットフォーム1位</strong>を記録。
                「人が自然に読み続けてしまう文章」の設計を知っているから、この教材は<strong className="text-neutral-900">小説のように読める</strong>のです。
              </p>
            </div>

          </div>

          {/* 하단 CTA */}
          <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-5 md:px-8">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-[14px] leading-relaxed text-neutral-600">
                まず20ページ、無料で読んでみてください。
              </p>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-[#06C755] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
                無料で試す →
              </a>
            </div>
          </div>
        </div>

        {/* 수치 */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { num: "5年", label: "現役指導歴" },
            { num: "5→2", label: "等級改善実績（高3）" },
            { num: "1位", label: "Webノベル\nロマンス部門" },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white px-3 py-4 text-center">
              <p className="text-xl font-extrabold text-neutral-900 md:text-2xl">{stat.num}</p>
              <p className="mt-1 text-[11px] leading-snug whitespace-pre-line text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
