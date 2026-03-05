import { ArrowRight, Check } from "lucide-react";

type FinalCTASectionProps = {
  id?: string;
  pricingId?: string;
  previewId?: string;
};

// 부드러운 스크롤 함수
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
    <section id={id} className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1000px]">
        
        {/* 🌟 프리미엄 다크 카드 🌟 */}
        <div className="relative overflow-hidden rounded-[3rem] bg-neutral-900 px-6 py-20 text-center shadow-2xl md:px-16 md:py-28">
          
          {/* 은은한 배경 글로우 */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-[100px]"></div>

          <div className="relative z-10">
            {/* Headline */}
            <h2 className="mx-auto max-w-[22ch] text-3xl font-extrabold leading-[1.4] tracking-tight text-white md:text-5xl md:leading-[1.3]">
              韓国語を話す最初の一歩を<br />
              ここから始めましょう
            </h2>

            {/* Supporting line (텍스트 밝기 상향) */}
            <p className="mx-auto mt-8 max-w-[60ch] text-base font-medium leading-relaxed text-neutral-300 md:text-lg">
              まずはスターターパックで、
              <span className="font-bold text-white">「最初の一言」</span>
              を作るところから。<br className="hidden md:block" />
              購入後すぐにダウンロードして始められます。
            </p>

            {/* CTA 버튼 */}
            <div className="mt-12 flex w-full justify-center">
              <button
                type="button"
                onClick={() => scrollToId(pricingId)}
                className="group inline-flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-10 text-base font-bold text-neutral-900 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 hover:bg-neutral-200 sm:w-auto"
              >
                韓国語の旅を始める
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 🌟 텍스트 가독성을 높이고 고급스러운 파스텔 체크 적용 🌟 */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-neutral-200 md:gap-8 md:text-base">
              
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                  <Check size={12} strokeWidth={3} />
                </span>
                初心者向け
              </span>
              
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                  <Check size={12} strokeWidth={3} />
                </span>
                音声付き
              </span>
              
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                  <Check size={12} strokeWidth={3} />
                </span>
                スマホ/PC対応
              </span>
              
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                  <Check size={12} strokeWidth={3} />
                </span>
                買い切りですぐDL
              </span>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}