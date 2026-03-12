export function ProblemSection() {
  const problems = [
    "韓国語を始めたけど続かなかった",
    "参考書を買ったけど途中で止まってしまった",
    "単語を覚えても会話になると分からない",
    "勉強しているのに身についている感じがしない",
  ];

  return (
    <section className="w-full bg-neutral-900 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[920px]">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            こんな経験ありませんか？
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-[680px] text-sm leading-relaxed text-white/70 md:text-lg">
            韓国語を始めても、
            <br className="hidden md:block" />
            途中で止まってしまう人は少なくありません。
          </p>
        </div>

        {/* Problem cards */}
        <div className="mx-auto mt-14 grid max-w-[760px] grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
            >
              <p className="text-base font-semibold leading-relaxed text-white md:text-lg">
                {problem}
              </p>
            </div>
          ))}
        </div>

  {/* Summary + Bridge */}
<div className="mx-auto mt-16 max-w-[760px] md:mt-20">
  <div className="mx-auto max-w-[520px]">
    <div className="space-y-6 text-left">
      <p className="text-[17px] leading-8 text-white/72 md:text-[19px]">
        多くの人が、参考書から韓国語を始めて
        <br className="hidden md:block" />
        途中で止まってしまいます。
      </p>

      <p className="text-[17px] leading-8 text-white/72 md:text-[19px]">
        難しいからではなく、
        <span className="font-semibold text-white">
          始め方が合わなかった
        </span>
        だけかもしれません。
      </p>
    </div>

    <div className="mt-10 border-t border-white/10 pt-8 text-left">
      <p className="text-sm tracking-wide text-white/45 md:text-[15px]">
        だからこの教材は
      </p>
      <p className="mt-3 text-2xl font-semibold leading-relaxed tracking-tight text-white md:text-[34px]">
        参考書ではなく
        <span className="mx-1">「物語」</span>
        で韓国語を始めます。
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}