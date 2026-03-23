type AbleItem = {
  title: string;
  desc: string;
};

const ableItems: AbleItem[] = [
  {
    title:
      "日本人がつまずきやすい「ㅗ・ㅓ・ㅡ」の違いが自然に聞き分けられるようになります。",
    desc:
      "曖昧に聞き取るのではなく、音の違いをはっきり認識できるように。",
  },
  {
    title:
      "口の形・舌の位置・音の強さで発音の仕組みが分かるようになります。",
    desc:
      "「もう一回」ではなく、どこを動かせばいいかが明確になります。",
  },
  {
    title: "会話でよく出る音に自分の中の“基準”ができます。",
    desc:
      "基準があると練習が再現できて、発音も会話も一気に楽になります。",
  },
];

type AbleToDoSectionProps = {
  lineUrl?: string;
};

export function AbleToDoSection({
  lineUrl = "https://line.me/R/ti/p/@YOUR_LINE_ID",
}: AbleToDoSectionProps) {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[980px]">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            この教材で、できるようになること
          </h2>
          <p className="mt-4 max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-xl">
            最初の壁（発音・最初の会話）を越えるための、具体的な変化。
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
          {ableItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[28px] border border-neutral-200 bg-white px-7 py-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] md:px-8 md:py-9"
            >
              <h3 className="text-xl font-semibold leading-[1.55] tracking-tight text-neutral-900 md:max-w-[760px] md:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600 md:max-w-[760px] md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LINE Preview CTA */}
        <div className="mt-10 md:mt-12">
          <p className="mb-3 text-sm font-medium text-neutral-600 md:text-base">
            無料プレビューは、LINE追加後に受け取れます。
          </p>

          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-neutral-900 px-7 text-sm font-semibold text-white transition hover:bg-neutral-800 md:h-13 md:px-8 md:text-base"
          >
            LINEで無料プレビューを受け取る
          </a>

          <p className="mt-3 text-xs leading-relaxed text-neutral-500 md:text-sm">
            プレビューPDF / 音声案内 / 特典情報をLINEでまとめてお届けします。
          </p>
        </div>
      </div>
    </section>
  );
}