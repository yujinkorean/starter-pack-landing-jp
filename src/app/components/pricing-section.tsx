import { Button } from "./ui/button";
import { Check, Star, Users, MessageCircle, Clock3, BadgeCheck } from "lucide-react";

type PricingSectionProps = {
  id?: string;
};

const CHECKOUT_URLS = {
  starter:
    "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/0cbaad82-3dc3-4b95-93ca-a0e7f48300c5",
  coaching:
    "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/af526bef-e447-4905-8f62-61923bc2fa12",
  vip: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/81ff43aa-fa6e-4e6d-b646-b1aa56795769",
};

const comparisonRows = [
  { label: "メインテキスト eBook", starter: true, coaching: true, vip: true },
  { label: "必須単語帳リスト", starter: true, coaching: true, vip: true },
  { label: "会話音声 MP3", starter: true, coaching: true, vip: true },
  { label: "6週間学習ロードマップ", starter: false, coaching: true, vip: true },
  { label: "LINE質問サポート", starter: false, coaching: true, vip: true },
  { label: "週1回の学習ログチェック", starter: false, coaching: false, vip: true },
  { label: "個別フィードバック", starter: false, coaching: false, vip: true },
  { label: "次週ミッション提示", starter: false, coaching: false, vip: true },
];

function CellCheck({ active }: { active: boolean }) {
  return active ? (
    <Check size={18} className="mx-auto text-green-500" />
  ) : (
    <span className="block text-center text-neutral-300">—</span>
  );
}

