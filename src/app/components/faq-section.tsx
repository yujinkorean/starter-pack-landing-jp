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
      "一般的な教材は文法説明が中心ですが、この教材はユジンとエヴァンの物語を通して「会話の文脈」から韓国語を学ぶ構成です。さらに、基本形・丁寧語・カジュアルの3つの話し方を同時に学べる単語帳と、会話音声も含まれています。",
  },
  {
    question: "この教材はどんな人に向いていますか？",
    answer:
      "この教材は、韓国語をゼロから始めたい人、文法中心の勉強が苦手な人、まず会話の流れを理解したい人、楽しく韓国語を始めたい人に向いています。逆に、文法を細かく分析して勉強したい方や、すでに韓国語で日常会話ができる方には少し物足りないかもしれません。このスターターパックは「最初の一言」を出すための教材です。",
  },
  {
    question: "この教材はAIで作られたものですか？",
    answer:
      "いいえ。すべての文章は、韓国人著者が日本人学習者の発音の特徴や実用性を考慮して直接執筆しました。オーディオもAI音声ではなく、著者と友人の実際の会話を収録したトーキングオーディオです。",
  },
  {
    question: "日本円（JPY）で支払えますか？価格はいくらですか？",
    answer:
      "はい。日本円での決済に対応しています。Starter Pack は ¥2,200 です。為替変動に関係なく、表示価格のまま決済できます。",
  },
  {
    question: "これはサブスクリプションですか？",
    answer:
      "いいえ。本商品は一度の購入で利用できる買い切り型のデジタル教材です。月額課金などは一切ありません。",
  },
  {
    question: "購入後はいつまで利用できますか？",
    answer:
      "一度ご購入いただければ、期限なくご利用いただけます。ご自身のペースで何度でも学習可能です。",
  },
  {
    question: "購入後、教材はどう受け取りますか？",
    answer:
      "決済完了後、登録したメールアドレスにダウンロードリンクが送付されます。PDF教材とMP3オーディオを、スマートフォン・タブレット・PCですぐに利用できます。",
  },
  {
    question: "返金はできますか？",
    answer:
      "デジタルコンテンツの特性上、購入後の返金はお受けしておりません。ただし、アクセスやファイル受領に技術的な問題がある場合は、サポートいたします。",
  },
  {
    question: "コーチングプランの質問には誰が答えますか？",
    answer:
      "AIチャットボットではなく、著者ユジンと韓国語ネイティブ講師が対応します。質問サポートは購入プランに含まれるサポートであり、発音・単語・表現・学習方法など、韓国語学習に関する内容に対応します。追加料金は発生しません。",
  },
  {
    question: "質問サポートには制限がありますか？",
    answer:
      "はい。質問サポートは韓国語学習に関する内容（発音・単語・表現・学習方法など）に限られます。翻訳代行や課題の代行などには対応しておりません。",
  },
  {
    question: "この教材の次のレベルはありますか？",
    answer:
      "はい。Starter Pack（Pack 0.5）のあとに、Pack 1、Pack 2 など、より深い会話を学ぶ教材を順次リリース予定です。レビューを書いていただいた方には、次回使える特典もご案内する予定です。",
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
            ご不明な点がある場合は、サイト下部の連絡先よりお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}