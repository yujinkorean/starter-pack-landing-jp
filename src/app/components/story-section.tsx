export function StorySection() {
  return (
    <section className="w-full px-6 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            すべては、
            <br />
            最初の一言から。
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-xl">
            外国語を話すとき、
            <br />
            言葉はいつも少し遅れて出てきます。
            <br />
            <span className="font-medium text-neutral-900">
              でも——それでいい。
            </span>
          </p>
        </div>

        {/* Characters */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Yujin */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-2xl">
                🧒
              </div>

              <div>
                <h3 className="text-xl font-medium">
                  ユジン <span className="text-neutral-400">/ 12歳</span>
                </h3>

                <p className="text-sm text-neutral-500">
                  明るくて好奇心旺盛な女の子
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              韓国に住んでいる。
              <br />
              人と話すことが大好き。
            </p>
          </div>

          {/* Evan */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-2xl">
                👦
              </div>

              <div>
                <h3 className="text-xl font-medium">
                  エヴァン <span className="text-neutral-400">/ 13歳</span>
                </h3>

                <p className="text-sm text-neutral-500">
                  優しくて思いやりのある男の子
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              ユジンと出会い、
              韓国語に興味を持つ。
              <br />
              少しずつ話してみたいと思うようになる。
            </p>
          </div>

        </div>

        {/* WHY 12歳 */}
       <div className="mx-auto mt-12 max-w-[680px] rounded-3xl border border-neutral-200 bg-neutral-50 p-10 text-center">

  {/* label */}
  <div className="mb-5 flex justify-center">
    <span className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm font-medium text-neutral-700">
      なぜ12歳から始まるのか
    </span>
  </div>

  <p className="text-xl font-medium leading-relaxed text-neutral-900 md:text-2xl">
    外国語を話すとき、
    <br />
    私たちは少しだけ
    <br />
    子どもになります。
  </p>

  <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
    語彙はまだ少なく、
    <br />
    発音もぎこちない。
  </p>

  <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
    だからこの物語は
    <br />
    <span className="font-medium text-neutral-900">
      12歳のユジンと13歳のエヴァン
    </span>
    から始まります。
  </p>

</div>

      </div>
    </section>
  );
}