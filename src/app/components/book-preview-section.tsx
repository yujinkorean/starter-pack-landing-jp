import { ImageWithFallback } from "./figma/ImageWithFallback";

const bookPreviews = [
  {
    title: "ストーリーページ",
    description: "物語で学ぶ",
    image:
      "https://images.unsplash.com/photo-1636959865701-65a48395910d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Story",
  },
  {
    title: "ダイアログ",
    description: "実践的な会話",
    image:
      "https://images.unsplash.com/photo-1633118948215-480c9d78fc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Dialogue",
  },
  {
    title: "発音ガイド",
    description: "仕組みから理解する",
    image:
      "https://images.unsplash.com/photo-1753198151600-85828558db90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Pronunciation",
  },
  {
    title: "学習ポイント",
    description: "大切なことを整理",
    image:
      "https://images.unsplash.com/photo-1718780276042-acf483f2b92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Key points",
  },
  {
    title: "練習ページ",
    description: "実際に使ってみる",
    image:
      "https://images.unsplash.com/photo-1550226812-76aa0c7635a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Practice",
  },
  {
    title: "ボキャブラリー",
    description: "単語を振り返る",
    image:
      "https://images.unsplash.com/photo-1552321046-a54642dc0cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Vocabulary",
  },
];

export function BookPreviewSection() {
  return (
    <section className="w-full border-t border-neutral-100 bg-neutral-50/60 px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            まずは、この本の中身を見てみましょう
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-xl">
            ストーリー、対話、発音、練習まで。
            <br />
            一冊で「読む → 話す」につながる構成です。
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bookPreviews.map((preview, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 rounded-3xl border border-neutral-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100">
                {/* fixed aspect */}
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src={preview.image}
                    alt={preview.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Pill tag */}
                <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">
                  {preview.tag}
                </div>
              </div>

              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-lg font-medium">{preview.title}</h3>
                <p className="text-sm text-neutral-500">{preview.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro line (optional but 좋음) */}
        <p className="mt-10 text-center text-sm text-neutral-500">
          ※ 画像はイメージです（実際のページは近日差し替え予定）
        </p>
      </div>
    </section>
  );
}