export function ProblemSection() {
  const problems = [
    { emoji: "📚", text: "参考書を買ったのに、途中で止まってしまった" },
    { emoji: "😓", text: "単語を覚えても、会話になると何も出てこない" },
    { emoji: "⏰", text: "勉強する時間はあるのに、何をすればいいか分からない" },
    { emoji: "🔄", text: "続けようとするたびに、また最初からやり直している" },
  ];

  return (
    <section className="w-full bg-neutral-900 px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-white/40 uppercase">
            Does this sound familiar?
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            こんな経験、ありませんか？
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-relaxed text-white/60 md:text-lg">
            韓国語に興味があって、何度か挑戦した。<br />
            でも気づいたら、また止まっていた。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="mt-0.5 text-2xl">{p.emoji}</span>
              <p className="text-base font-semibold leading-relaxed text-white md:text-lg">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[600px] space-y-6 text-center">
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            止まってしまうのは、<span className="font-bold text-white">意志が弱いからではありません。</span>
          </p>
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            一人で続けるように設計された教材に、<br />
            <span className="font-bold text-white">一人で向き合っていたから</span>
            です。
          </p>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm tracking-wider text-white/40">だから、この教材は違います</p>
            <p className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              「管理される」から、続けられる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
