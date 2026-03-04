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
    <section id={id} className="w-full bg-neutral-50/60 px-6 py-24 md:py-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
        {/* Headline (action-oriented) */}
        <h2 className="max-w-[22ch] text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
          韓国語を話す最初の一歩を
          <br />
          ここから始めましょう
        </h2>

        {/* Supporting line */}
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-neutral-600 md:text-xl">
          まずはスターターパックで、
          <span className="font-semibold text-neutral-900">「最初の一言」</span>
          を作るところから。
          <br />
          購入後すぐにダウンロードして始められます。
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex w-full justify-center">
          <button
            type="button"
            onClick={() => scrollToId(pricingId)}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-neutral-900 px-8 text-base font-medium text-white transition hover:bg-neutral-900/90 sm:w-auto"
          >
            韓国語の旅を始める
          </button>

         
        </div>

        {/* Trust micro line */}
        <p className="mt-5 text-sm text-neutral-500">
          初心者向け・音声付き・スマホ/PC対応・買い切りですぐDL
        </p>
      </div>
    </section>
  );
}