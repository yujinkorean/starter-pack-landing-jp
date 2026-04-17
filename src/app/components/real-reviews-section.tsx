import { Quote } from "lucide-react";

const realReviews = [
  {
    name: "Aさん",
    meta: "27歳・会社員",
    content: "正直、ここまで続けられるとは思いませんでした。既存の教材とは雰囲気が違い、最後まで無理なく取り組むことができました。印象に残る単語があり、学習の手応えを感じられました。",
  },
  {
    name: "Cさん",
    meta: "大学生・事業運営",
    content: "小説を読むような感覚で進められるので、勉強しているというより自然に続けられました。続きが気になって、気づいたら毎日開いてしまうような感覚でした。",
  },
];

export function RealReviewsSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-28" id="real-reviews">
      <div className="mx-auto w-full max-w-[860px]">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-500/80 uppercase">User Voice</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            ベータテストの声
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {realReviews.map((r, i) => (
            <div key={i} className="flex flex-col rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50">
                <Quote size={18} className="text-indigo-400" />
              </div>
              <p className="flex-1 text-[15px] font-semibold leading-[1.85] text-neutral-800">
                「{r.content}」
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-5">
                <p className="font-bold text-neutral-900">{r.name}</p>
                <p className="mt-1 text-sm text-neutral-400">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-400">
          ※ その他のレビューは順次追加予定です（ベータテストおよび実際の利用者の声）。
        </p>
      </div>
    </section>
  );
}
