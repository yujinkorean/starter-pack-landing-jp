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
              📚 指導歴5年 / 現在も現役
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold text-indigo-700">
              ✍️ Webノベル ロマンス部門1位
            </span>
          </div>

          <div className="space-y-7 px-6 py-7 md:px-8 md:py-8">

            {/* 경력 블록 */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400">指導実績</p>
              <p className="text-[15px] leading-[1.9] text-neutral-700">
                2021年、韓国の受験教育の最激戦区・<strong className="text-neutral-900">大峙洞（テチドン）</strong>で教え始めました。
                翌年2022年からは<strong className="text-neutral-900">서초동の大手学院</strong>へ移り、国語・歴史・社会を担当。
                2026年現在も、<strong className="text-neutral-900">中3・高1・高3</strong>を現役で指導し続けています。
              </p>
              {/* 실적 카드 */}
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-4">
                  <p className="text-xs font-bold text-orange-600 mb-1">高3 個人指導</p>
                  <p className="text-[15px] font-extrabold text-neutral-900">수능 5等級 → 2等級</p>
                  <p className="mt-1 text-xs text-neutral-500">受験本番までの集中指導で2段階改善</p>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-4">
                  <p className="text-xs font-bold text-indigo-600 mb-1">大峙洞 中学生 3科目担当</p>
                  <p className="text-[15px] font-extrabold text-neutral-900">国語・歴史・社会 — 合計3問ミス</p>
                  <p className="mt-1 text-xs text-neutral-500">3科目横断指導で学年最高水準の成績</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100" />

            {/* 원점 스토리 */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400">この教材が生まれたきっかけ</p>
              <p className="text-[15px] leading-[1.9] text-neutral-700">
                あるとき、<strong className="text-neutral-900">LAに住むアメリカ人俳優</strong>に韓国語を教える機会がありました。
                既存の教材を見たとき、正直驚きました。<strong className="text-neutral-900">文法の羅列ばかりで、言葉が生きていない。</strong>
                どれだけ丁寧に説明しても、「わかった気がするけど使えない」という顔をしていました。
              </p>
              <p className="mt-3 text-[15px] leading-[1.9] text-neutral-700">
                そこで、韓国の受験指導で5年間磨いてきた<strong className="text-neutral-900">ストーリーテリングの手法</strong>を使って教え直しました。
                文法を「ルール」として教えるのではなく、<strong className="text-neutral-900">物語の流れの中で自然に体感させる</strong>やり方です。
                反応は全く変わりました。「やっとわかった気がする」と。——それが、この教材の出発点です。
              </p>
            </div>

            <div className="border-t border-neutral-100" />

            {/* 웹소설 */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400">なぜ「読み続けてしまう」のか</p>
              <p className="text-[15px] leading-[1.9] text-neutral-700">
                私はWebノベル作家でもあります。ロマンスカテゴリで<strong className="text-neutral-900">プラットフォーム1位</strong>を記録しました。
                「次が気になって、気づいたら最後まで読んでしまう」——そういうコンテンツの設計を、自分でも実践してきました。
              </p>
              <p className="mt-3 text-[15px] leading-[1.9] text-neutral-700">
                この教材が「<strong className="text-neutral-900">教科書っぽくない</strong>」と言われるのは、偶然ではありません。
                受験指導のノウハウ × ストーリーテリングの技術、その両方を持つ人間が作ったものだからです。
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
            { num: "5年", label: "現役指導歴\n(2021〜現在)" },
            { num: "5→2", label: "等級改善実績\n（高3・수능）" },
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
