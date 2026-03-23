import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type RealReview = {
  name: string;
  meta: string;
  content: string;
};

const realReviews: RealReview[] = [
  {
    name: "佐藤",
    meta: "20代・大学生",
    content:
      "最初は難しそうと思いましたが、ストーリー形式なので自然に読み進められました。普通の文法教材より続けやすかったです。",
  },
  {
    name: "Michael",
    meta: "アメリカ人・20代",
    content:
      "他の教材よりも会話の流れが見えやすくて、最初のハードルが低く感じました。音声と一緒に学べるのも良かったです。",
  },
  {
    name: "김민지",
    meta: "韓国人・教育関係者",
    content:
      "初心者がどこでつまずくかをよく理解した構成だと感じました。説明より先に感覚で入れる点が特に良いと思います。",
  },
  {
    name: "田中",
    meta: "30代・会社員",
    content:
      "勉強するというより、読みながら自然に韓国語に触れられる感じでした。最初の一歩としてかなりやさしいです。",
  },
  {
    name: "Emily",
    meta: "アメリカ人・語学学習者",
    content:
      "It didn’t feel like a typical textbook. It felt more personal, and that made me want to keep going.",
  },
  {
    name: "山本",
    meta: "20代・韓国語初心者",
    content:
      "発音の説明が抽象的じゃなくて、口の形や音の違いとして入ってきたのが良かったです。最初の不安が少し減りました。",
  },
];

export function RealReviewsSection() {
  const [page, setPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(realReviews.length / cardsPerPage);

  const currentReviews = realReviews.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white px-6 py-20 md:py-28" id="real-reviews">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-indigo-500/80">
            USER VOICE
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            ベータテストの声
          </h2>
          <p className="max-w-[700px] text-base leading-relaxed text-neutral-500 md:text-lg">
            ベータテスト期間中および実際の利用者から届いた、
            率直な感想をまとめました。
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="mt-12 rounded-[3rem] border border-neutral-200 bg-neutral-50 px-6 py-10 shadow-inner md:px-10 md:py-14">
          {/* Desktop nav */}
          <div className="mb-8 hidden items-center justify-end gap-3 md:flex">
            <button
              type="button"
              onClick={prevPage}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-100"
              aria-label="前のレビュー"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextPage}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-100"
              aria-label="次のレビュー"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {currentReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="rounded-[2.2rem] border border-neutral-200 bg-white px-6 py-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                  <Quote size={20} className="text-indigo-400" />
                </div>

                <p className="text-lg font-semibold leading-relaxed text-neutral-900">
                  「{review.content}」
                </p>

                <div className="mt-8 border-t border-neutral-100 pt-6">
                  <p className="text-2xl font-bold tracking-tight text-neutral-900">
                    {review.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-400">
                    {review.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile nav */}
          <div className="mt-8 flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={prevPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-100"
              aria-label="前のレビュー"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPage(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    idx === page ? "bg-neutral-900" : "bg-neutral-300"
                  }`}
                  aria-label={`${idx + 1}ページ目へ`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:bg-neutral-100"
              aria-label="次のレビュー"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Desktop dots */}
          <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === page ? "bg-neutral-900" : "bg-neutral-300"
                }`}
                aria-label={`${idx + 1}ページ目へ`}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-400">
            ※ レビューは順次追加予定です（ベータテストおよび実際の利用者の声）。
          </p>
        </div>
      </div>
    </section>
  );
}