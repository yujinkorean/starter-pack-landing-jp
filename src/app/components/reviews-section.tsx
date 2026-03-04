import { Quote } from "lucide-react";

type Review = {
  quote: string;
  name: string;
  meta: string;
};

const reviews: Review[] = [
  {
    quote: "「____」\n\n（※ここにレビュー本文。2〜4行程度が最適）",
    name: "K.S.",
    meta: "都内大学生（法学部）",
  },
  {
    quote: "「____」\n\n（※ここにレビュー本文。2〜4行程度が最適）",
    name: "A.M.",
    meta: "米国在住・クリエイティブ職",
  },
  {
    quote: "「____」\n\n（※ここにレビュー本文。2〜4行程度が最適）",
    name: "みほ",
    meta: "30代・子育て中",
  },
];

export function ReviewsSection() {
  return (
    <section className="w-full px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* ✅ 프레임(섹션 배경 역할) - 여기서 확실히 구분됨 */}
        <div className="rounded-[36px] border border-neutral-200 bg-[#EEF1F6] px-6 py-14 md:px-10 md:py-16">
          {/* ✅ 상단 강한 디바이더 */}
          <div className="mx-auto mb-10 h-[3px] w-24 rounded-full bg-neutral-900/20" />

          <div className="mx-auto w-full max-w-[980px]">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                学習者の声
              </h2>
              <p className="max-w-[720px] text-base leading-relaxed text-neutral-600 md:text-xl">
                実際に読んだ人が感じた「続く理由」と「変化」。
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {reviews.map((r, idx) => (
                <div
                  key={idx}
                  className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100">
                      <Quote
                        className="h-5 w-5 text-neutral-700"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* ✅ 라인클램프: 실제 리뷰 들어가도 카드 높이 안정 */}
                    <p className="line-clamp-6 whitespace-pre-line text-sm leading-relaxed text-neutral-700 md:text-base">
                      {r.quote}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-200 pt-4">
                    <div className="text-sm font-medium text-neutral-900">
                      {r.name}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">{r.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-8 text-center text-xs text-neutral-500 md:text-sm">
              ※レビューは順次追加予定です（先行読者の声）。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}