export function LearningFlowSection() {
  return (
    <section className="w-full flex justify-center px-6 py-10 md:py-14 bg-white">
      <div className="w-full max-w-[1200px] flex justify-center">
        <div className="w-full max-w-[800px] rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-sm tracking-[0.18em] text-neutral-400 uppercase">
                Learning Flow
              </p>
              <h3 className="text-2xl md:text-3xl tracking-tight text-neutral-900">
                一度に全部渡さないのには、理由があります。
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-[15px] md:text-base leading-relaxed text-neutral-700">
              <p>
                この単語帳は、一度にすべて渡す教材ではありません。
              </p>
              <p>
                ユジンが横で一緒に進めるように、
                毎週日曜日に、オーディオと一緒にLINEで届きます。
              </p>
              <p>
                “課題”のように少しずつ進む設計にしているのは、
                途中で止まらないためです。
              </p>
              <p>
                一人でやって挫折するのではなく、
                最後まで一緒に終わらせるための設計です。
              </p>
            </div>

            <div className="h-px w-full bg-neutral-200" />

            <div className="flex flex-col gap-3 text-[15px] md:text-base leading-relaxed text-neutral-700">
              <p className="font-medium text-neutral-900">
                なお、現在TOPIK対策教材も準備中です。
              </p>
              <p>
                こちらは試験対策に特化した内容として、
                一括で提供予定です。
              </p>
              <p>
                短期間で一気に学びたい方にも対応できるよう、
                別の形で用意していますので、ご安心ください。
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200 px-4 py-4 md:px-5">
              <p className="text-sm md:text-[15px] leading-relaxed text-neutral-600">
                ※ 単語帳と音声は、毎週LINEを通じて順次提供されます。
                Starter Packは「最初の一言」を無理なく続けるための初心者向け設計です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}