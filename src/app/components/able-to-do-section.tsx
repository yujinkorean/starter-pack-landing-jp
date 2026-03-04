type AbleItem = {
  title: string;
  desc: string;
};

const ableItems: AbleItem[] = [
  {
    title:
      "日本人がつまずきやすい\n「ㅗ・ㅓ・ㅡ」の違いが\n自然に聞き分けられるようになります。",
    desc:
      "曖昧に聞き取るのではなく、音の違いをはっきり認識できるように。",
  },
  {
    title:
      "口の形・舌の位置・音の強さで\n発音の仕組みが分かるようになります。",
    desc:
      "「もう一回」ではなく、どこを動かせばいいかが明確になります。",
  },
  {
    title: "会話でよく出る音に\n自分の中の“基準”ができます。",
    desc:
      "基準があると練習が再現できて、発音も会話も一気に楽になります。",
  },
];

type AbleToDoSectionProps = {
  pricingId?: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AbleToDoSection({ pricingId = "pricing" }: AbleToDoSectionProps) {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[980px]">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            実際にできるようになること
          </h2>
          <p className="mt-4 max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-xl">
            最初の壁（発音・最初の会話）を越えるための、具体的な変化。
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {ableItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm md:p-8"
            >
              <h3 className="whitespace-pre-line text-xl font-semibold leading-snug text-neutral-900 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ CTA */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => scrollToId(pricingId)}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-neutral-900 px-7 text-sm font-semibold text-white transition hover:bg-neutral-900/90 md:text-base"
          >
            韓国語との最初の一歩
          </button>
        </div>
      </div>
    </section>
  );
}