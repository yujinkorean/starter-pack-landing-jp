import { Quote } from "lucide-react";

export function StorySection() {
  return (
    <section className="w-full bg-neutral-50/50 px-6 py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* 1. Header */}
        <div className="mx-auto max-w-[900px] text-center mb-10">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-widest text-neutral-700 md:text-sm">
              STORY
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 md:text-6xl md:leading-[1.2]">
            すべては、<br />
            最初の一言から。
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-600 md:text-2xl">
            外国語を話すとき、<br />
            言葉はいつも少し遅れて出てきます。
          </p>

          <p className="mt-6 text-xl font-bold text-neutral-900 md:text-3xl">
            <span className="inline-block border-b-4 border-blue-200 pb-1">
              でも——それでいい。
            </span>
          </p>
        </div>


        {/* ✨ 추가 설명 (아동 교재 오해 방지) */}
        <div className="mx-auto mt-10 max-w-[700px] text-center">
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            この物語の主人公は
            <span className="font-semibold text-neutral-900">12〜13歳の少年たち</span>
            です。
          </p>

          <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
            でも、この教材は子ども向けではありません。
            韓国語を初めて学ぶ大人でも、
            自然に入り込めるように作られた
            <span className="font-semibold text-neutral-900">ストーリー型の韓国語教材</span>
            です。
          </p>
        </div>


        {/* 2. Characters */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Yujin */}
          <div className="group rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-sm transition-[opacity,background-color] md:hover:-translate-y-1 hover:shadow-md md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">
                ユジン
              </h3>

              <p className="mt-2 text-base font-semibold text-amber-600">
                韓国で暮らす、明るく率直な少年
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-50 pt-6">
              <p className="text-base leading-[1.8] text-neutral-600 md:text-lg">
                人と話すことが好きで、
                エヴァンに少しずつ
                韓国語の世界を広げていく。
              </p>
            </div>
          </div>


          {/* Evan */}
          <div className="group rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-sm transition-[opacity,background-color] md:hover:-translate-y-1 hover:shadow-md md:p-10">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">
                エヴァン
              </h3>

              <p className="mt-2 text-base font-semibold text-emerald-600">
                韓国語に少しずつ興味を持ち始める少年
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-50 pt-6">
              <p className="text-base leading-[1.8] text-neutral-600 md:text-lg">
                ユジンと出会い、
                「まだ話せない」気持ちを抱えながら
                最初の一言を探していく。
              </p>
            </div>
          </div>

        </div>


        {/* 3. WHY 12歳 */}
        <div className="relative mx-auto mt-24 max-w-[850px] overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-16 text-center shadow-lg md:shadow-2xl md:px-16 md:py-24">

          <div className="absolute -left-6 -top-6 text-white/5">
            <Quote size={160} strokeWidth={2} className="rotate-180" />
          </div>

          <div className="absolute -bottom-6 -right-6 text-white/5">
            <Quote size={160} strokeWidth={2} />
          </div>

          <div className="relative z-10">

            <div className="mb-10 flex justify-center">
              <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-bold tracking-widest text-white shadow-sm md:backdrop-blur-md md:text-base">
                なぜ少年の物語なのか
              </span>
            </div>

            <p className="text-2xl font-bold leading-[2] text-white md:text-3xl lg:text-4xl lg:leading-[1.9]">
              外国語を話すとき、<br />
              私たちは少しだけ<br />
              <span className="relative mt-2 inline-block">
                <span className="relative z-10 text-blue-300">子ども</span>
                <span className="absolute bottom-1 left-0 -z-10 h-4 w-full rounded-full bg-blue-500/30 blur-[2px]"></span>
              </span>
              になります。
            </p>

            <div className="mx-auto my-12 h-px w-16 bg-white/20"></div>

            <p className="text-lg font-medium leading-relaxed text-slate-100 md:text-xl">
              語彙はまだ少なく、発音もぎこちない。<br />
              でもそれは、誰もが通る最初の時間です。
            </p>

            <div className="mt-8">
              <p className="text-xl font-bold text-white md:text-2xl">
                だからこの物語は
              </p>

              <p className="mt-4 text-2xl font-bold text-white md:text-3xl">
                ユジンとエヴァン
              </p>

              <p className="mt-3 text-base font-medium tracking-widest text-slate-200">
                の物語から始まります。
              </p>
            </div>

            <p className="mt-10 text-sm text-slate-300 md:text-base">
              年齢に関係なく、
              韓国語を初めて学ぶ人なら
              誰でもこの物語の主人公になれます。
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}