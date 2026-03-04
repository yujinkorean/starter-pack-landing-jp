export function ProblemSection() {
  return (
    <section className="w-full bg-neutral-900 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-[820px] text-center">

        {/* Label */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-white/85 md:text-sm">
            THE PROBLEM
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          韓国語を始めても、
          <br />
          途中で止まってしまう人が多いです。
        </h2>

        {/* Insight */}
        <p className="mx-auto mt-7 max-w-[720px] text-base leading-relaxed text-white/75 md:text-xl">
          つまずきの原因は、
          <span className="font-semibold text-white">「覚える量」</span>ではなく
          <span className="font-semibold text-white">「話せないストレス」</span>
          が先に来ること。
        </p>

        {/* Problems vertical */}
        <div className="mx-auto mt-12 max-w-[640px] space-y-6 text-left">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-base font-semibold md:text-lg">
              覚えたのに、話せない
            </p>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              単語や文法を学んでも、会話になると口から出てこない。
            </p>
          </div>

          <div className="flex justify-center text-white/30">↓</div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-base font-semibold md:text-lg">
              発音が不安で、自信がなくなる
            </p>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              間違えるのが怖くて、話す前に止まってしまう。
            </p>
          </div>

          <div className="flex justify-center text-white/30">↓</div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-base font-semibold md:text-lg">
              何から始めればいいかわからない
            </p>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              教材は多いのに、最初の一歩が決められない。
            </p>
          </div>

        </div>

        {/* Bridge */}
        <p className="mx-auto mt-12 max-w-[720px] text-base leading-relaxed text-white/75 md:text-xl">
          だからこそ、この教材は
          <span className="font-semibold text-white">「説明」</span>
          ではなく
          <span className="font-semibold text-white">「会話」</span>
          から始まります。
        </p>

      </div>
    </section>
  );
}