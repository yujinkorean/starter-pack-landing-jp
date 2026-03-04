export function PackageSection() {
  return (
    <section className="w-full px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            なぜ「本・音声・単語」が
            <br className="hidden md:block" />
            一緒だと学びやすいのか
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-xl">
            読む → 話す → 定着する。3つで1セットにしたのは、
            <span className="font-medium text-neutral-900">
              「最初に話せる実感」
            </span>
            を最短で作るためです。
          </p>

          <div className="mt-12 space-y-0 overflow-hidden rounded-3xl border border-neutral-200">
            {/* Block 1 */}
            <div className="bg-white px-8 py-10 md:px-12 md:py-14">
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                ストーリー型メインテキスト
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-xl">
                ユジンとエヴァンの物語を追いながら、挨拶・発音・最初の会話まで。
                「次が気になる」流れで自然に前へ進めます。
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-neutral-50 px-8 py-10 md:px-12 md:py-14">
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                会話オーディオ
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-xl">
                短い音声を聞いて、真似して、もう一度。
                リズムと口の動きを“同時に”作るためのガイドです。
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-neutral-100 px-8 py-10 md:px-12 md:py-14">
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                ボキャブラリーノート
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-xl">
                単語を“リスト”で終わらせず、物語の文で回収する復習ノート。
                短時間で振り返れて、忘れにくい形に整えます。
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-neutral-500 md:text-base">
            3つが揃って、はじめて「話せる」が始まります。
          </p>
        </div>
      </div>
    </section>
  );
}