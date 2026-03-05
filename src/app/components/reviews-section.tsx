import { Quote, Star } from "lucide-react";

type Review = {
  quote: string;
  name: string;
  meta: string;
};

const reviews: Review[] = [
  {
    quote: "物語形式なので続きが気になって、気づいたら最後まで読んでいました。最初の一歩に最適です。",
    name: "K.S.",
    meta: "都内大学生（法学部）",
  },
  {
    quote: "音声がとても聞き取りやすく、移動중에何度も復習しています。単語帳の構成も使いやすい！",
    name: "A.M.",
    meta: "米国在住・クリエイティブ職",
  },
  {
    quote: "短い時間でも少しずつ進められるのが嬉しいです。エヴァンの成長を応援しながら学べます。",
    name: "みほ",
    meta: "30代・子育て中",
  },
];

export function ReviewsSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* ✅ 외부 프레임: 배경색을 조금 더 차분한 실버-뉴트럴로 조정 */}
        <div className="rounded-[3rem] bg-neutral-50 border border-neutral-100 px-6 py-16 md:px-12 md:py-24 shadow-inner">
          
          {/* Header */}
          <div className="mx-auto mb-16 flex max-w-[800px] flex-col items-center gap-5 text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-indigo-500/80">
              VOICE
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
              学習者の声
            </h2>
            <p className="max-w-[600px] text-lg font-medium leading-relaxed text-neutral-500 md:text-xl">
              実際に読んだ人が感じた「続く理由」と「変化」。
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="group relative flex h-full flex-col rounded-[2.5rem] border border-neutral-200/60 bg-white p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
              >
                {/* 🌟 별점: 촌스럽지 않은 연한 파스텔 옐로우 적용 🌟 */}
                <div className="mb-6 flex gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="relative flex flex-1 items-start gap-4">
                  {/* 🌟 쿼트 아이콘: 파스텔 인디고 배경으로 가시성 확보 🌟 */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-400">
                    <Quote size={18} strokeWidth={2.5} />
                  </div>

                  <p className="text-base font-semibold leading-relaxed text-neutral-800 md:text-lg">
                    「{r.quote}」
                  </p>
                </div>

                {/* 하단 작성자 정보 */}
                <div className="mt-8 border-t border-neutral-50 pt-6">
                  <div className="text-lg font-bold text-neutral-900">
                    {r.name}
                  </div>
                  <div className="mt-1 text-sm font-medium text-neutral-400">
                    {r.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <p className="mt-12 text-center text-xs font-bold tracking-widest text-neutral-400 md:text-sm">
            ※レビューは順次追加予定です（先行読者の声）。
          </p>
        </div>
      </div>
    </section>
  );
}