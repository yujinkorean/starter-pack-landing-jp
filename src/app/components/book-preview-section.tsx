type PreviewItem = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const bookPreviews: PreviewItem[] = [
  {
    title: "発音の仕組み",
    description: "ハングルの母音の作り方と音の構造を、図で理解できます。",
    image: "/preview/pronunciation.jpg",
    tag: "PRONUNCIATION",
  },
  {
    title: "会話の例",
    description: "物語の流れの中で、実際に使う韓国語の会話に触れられます。",
    image: "/preview/dialogue.jpg",
    tag: "DIALOGUE",
  },
  {
    title: "練習ページ",
    description: "口の形や舌の位置を意識しながら、自分で練習できます。",
    image: "/preview/practice.jpg",
    tag: "PRACTICE",
  },
  {
    title: "学習目標",
    description: "このパートで何ができるようになるのかを、最初に確認できます。",
    image: "/preview/goals.jpg",
    tag: "LEARNING GOALS",
  },
];

export function BookPreviewSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-neutral-400 md:text-xs">
            INSIDE THE BOOK
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            中身を見る
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-xl">
            発音、会話、練習、学習目標まで。
            <br className="hidden md:block" />
            読むだけで終わらず、「理解する → 話す」につながる構成です。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {bookPreviews.map((preview) => (
            <div key={preview.title} className="group">

              <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50">
                <div className="relative">

                  <img
  src={preview.image}
  alt={preview.title}
  loading="lazy"
  className="aspect-[4/5] w-full bg-white object-contain"
/>

                  {/* Tag */}
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-widest text-neutral-700">
                    {preview.tag}
                  </div>

                </div>
              </div>

              {/* Text */}
              <div className="mt-4 px-1">
                <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                  {preview.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {preview.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-widest text-neutral-400">
            ※ 実際の教材ページの一部を掲載しています
          </p>
        </div>

      </div>
    </section>
  );
}