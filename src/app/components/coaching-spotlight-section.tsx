import { MessageSquare } from "lucide-react";

const qna = [
  { label: "発音の質問", q: "ㅇパッチムの発音が上手くできません……", a: "「みかん」を何度も言ってみてください。その「ん」の感覚が、ㅇパッチムです。舌が上に上がらない「ん」です。" },
  { label: "進め方の質問", q: "どこから復習すればいいか分からなくなりました", a: "今週は3〜5ページだけ、声に出して読んでみてください。読めたら十分。量より「声に出す」を優先してください。" },
  { label: "モチベーションの質問", q: "単語が覚えられなくて自信がなくなってきました", a: "覚えられなくて当然です。今は「見て、読んで、音を聞く」だけで大丈夫。繰り返しの中で定着していきます。" },
];

const steps = [
  { num: "01", title: "6週間の目標設定", desc: "最初に「6週間後にどこまで達成するか」を一緒に設定します。あなた専用のゴールから逆算したプランを作ります。" },
  { num: "02", title: "毎週の学習プラン提供", desc: "1週間ごとに「今週やること」を具体的に提示。何をすればいいか迷う時間がゼロになります。" },
  { num: "03", title: "週末フィードバック＋翌週プラン", desc: "毎週末に進捗を確認し、フィードバックします。そのフィードバックを踏まえて、翌週のプランを再提供します。" },
  { num: "04", title: "個別QnAコーチング", desc: "文法説明ではありません。「ㅇパッチムが難しい」→「みかんで練習してください」のように、あなたの詰まりをその場で解決します。" },
];

export function CoachingSpotlightSection() {
  return (
    <section className="w-full bg-neutral-50 px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[960px]">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">Coaching</p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            コーチングって、<br className="md:hidden" />こういうことです。
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.85] text-neutral-500 md:text-lg">
            文法の授業ではありません。<br />
            あなた専用の、週次管理＋個別サポートです。
          </p>
        </div>

        {/* 4단계 */}
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-neutral-200">{s.num}</span>
                <div>
                  <p className="text-base font-bold text-neutral-900">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QnA 채팅 */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-neutral-700">実際のコーチングはこんな感じです</p>
        </div>
        <div className="space-y-4">
          {qna.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm">
              <div className="border-b border-neutral-100 px-6 py-3">
                <span className="text-xs font-bold tracking-wider text-neutral-400">{item.label}</span>
              </div>
              <div className="flex justify-end px-6 py-4">
                <div className="flex max-w-[80%] items-end gap-3">
                  <div className="rounded-2xl rounded-tr-sm bg-neutral-100 px-5 py-3">
                    <p className="text-sm font-medium text-neutral-700">{item.q}</p>
                  </div>
                  <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-600">私</div>
                </div>
              </div>
              <div className="flex justify-start px-6 pb-5">
                <div className="flex max-w-[80%] items-end gap-3">
                  <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">講師</div>
                  <div className="rounded-2xl rounded-tl-sm bg-orange-50 px-5 py-3 ring-1 ring-orange-100">
                    <p className="text-sm font-medium leading-relaxed text-neutral-800">{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 포인트 박스 */}
        <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-6 md:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100">
              <MessageSquare size={22} className="text-orange-500" />
            </div>
            <div>
              <p className="text-base font-bold text-orange-900">AIではなく、人間が答えます</p>
              <p className="mt-1.5 text-sm leading-relaxed text-orange-800">
                韓国語ネイティブ講師が、一人ひとりの詰まりを具体的に解決します。<br />
                「正しいやり方」を教えるのではなく、<strong>あなた専用の解決策</strong>をその場で提示します。<br />
                <span className="mt-1.5 inline-block font-bold text-orange-900">※ AIではなく、韓国語ネイティブ講師が24時間以内に回答します。</span>
              </p>
            </div>
          </div>
        </div>

        {/* 실제 피드백 이미지 */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-neutral-100 p-2">
            <img src="/images/feedback-pronunciation-1.JPG" alt="発音フィードバック実例" className="h-auto w-full rounded-[16px] object-contain" />
            <p className="mt-2 pb-1 text-center text-xs text-neutral-400">実際のLINEサポートより</p>
          </div>
          <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-neutral-100 p-2">
            <img src="/images/feedback-study-1.JPG" alt="学習サポート実例" className="h-auto w-full rounded-[16px] object-contain" />
            <p className="mt-2 pb-1 text-center text-xs text-neutral-400">実際のLINEサポートより</p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-neutral-400">
          ※個人情報保護のため一部加工。コーチングはコーチングプラン限定です。
        </p>
      </div>
    </section>
  );
}
