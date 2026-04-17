import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "韓国語を全く知らなくても始められますか？",
    answer: "はい。完全な初心者向けに設計されています。独学4〜5ヶ月程度の初級者さん、何度か挫折してきた方を想定した構成です。ハングルの仕組みから始まり、会話の流れで自然に韓国語が身につきます。",
  },
  {
    question: "コーチングって、具体的に何をしてくれるのですか？",
    answer: "①6週間の目標設定、②毎週の学習プラン提供、③週末フィードバック＋翌週プラン提供、④個別QnAコーチングの4つです。文法の授業ではなく、あなた専用の管理サポートです。「ㅇパッチムが難しい」なら「みかんで練習してください」のように、詰まった瞬間に具体的な解決策を提示します。",
  },
  {
    question: "コーチングに答えてくれるのは誰ですか？AIですか？",
    answer: "AIではありません。韓国語ネイティブ講師が実際に回答します。LINEで質問すると、通常24時間以内に具体的な指示が届きます。韓国語学習に関する内容（発音・単語・表現・勉強方法など）に対応しています。",
  },
  {
    question: "コーチングは6週間だけですか？その後は？",
    answer: "はい、コーチングは6週間です。ただし「6週間で自分一人で続けられる状態を作る」ことがゴールです。コーチング終了後も、教材と単語帳は引き続き利用できます。",
  },
  {
    question: "市販の参考書と何が違いますか？",
    answer: "一般的な参考書は文法説明が中心ですが、この教材はストーリーの中で自然に韓国語を学ぶ構造です。さらに毎週届く個別単語帳とコーチングで「続ける仕組み」まで整っています。教材を渡すだけで終わりません。",
  },
  {
    question: "サブスクリプションや月額課金はありますか？",
    answer: "いいえ。すべてのプランは一度の購入で利用できる買い切り型です。月額課金・追加料金は一切ありません。コーチングも購入プランに含まれています。",
  },
  {
    question: "購入後、どうやって教材を受け取りますか？",
    answer: "決済完了後、登録したメールアドレスにダウンロードリンクが届きます。スマートフォン・タブレット・PC対応です。購入後すぐにダウンロードして始められます。",
  },
  {
    question: "返金はできますか？",
    answer: "デジタルコンテンツの特性上、購入後の返金はお受けしておりません。購入前にLINEで無料の体験版20ページをご確認ください。ファイル受領に技術的な問題がある場合はサポートいたします。",
  },
  {
    question: "この教材はAIで作られていますか？",
    answer: "いいえ。韓国の入試家庭教師兼小説家が、構成から内容まですべて直接執筆しました。日本人学習者がつまずきやすいポイントを踏まえた、完全手作りの教材です。",
  },
];

export function FaqSection() {
  return (
    <section className="w-full flex justify-center bg-white px-4 py-16 md:px-6 md:py-28" id="faq">
      <div className="w-full max-w-[760px]">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">FAQ</p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-neutral-900 md:text-5xl">よくある質問</h2>
          <p className="max-w-[480px] text-[15px] leading-relaxed text-neutral-500 md:text-lg">
            購入前の不安を、ここで解消しておきましょう。
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-neutral-200 bg-white px-5 md:px-6">
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <span className="text-[15px] font-semibold leading-snug text-neutral-900 pr-2">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[14px] leading-[1.85] text-neutral-600 md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center">
          <p className="text-[15px] font-bold text-neutral-900">他にご不明な点がありましたら</p>
          <a href="mailto:yujinkoreanstories@gmail.com"
            className="mt-2 inline-block text-sm font-semibold text-neutral-700 underline underline-offset-4">
            yujinkoreanstories@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
