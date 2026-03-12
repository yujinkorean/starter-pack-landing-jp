import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "韓国語をまったく知らなくても始められますか？",
    answer:
      "はい。完全な初心者のために設計されています。ハングルの仕組み（天・地・人）から始まり、22日で最初の一言が出るように構成されています。",
  },
  {
    question: "市販の2,000円台の教材とは何が違いますか？",
    answer:
      "一般的な教材は文法説明が中心ですが、この教材はユジンとエヴァンの物語を通して「会話の文脈」から韓国語を学ぶ構成です。さらに、基本形・丁寧語・カジュアルの3つの話し方を同時に学べるインタラクティブ単語帳も含まれています。",
  },
  {
    question: "この教材はどんな人に向いていますか？",
    answer:
      "この教材は、韓国語をゼロから始めたい人、文法中心の勉強が苦手な人、まず会話の流れを理解したい人、楽しく韓国語を始めたい人に向いています。逆に、文法を細かく分析して勉強したい方や、すでに韓国語で日常会話ができる方には少し物足りないかもしれません。このスターターパックは「最初の一言」を出すための教材です。",
  },
  {
    question: "この教材はAIで作られたものですか？",
    answer:
      "いいえ。すべての文章は、韓国人著者が日本人学習者の発音の特徴や実用性を考慮して直接執筆しました。オーディオもAI音声ではなく、著者と友人の実際の会話を収録したトーキングオーディオブックです。",
  },
  {
    question: "コーチングプランの質問には誰が答えますか？",
    answer:
      "AIチャットボットではなく、著者ユジンと韓国人講師がLINEで直接回答します。発音、単語、表現、学習方法など、韓国語学習に関する疑問に対応します。",
  },
  {
    question: "日本円（JPY）で支払えますか？価格はいくらですか？",
    answer:
      "はい。日本円での決済に対応しています。Starter Pack は 2,750 JPY（約24,900 KRW）です。為替変動に関係なく、固定価格で決済できます。",
  },
  {
    question: "購入後、教材はどう受け取りますか？",
    answer:
      "決済完了後、登録したメールアドレスにダウンロードリンクが送付されます。PDF教材とMP3オーディオを、スマートフォン・タブレット・PCですぐに利用できます。",
  },
  {
    question: "この教材の次のレベルはありますか？",
    answer:
      "はい。Starter Pack（Pack 0.5）のあとに、Pack 1、Pack 2 など、より深い会話を学ぶ教材を順次リリース予定です。レビューを書いていただいた方には、次の教材で使える割引クーポンもお送りします。",
  },
];

export function FaqSection() {
  return (
    <section
      className="w-full flex justify-center px-6 py-24 md:py-32 bg-neutral-50"
      id="faq"
    >
      <div className="w-full max-w-[1200px] flex justify-center">
        <div className="w-full max-w-[800px] flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl md:text-5xl tracking-tight">よくある質問</h2>
            <p className="text-base md:text-lg text-neutral-600">
              購入前の不安を、ここで解消しておきましょう。
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-neutral-200/70"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-sm text-neutral-500">
            他にも質問があれば、購入前でもお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}