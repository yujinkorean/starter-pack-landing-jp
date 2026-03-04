import { Button } from "./ui/button";

type HeroSectionProps = {
  previewId?: string;
  pricingId?: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection({
  previewId = "preview",
  pricingId = "pricing",
}: HeroSectionProps) {
  return (
    <section className="w-full bg-neutral-50/50 px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          {/* Headline */}
          <h1 className="max-w-[18ch] text-4xl font-semibold tracking-tight md:text-6xl">
            会話から始まる、
            <br />
            新しい韓国語の学び方
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-neutral-600 md:text-xl">
            ストーリーを読みながら、挨拶・発音・最初の会話まで。
            <br />
            初心者のための「eBook＋単語ノート＋音声ガイド」スターターパック。
          </p>

          {/* ✅ Result-first mini benefits (핵심 수정 포인트) */}
          <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm">
              <p className="text-sm font-semibold text-neutral-900 md:text-base">
                最初の一言が出る
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                「覚えたのに話せない」を越える入口を作ります。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm">
              <p className="text-sm font-semibold text-neutral-900 md:text-base">
                発音の不安が減る
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                ㅗ・ㅓ・ㅡなど、つまずきやすい音に基準ができます。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm">
              <p className="text-sm font-semibold text-neutral-900 md:text-base">
                続けられる順番がわかる
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                読む→聞く→真似る→話すで迷わず進めます。
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base"
              onClick={() => scrollToId(pricingId)}
            >
              スターターパックを見る
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base"
              onClick={() => scrollToId(previewId)}
            >
              最初のページを見る
            </Button>
          </div>

          {/* Micro trust line */}
          <p className="mt-4 text-sm text-neutral-500">
            初心者向け・音声付き・買い切り・発売記念価格（期間限定）
          </p>
        </div>
      </div>
    </section>
  );
}