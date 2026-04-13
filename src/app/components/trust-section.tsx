import { Quote, Star } from "lucide-react";

type TrustReview = {
  quote: string;
  name: string;
  meta: string;
};

type FeedbackItem = {
  title: string;
  problem: string;
  desc: string;
  highlight: string;
  images: string[];
};

const reviews: TrustReview[] = [
  {
    quote:
      "初心者にも安心してすすめられる一冊だと思いました。小説形式なので楽しく学べ、次の内容が気になって読み進めるうちに、自然と学習が続く構成になっていると感じました。",
    name: "Aさん",
    meta: "韓国語講師・医学部在学",
  },
  {
    quote:
      "忙しくても、これなら続けられると思いました。物語を読み進めるうちに、単語や表現が自然に頭に入ってきて、一般的な参考書より負担なく学べたのが良かったです。",
    name: "Cさん",
    meta: "日本在住・会社員",
  },
];

const feedbackItems: FeedbackItem[] = [
  {
    title: "発音フィードバックの実例",
    problem: "発音が合っているか不安な方へ",
    desc: "日本人がつまずきやすい発音を、口の形や音の流れまで具体的にフィードバックします。",
    highlight:
      "説明ではなく、“実際にできるようになる”ところまでサポートします。",
    images: [
      "/images/feedback-pronunciation-1.JPG",
    ],
  },
  {
    title: "学習サポートの実例",
    problem: "何をすればいいか分からない方へ",
    desc: "進み方や悩みに合わせて、一人ひとりに合った学習の流れを提案します。",
    highlight: "あなた専用の学習ルートを一緒に作ります。",
    images: ["/images/feedback-study-1.JPG"],
  },
];

export function TrustSection() {
  return (
    <section id="reviews" className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* ━━━ LA배우 추천사 ━━━ */}
        <div className="mb-12 overflow-hidden rounded-[2rem] border border-neutral-100 bg-white px-8 py-8 shadow-sm md:px-12 md:py-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-3xl">
              🎬
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold leading-relaxed text-neutral-800 md:text-xl">
                <span className="text-neutral-300 text-2xl mr-1">"</span>
                An exceptional teacher, knowledgeable in his craft, and caters his lessons to needs.
                Incredible at teaching language fluency, and his new book is a{" "}
                <strong className="text-neutral-900 underline decoration-orange-300 decoration-2 underline-offset-4">
                  language learners dream.
                </strong>
                <span className="text-neutral-300 text-2xl ml-1">"</span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-sm font-bold text-neutral-500">
                  — 俳優 / 脚本家 / 監督（LA在住）
                </p>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-500">
                  🇺🇸 English Native Speaker
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                ※ 個人情報保護のため、氏名・詳細プロフィールは非公開にしています
              </p>
            </div>
          </div>
        </div>

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
              実際に読んだ人が感じた「続く理由」と「読みやすさ」。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            ※ その他のレビューは順次追加予定です（先行読者の声）。
          </p>
        </div>

        {/* Feedback */}
        <div className="mt-16 rounded-[2.5rem] border border-neutral-200 bg-white px-6 py-12 md:px-10 md:py-14">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400">
              FEEDBACK
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              実際のLINEサポート（そのまま公開）
            </h3>

            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              購入後、このようなサポートが実際に届きます。
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              「これで合ってるのかな？」という不安をなくすためのサポートです。
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-20">
            {feedbackItems.map((item) => (
              <div key={item.title} className="mx-auto w-full max-w-[760px]">
                <p className="mb-6 text-center text-sm font-medium text-neutral-500">
                  {item.problem}
                </p>

                <div className="flex flex-col items-center gap-6">
                  {item.images.map((image, imageIndex) => (
                    <div
                      key={`${item.title}-${imageIndex}`}
                      className="w-full max-w-[480px] rounded-[2rem] border border-neutral-200 bg-neutral-100 p-2 shadow-sm"
                    >
                      <img
                        src={image}
                        alt={`${item.title} ${imageIndex + 1}`}
                        className="block h-auto w-full rounded-[1.5rem]"
                      />
                    </div>
                  ))}
                </div>

                <h4 className="mt-8 text-center text-xl font-semibold text-neutral-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-center text-sm leading-relaxed text-neutral-600 md:text-base">
                  {item.desc}
                </p>

                <p className="mt-3 text-center text-sm font-medium text-neutral-800">
                  {item.highlight}
                </p>

                <p className="mt-5 text-center text-xs text-neutral-400">
                  ※このサポートは Coaching / VIPプラン限定です
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#pricing"
              className="inline-block rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              サポート付きプランを見る
            </a>

            <p className="mt-4 text-sm text-neutral-500">
              一番選ばれているのは Coachingプランです
            </p>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-neutral-400 md:text-sm">
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