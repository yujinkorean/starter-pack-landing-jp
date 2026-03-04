import { Check } from "lucide-react";

const experiences = [
  "韓国語で挨拶ができるようになる",
  "ハングルの母音を正しく発音できる",
  "自己紹介を韓国語でできるようになる",
  "簡単な質問を聞いて、答えられる",
  "数字を使って年齢や時間を言える",
  "コンビニで買い物ができる",
  "友達と簡単な会話ができる",
  "韓国のドラマや音楽がもっと楽しくなる"
];

export function ExperienceSection() {
  return (
    <section className="w-full px-6 py-20 md:py-28 bg-neutral-50/60">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto w-full max-w-[800px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              あなたができるようになること
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-xl">
              このスターターパックを終えるころには
            </p>
          </div>
          
          {/* Checklist Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200/70 shadow-sm">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">{experience}</p>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <p className="mt-8 text-center text-sm text-neutral-500 md:text-base">
            学ぶ → 試す → 使える。この流れを1冊で体験できます。
          </p>
        </div>
      </div>
    </section>
  );
}
