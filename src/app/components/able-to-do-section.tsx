const LINE_URL = "https://lin.ee/YaJg73C";

type AbleItem = {
  week: string;
  title: string;
  desc: string;
};

const ableItems: AbleItem[] = [
  {
    week: "教材を読み始めると",
    title: "「止まらない」感覚が生まれる",
    desc: "小説の続きが気になるように、「次を読みたい」が学習のエンジンになります。文法を暗記するのではなく、ストーリーの中で自然に言葉が染み込む構造です。",
  },
  {
    week: "毎週LINEが届くと",
    title: "「今週やること」が明確になる",
    desc: "あなたの進度に合わせた単語帳が、毎週LINEで届きます。何を覚えればいいか迷う時間がなくなり、開いてすぐ始められます。",
  },
  {
    week: "コーチングで質問すると",
    title: "「詰まった瞬間」がすぐ解決する",
    desc: "発音が合っているか不安なとき、進み方が分からないとき——LINEで質問すれば、韓国語ネイティブ講師が具体的に答えます。一人で悩む時間がゼロになります。",
  },
];

export function AbleToDoSection({
  lineUrl = LINE_URL,
}: {
  lineUrl?: string;
}) {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
            What Changes
          </p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            この教材で、変わること
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.85] text-neutral-500 md:text-xl">
            「続かない」という壁を、構造で超えます。
          </p>
        </div>

        <div className="space-y-4">
          {ableItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[24px] border border-neutral-200 bg-white px-5 py-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:px-8 md:py-9"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
                <div className="shrink-0 md:w-40">
                  <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                    {item.week}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold leading-snug text-neutral-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.85] text-neutral-600 md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-200 transition hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/>
            </svg>
            まず無料で体験する
          </a>
        </div>
      </div>
    </section>
  );
}
