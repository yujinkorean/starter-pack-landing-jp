import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "ハングルを知らなくても始められますか？",
    answer:
      "はい。最初は挨拶と「音の出し方」から始め、発音（音の仕組み）を段階的に理解しながら進みます。暗記よりも「話し始める順番」を優先しています。",
  },
  {
    question: "完全な初心者でも本当に大丈夫ですか？",
    answer:
      "はい。このスターターパックは“ゼロから始める人”のためのパッケージです。文法説明から入るのではなく、ストーリーと会話を読みながら自然に口が動く構成になっています。",
  },
  {
    question: "購入前に中身を確認できますか？",
    answer:
      "はい。最初の10ページをプレビューできます。雰囲気や構成を確認してから購入できるので安心です。",
  },
  {
    question: "オーディオはどう使いますか？退屈になりませんか？",
    answer:
      "会話ベースの音声なので、朗読を聞くだけではなく「聞く → 真似する → 口に出す」流れで自然に使えます。短い音声が中心なので、通勤・スキマ時間でも続けやすい設計です。",
  },
  {
    question: "購入後すぐに使えますか？（いつ届きますか？）",
    answer:
      "はい。デジタル商品なので、購入後すぐにダウンロードできます（eBook / 音声）。スマホ・PCどちらでも利用可能です。",
  },
  {
    question: "支払い方法は？通貨は円ですか？",
    answer:
      "クレジットカード / PayPalに対応しています。価格は韓国ウォン（₩）表記で、決済時に自動で日本円に換算されます。",
  },
  {
    question: "コーチング（3ヶ月）はオンラインですか？何が含まれますか？",
    answer:
      "基本はメッセージ（テキスト/音声）でのQ&Aと、学習計画の作成・フィードバックです。対応範囲（返信頻度・時間帯・内容）はページ内に明記しています。※通話（Zoom等）は基本プラン外です。",
  },
  {
    question: "返品・返金はできますか？",
    answer:
      "デジタル商品の性質上、購入後の返金は原則お受けしていません。ただし、ダウンロード不具合など提供側の問題が確認できた場合は個別に対応します。購入前にプレビューをご確認ください。",
  },
  {
    question: "次のレベル（Pack1/Pack2）はありますか？",
    answer:
      "はい。次の教材は順次制作中です。スターターパック購入者には、先行案内や特典（クーポン等）を優先的にお知らせします。",
  },
];

export function FaqSection() {

  return (
    <section className="w-full flex justify-center px-6 py-24 md:py-32 bg-neutral-50" id="faq">
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
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
        </div>
      </div>
    </section>
  );
}