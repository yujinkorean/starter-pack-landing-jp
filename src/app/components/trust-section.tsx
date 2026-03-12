import { Quote, Star } from "lucide-react";

type TrustReview = {
  quote: string;
  name: string;
  meta: string;
};

type FeedbackItem = {
  title: string;
  desc: string;
  image?: string;
};

const reviews: TrustReview[] = [
  {
    quote:
      "物語形式なので続きが気になって、気づいたら最後まで読んでいました。最初の一歩に最適です。",
    name: "A.M.",
    meta: "ロサンゼルス在住・俳優 / 作家",
  },
  {
    quote:
      "音声がとても聞き取りやすく、移動中にも何度も復習しています。単語帳の構成も使いやすいです。",
    name: "K.S.",
    meta: "------",
  },
  {
    quote:
      "短い時間でも少しずつ進められるのが嬉しいです。エヴァンの成長を応援しながら学べます。",
    name: "みほ",
    meta: "30代・主婦",
  },
];

const feedbackItems: FeedbackItem[] = [
  {
    title: "発音フィードバックの例",
    desc: "日本人がつまずきやすい発音を、「どこをどう動かすか」まで具体的に説明しています。",
    image: "/line-feedback-1.jpg",
  },
  {
    title: "学習相談の例",
    desc: "進め方や質問にも個別に対応しながら、無理なく続けられるようにサポートしています。",
    image: "/line-feedback-2.jpg",
  },
];

export function TrustSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Reviews / Voice */}
        <div className="rounded-[3rem] border border-neutral-100 bg-neutral-50 px-6 py-16 shadow-inner md:px-12 md:py-24">
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="group relative flex h-full flex-col rounded-[2.5rem] border border-neutral-200/60 bg-white p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-6 flex gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="relative flex flex-1 items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-400">
                    <Quote size={18} strokeWidth={2.5} />
                  </div>

                  <p className="text-base font-semibold leading-relaxed text-neutral-800 md:text-lg">
                    「{r.quote}」
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-100 pt-6">
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

          <p className="mt-12 text-center text-xs font-bold tracking-widest text-neutral-400 md:text-sm">
            ※レビューは順次追加予定です（先行読者の声）。
          </p>
        </div>

        {/* Feedback */}
        <div className="mt-16 rounded-[2.5rem] border border-neutral-200 bg-white px-6 py-12 md:px-10 md:py-14">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400">
              FEEDBACK
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              実際のサポート例
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              ベータテスト期間中に行った学習サポートの一部です。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {feedbackItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 md:p-6"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-xl border border-neutral-200 bg-white shadow-sm"
                  />
                ) : (
                  <div className="flex h-[280px] items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white text-sm text-neutral-400">
                    LINEキャプチャ予定
                  </div>
                )}

                <h4 className="mt-4 text-lg font-semibold text-neutral-900 md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-neutral-400 md:text-sm">
            ※個人情報保護のため、一部加工して掲載しています。
          </p>
        </div>

        {/* Creator */}
        <div className="mt-16 rounded-[2.5rem] border border-neutral-200 bg-[#fffdf9] px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-[820px]">
            <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400">
              CREATOR
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              この教材について
            </h3>

            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-xl">
              日本人学習者が最初につまずきやすいポイントをもとに、
              <br className="hidden md:block" />
              ストーリー・音声・語彙・会話が自然につながる形で設計しました。
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-xl">
              韓国で国語を教えている講師が、
              <br className="hidden md:block" />
              日本人学習者向けに一つずつ設計した教材です。
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-xl">
              ただ読むための教材ではなく、
              <span className="font-semibold text-neutral-900">
                「最初の韓国語が口から出る」
              </span>
              ことを目標に作っています。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-[20px] border border-neutral-200 bg-white px-5 py-5">
              <p className="text-base font-semibold text-neutral-900">
                ストーリー設計
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                初心者でも入りやすい順番で、物語と学習を組み合わせています。
              </p>
            </div>

            <div className="rounded-[20px] border border-neutral-200 bg-white px-5 py-5">
              <p className="text-base font-semibold text-neutral-900">
                日本人学習者向け
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                発音・語順・最初の会話でつまずきやすい点を前提に作っています。
              </p>
            </div>

            <div className="rounded-[20px] border border-neutral-200 bg-white px-5 py-5">
              <p className="text-base font-semibold text-neutral-900">
                講師が設計した教材
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                AIの自動生成ではなく、構成から内容まで一つずつ設計しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}