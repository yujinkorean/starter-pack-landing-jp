import { Quote } from "lucide-react";

const realReviews = [
  {
    name: "Aさん",
    meta: "27歳・会社員",
    tag: "スタンダード利用",
    content: "他の教材は最初の3ページで挫折していました。これは気づいたら30ページ読み終えていて、単語もなぜか頭に残っている。文法を「覚えよう」と思っていないのに、なんとなくわかるようになっていくのが不思議でした。",
  },
  {
    name: "Cさん",
    meta: "大学生・事業運営",
    tag: "コーチング利用",
    content: "週ごとに進捗を確認してもらえるので、サボれない環境が作れました。韓国語の勉強というより「続きが読みたい」という感覚で毎日開いていました。2週目で韓国ドラマの単語が少し拾えるようになったのが嬉しかったです。",
  },
];

export function RealReviewsSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-24" id="real-reviews">
      <div className="mx-auto w-full max-w-[860px]">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-500/80 uppercase">User Voice</span>
          <h2 className="text-[26px] font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            ベータ版の感想
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {realReviews.map((r, i) => (
            <div key={i} className="flex flex-col rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:hover:-translate-y-0.5 md:hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50">
                  <Quote size={18} className="text-indigo-400" />
                </div>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-bold text-neutral-500">{r.tag}</span>
              </div>
              <p className="flex-1 text-[15px] leading-[1.9] text-neutral-800">
                「{r.content}」
              </p>
              <div className="mt-5 border-t border-neutral-100 pt-4">
                <p className="font-bold text-neutral-900">{r.name}</p>
                <p className="mt-0.5 text-sm text-neutral-400">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-neutral-400">
          ※ ベータテスト参加者・実際の利用者の声です。順次追加予定。
        </p>
      </div>
    </section>
  );
}