export function PricingSection({ id = "pricing" }: PricingSectionProps) {
  return (
    <section id={id} className="w-full bg-white px-6 py-24 font-sans md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[900px] text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-widest text-neutral-700 md:text-sm">
              PRICING
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            料金プラン
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-xl">
            リリース記念特別価格（オープンから30日間限定）
          </p>

          <p className="mx-auto mt-3 max-w-[720px] text-sm leading-relaxed text-neutral-500 md:text-base">
            まずは教材だけで始めることも、サポート付きで確実に進めることもできます。
          </p>
        </div>

        {/* Review Banner */}
        <div className="mx-auto mb-12 max-w-[800px] rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center shadow-sm md:p-6">
          <p className="mb-2 flex items-center justify-center gap-2 text-sm font-bold text-amber-900 md:text-base">
            <Star size={18} fill="currentColor" className="text-amber-500" />
            【全プラン対象】レビュー投稿キャンペーン
          </p>
          <p className="text-xs font-medium leading-relaxed text-amber-800 md:text-sm">
            ご購入後、レビューをご投稿いただいた方全員に、次回使える
            <br className="hidden md:block" />
            <span className="text-base font-bold text-amber-950 underline decoration-amber-400 decoration-2 underline-offset-4">
              特典クーポン
            </span>
            をプレゼントいたします！
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Starter Pack</h3>
              <p className="mt-2 text-sm text-neutral-500">まずは一人で始めてみたい方へ</p>

              <div className="mt-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-bold text-green-700">
                    リリース記念価格
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                    ¥2,200
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-neutral-500">
                  迷ったらまずここから。教材だけでも十分に始められます。
                </p>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  日本円でそのまま決済できます。
                </p>
              </div>

              <ul className="mt-10 space-y-4 text-sm text-neutral-600">
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>メインテキスト eBook（日・英対応）</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>必須単語帳リスト</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>会話音声 MP3（日・英対応）</span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-10 h-14 w-full rounded-full text-base font-bold transition-all hover:bg-neutral-50"
            >
              <a href={CHECKOUT_URLS.starter} target="_blank" rel="noopener noreferrer">
                Starterで始める
              </a>
            </Button>
          </div>

          {/* Coaching */}
          <div className="relative z-10 flex flex-col justify-between rounded-3xl border-2 border-neutral-900 bg-neutral-900 p-8 text-white shadow-xl lg:scale-105">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-5 py-2 text-center backdrop-blur">
                <span className="text-[10px] font-bold tracking-widest text-white/90">一番人気</span>
                <span className="text-sm font-bold text-white">迷ったらこれ</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">Coaching バンドル</h3>
              <p className="mt-2 text-sm text-white/70">
                6週間の学習サポート（期間限定）＋LINE質問サポート
              </p>

              <div className="mt-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-white/90">
                    初期リリース限定価格
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight md:text-5xl">¥4,900</span>
                </div>
                <p className="mt-2 text-xs font-medium text-white/60">
                  教材だけで終わらず、学習の流れまで整えたい方におすすめです。
                </p>
                <p className="mt-1 text-xs font-medium text-white/60">
                  日本円でそのまま決済できます。
                </p>
              </div>

              <p className="mt-4 text-xs text-white/60">
                ※ 6週間限定のサポートです。無期限サポートではありません。
              </p>
              <p className="mt-2 text-xs text-white/60">
                ※ 本プランに含まれるサポートであり、別途課金はありません。
              </p>
              <p className="mt-2 text-xs text-white/60">
                ※ 初期リリース限定価格です。今後は価格が変更される可能性があります。
              </p>

              <ul className="mt-8 space-y-4 text-sm text-white/90">
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-white" />
                  <span>Starter Pack 全内容</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-white" />
                  <span>6週間の学習計画作成（診断＋ロードマップ）</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-white" />
                  <span>LINE質問サポート（通常24時間以内）</span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-10 h-14 w-full rounded-full bg-white text-base font-bold text-neutral-900 hover:bg-white/90"
            >
              <a href={CHECKOUT_URLS.coaching} target="_blank" rel="noopener noreferrer">
                バンドルで確実に始める
              </a>
            </Button>
          </div>

          {/* VIP */}
          <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">VIP 集中管理</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    6週間、あなたの学習を徹底サポート（期間限定）
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold text-neutral-700">
                  <Users size={12} className="mr-1" /> 先着20名限定
                </span>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700">
                    初期リリース限定価格
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                    ¥9,900
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-neutral-500">
                  一人では続けにくい方、毎週の確認まで欲しい方向けです。
                </p>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  日本円でそのまま決済できます。
                </p>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                ※ 6週間集中サポートプランです。
              </p>
              <p className="mt-2 text-xs text-neutral-400">
                ※ 本プランに含まれるサポートであり、別途課金はありません。
              </p>
              <p className="mt-2 text-xs text-neutral-400">
                ※ 初期リリース限定価格です。今後は価格が変更される可能性があります。
              </p>

              <ul className="mt-8 space-y-4 text-sm text-neutral-600">
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>バンドルプランの全内容</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>週1回の学習ログチェック＋個別フィードバック</span>
                </li>
                <li className="flex gap-3">
                  <Check size={18} className="shrink-0 text-green-500" />
                  <span>毎週の学習ログ確認＆次週ミッション提示</span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full text-base font-bold transition-all hover:bg-neutral-50"
              >
                <a href={CHECKOUT_URLS.vip} target="_blank" rel="noopener noreferrer">
                  VIPプランに申し込む
                </a>
              </Button>
              <p className="mt-3 text-center text-[11px] font-medium italic text-neutral-400">
                ※定員に達し次第、募集を終了いたします
              </p>
            </div>
          </div>
        </div>

        {/* CTA Push */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-neutral-800 md:text-base">
            最初の一歩を踏み出す人が、一番早く伸びます。
          </p>
          <p className="mt-2 text-xs text-neutral-500 md:text-sm">
            完璧に準備する必要はありません。始めることが一番重要です。
          </p>
        </div>

        {/* Why support plans exist */}
        <div className="mx-auto mt-20 max-w-[980px] rounded-[28px] border border-neutral-200 bg-neutral-50 px-6 py-10 md:px-10 md:py-12">
          <div className="mx-auto max-w-[760px] text-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              なぜサポートプランがあるのか？
            </h3>
            <p className="mt-5 text-sm leading-7 text-neutral-600 md:text-base">
              多くの日本人学習者は、
              <br className="hidden md:block" />
              「何をどの順番で学べばいいか分からない」
              「一人で勉強すると続かない」
              という理由で、韓国語学習を途中でやめてしまいます。
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              だからこのスターターパックでは、教材だけでなく
              <span className="font-bold text-neutral-900"> 学習サポート付きプラン </span>
              を用意しました。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h4 className="text-base font-bold text-neutral-900">学習ロードマップ</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                あなたのレベルに合わせて、
                <br />
                「何を・どの順番で・どれくらい」
                学べばいいかを、6週間の流れで整理します。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h4 className="text-base font-bold text-neutral-900">質問サポート</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                発音・単語・文法・勉強方法など、
                韓国語学習に関する疑問をLINEで質問できます。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h4 className="text-base font-bold text-neutral-900">学習フィードバック</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                VIPプランでは週1回、学習ログを確認し、
                次にやるべきことまで具体的に提案します。
              </p>
            </div>
          </div>
        </div>

        {/* Support system */}
        <div className="mx-auto mt-16 max-w-[980px]">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              質問サポートの仕組み
            </h3>
            <p className="mx-auto mt-4 max-w-[760px] text-sm leading-7 text-neutral-600 md:text-base">
              「どんなふうに質問できるのか」「誰が答えるのか」を
              事前に分かりやすくお伝えします。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                <MessageCircle size={20} className="text-neutral-800" />
              </div>
              <h4 className="mt-4 text-base font-bold text-neutral-900">質問方法</h4>
              <p className="mt-2 text-sm font-semibold text-neutral-800">LINEオープンチャット</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                LINEから気軽に質問できます。発音、単語、文法、勉強方法などに対応します。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                <Clock3 size={20} className="text-neutral-800" />
              </div>
              <h4 className="mt-4 text-base font-bold text-neutral-900">回答時間</h4>
              <p className="mt-2 text-sm font-semibold text-neutral-800">通常24時間以内</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                できるだけ早く確認し、学習が止まらないよう丁寧にお返事します。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100">
                <BadgeCheck size={20} className="text-neutral-800" />
              </div>
              <h4 className="mt-4 text-base font-bold text-neutral-900">回答者</h4>
              <p className="mt-2 text-sm font-semibold text-neutral-800">
                韓国語ネイティブ講師＋運営チーム
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                AIではなく、実際の韓国語ネイティブ講師と運営チームが学習に関する質問へ回答します。
              </p>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mx-auto mt-16 max-w-[980px]">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              プラン比較
            </h3>
            <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-neutral-600 md:text-base">
              価格の違いは、教材量ではなく
              <span className="font-semibold text-neutral-900"> サポート範囲の違い </span>
              です。
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-6 py-4 text-left font-bold text-neutral-900">内容</th>
                    <th className="px-4 py-4 text-center font-bold text-neutral-900">Starter</th>
                    <th className="px-4 py-4 text-center font-bold text-neutral-900">Coaching</th>
                    <th className="px-4 py-4 text-center font-bold text-neutral-900">VIP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-neutral-200">
                      <td className="px-6 py-4 text-neutral-700">{row.label}</td>
                      <td className="px-4 py-4">
                        <CellCheck active={row.starter} />
                      </td>
                      <td className="px-4 py-4">
                        <CellCheck active={row.coaching} />
                      </td>
                      <td className="px-4 py-4">
                        <CellCheck active={row.vip} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-12 max-w-[900px] text-center">
          <p className="text-xs font-medium leading-relaxed text-neutral-400">
            ※ リリース特別価格は30日間限定です。期間終了後は価格が変更される可能性があります。
            <br />
            ご購入後、すぐに教材をダウンロードいただけます。
            <br />
            ※ すべてのコーチングおよびサポートは購入プランに含まれており、追加料金は一切発生しません。
          </p>

          <p className="mt-4 text-xs font-medium leading-relaxed text-neutral-400">
            ※ デジタルコンテンツの特性上、購入後の返金はできませんが、
            アクセスやファイルに問題がある場合はサポートいたします。
          </p>
        </div>
      </div>
    </section>
  );
}