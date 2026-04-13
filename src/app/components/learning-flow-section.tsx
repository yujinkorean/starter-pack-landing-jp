import { Check } from "lucide-react";

type WeekItem = {
  week: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

const weekItems: WeekItem[] = [
  {
    week: "1週目",
    title: "専用の目標設定",
    desc: "あなたの学習状況と目標をもとに、6週間の個別ロードマップを作成します。「何から始めればいいか」が明確になります。",
  },
  {
    week: "2週目",
    title: "やることが明確になる",
    desc: "毎週LINEで届く単語帳と週次チェックで、「今週やること」が常に具体的になります。迷う時間がゼロになります。",
  },
  {
    week: "3週目",
    title: "勉強が習慣になり始める",
    desc: "続けるほど「次が読みたい」感覚が育ちます。ストーリーの続きが気になる設計が、習慣を自然に作ります。",
  },
  {
    week: "4週目",
    title: "間違いがその場で修正される",
    desc: "発音・単語・進め方——詰まった瞬間にLINEで質問すれば、24時間以内に具体的な指示が届きます。",
    highlight: true,
  },
  {
    week: "5週目",
    title: "韓国語が口から出始める",
    desc: "ストーリーの中で自然に触れた表現が、実際の会話で出てくるようになります。「あ、これ知ってる」の連続。",
    highlight: true,
  },
  {
    week: "6週目",
    title: "一人で続けられる状態に",
    desc: "6週間で身についた「学習のリズム」は、コーチング終了後も続きます。自走できる状態を作ることが最終ゴールです。",
    highlight: true,
  },
];

export function LearningFlowSection() {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[860px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
            6-Week Journey
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            6週間で、何が起きるか。
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-neutral-500 md:text-xl">
            コーチングプランでは、毎週この変化が起きます。
          </p>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 세로선 */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-0.5 bg-neutral-200 md:block" />

          <div className="space-y-4">
            {weekItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col gap-4 rounded-[24px] border p-6 md:flex-row md:items-start md:gap-6 md:pl-20 ${
                  item.highlight
                    ? "border-orange-200 bg-orange-50"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {/* 위크 뱃지 (타임라인 dot) */}
                <div
                  className={`absolute left-5 top-6 hidden h-5 w-5 items-center justify-center rounded-full text-[9px] font-black md:flex ${
                    item.highlight ? "bg-orange-500 text-white" : "bg-neutral-300 text-neutral-600"
                  }`}
                >
                  {idx + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        item.highlight
                          ? "bg-orange-100 text-orange-700"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {item.week}
                    </span>
                  </div>
                  <h3
                    className={`mt-2 text-lg font-bold leading-snug md:text-xl ${
                      item.highlight ? "text-orange-900" : "text-neutral-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed md:text-base ${
                      item.highlight ? "text-orange-800" : "text-neutral-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[20px] border border-neutral-200 bg-neutral-50 p-6 text-center">
          <p className="text-sm font-bold text-neutral-900 md:text-base">
            6週間後、「続けられる自分」が残ります。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-500 md:text-sm">
            コーチングが終わっても、学習のリズムは続きます。<br />
            それが、このプログラムの本当のゴールです。
          </p>
        </div>
      </div>
    </section>
  );
}
