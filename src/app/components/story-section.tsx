import { Quote } from "lucide-react";

export function StorySection() {
  return (
    <section className="w-full bg-neutral-50/50 px-6 py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">

      {/* 1. Header */}
        <div className="mx-auto max-w-[900px] text-center mb-10">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-widest text-neutral-700 md:text-sm">
              S T O R Y
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
            <span className="inline-block border-b-4 border-blue-200 pb-1">でも——それでいい。</span>
          </p>
        </div>

        {/* 🌟 2. Characters (카드 볼륨업 & 폰트 확대) 🌟 */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Yujin Card (남자아이로 수정됨) */}
          <div className="group rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 text-4xl shadow-inner">
                👦🏻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  ユジン <span className="ml-1 text-lg font-medium text-neutral-400">/ 12歳</span>
                </h3>
                <p className="mt-1 text-base font-bold text-amber-600">
                  明るくて好奇心旺盛な男の子
                </p>
              </div>
           </div>
            <div className="mt-8 border-t border-neutral-50 pt-6">
              <p className="text-base leading-[1.8] text-neutral-600 md:text-lg">
                韓国に住んでいる。<br />
                人と話すことが大好き。
              </p>
            </div>
          </div>

        {/* Evan Card (에메랄드/민트 톤으로 변경하여 파란 얼굴 방지) */}
          <div className="group rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:p-10">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 text-4xl shadow-inner">
                👦🏼
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  エヴァン <span className="ml-1 text-lg font-medium text-neutral-400">/ 13歳</span>
                </h3>
                <p className="mt-1 text-base font-bold text-emerald-600">
                  優しくて思いやりのある男の子
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-neutral-50 pt-6">
              <p className="text-base leading-[1.8] text-neutral-600 md:text-lg">
                ユジンと出会い、韓国語に興味を持つ。<br />
                少しずつ話してみたいと思うようになる。
              </p>
            </div>
          </div>

        </div>
        {/* ✨ 3. WHY 12歳 (이전에 성공했던 Cinematic Dark 유지) ✨ */}
        <div className="relative mx-auto mt-24 max-w-[850px] overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-16 text-center shadow-2xl md:px-16 md:py-24">
          
          <div className="absolute -left-6 -top-6 text-white/5">
            <Quote size={160} strokeWidth={2} className="rotate-180" />
          </div>
          <div className="absolute -bottom-6 -right-6 text-white/5">
            <Quote size={160} strokeWidth={2} />
          </div>

          <div className="relative z-10">
            <div className="mb-10 flex justify-center">
              <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-bold tracking-widest text-white shadow-sm backdrop-blur-md md:text-base">
                なぜ12歳から始まるのか
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
              だからこの物語は、
            </p>

            <div className="mt-8">
              <p className="text-2xl font-bold text-white md:text-3xl">
                12歳のユジンと13歳のエヴァン
              </p>
              <p className="mt-3 text-base font-medium tracking-widest text-slate-200">
                から始まります。
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}