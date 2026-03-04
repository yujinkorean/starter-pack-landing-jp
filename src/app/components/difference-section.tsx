export function DifferenceSection() {
  return (
    <section className="w-full bg-neutral-50 px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-neutral-700 md:text-sm">
              THE DIFFERENCE
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            ほとんどの韓国語教材は、説明から始まる。
            <br />
            この教材は、あなたが話すことから始まる。
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-xl">
            「わかった気がする」ではなく、
            <span className="font-semibold text-neutral-900">「口が動く」</span>
            を最短で作るための設計です。
          </p>
        </div>

        {/* Reference-style split comparison */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {/* Left: Typical */}
          <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-sm lg:rounded-r-none lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              一般的な教材は：
            </h3>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-base font-semibold md:text-lg">
                  文法 → 会話 の順で進む
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/70 md:text-base">
                  理解は増えるのに、話す場面で止まりやすい。
                </p>
              </div>

              <div>
                <p className="text-base font-semibold md:text-lg">暗記が中心</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70 md:text-base">
                  覚える量が増え、継続の負担が大きい。
                </p>
              </div>

              <div>
                <p className="text-base font-semibold md:text-lg">説明が多い</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70 md:text-base">
                  「わかった」になっても、「使える」につながりにくい。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Yours */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-neutral-900 shadow-sm lg:rounded-l-none lg:border-l-0 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              この教材は：
            </h3>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-base font-semibold md:text-lg">
                  会話 → 文法 の順で身につく
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                  最初の一言から入るので、話す抵抗が減る。
                </p>
              </div>

              <div>
                <p className="text-base font-semibold md:text-lg">
                  ストーリーで覚えられる
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                  文脈で回収するから、暗記の負担が軽い。
                </p>
              </div>

              <div>
                <p className="text-base font-semibold md:text-lg">体験が中心</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                  読む→聞く→真似る→話すで「使える」を積み上げる。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact comparison table (conversion-friendly) */}
        <div className="mx-auto mt-10 max-w-[1200px]">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700 md:text-base">
              <div className="text-neutral-500">比較ポイント</div>
              <div>一般的な教材</div>
              <div>この教材</div>
            </div>

            <div className="grid grid-cols-3 items-center gap-0 px-6 py-5 text-sm md:text-base">
              <div className="font-medium text-neutral-700">学びの順番</div>
              <div className="text-neutral-600">文法 → 会話</div>
              <div className="font-semibold text-neutral-900">会話 → 文法</div>
            </div>
            <div className="h-px bg-neutral-200" />

            <div className="grid grid-cols-3 items-center gap-0 px-6 py-5 text-sm md:text-base">
              <div className="font-medium text-neutral-700">記憶の作り方</div>
              <div className="text-neutral-600">暗記</div>
              <div className="font-semibold text-neutral-900">ストーリー</div>
            </div>
            <div className="h-px bg-neutral-200" />

            <div className="grid grid-cols-3 items-center gap-0 px-6 py-5 text-sm md:text-base">
              <div className="font-medium text-neutral-700">学習体験</div>
              <div className="text-neutral-600">説明</div>
              <div className="font-semibold text-neutral-900">体験</div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-neutral-500">
            ※「話せる実感」を最短で作るために、会話起点の設計にしています。
          </p>
        </div>
      </div>
    </section>
  );
}