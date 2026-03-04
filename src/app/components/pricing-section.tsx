import { Button } from "./ui/button";

type PricingSectionProps = {
  id?: string;
};

// ✅ 너 레몬스퀴즈에서 Share로 복사한 링크 3개를 여기에 붙여넣기
const STARTER_CHECKOUT_URL = "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/0cbaad82-3dc3-4b95-93ca-a0e7f48300c5";
const COACHING_CHECKOUT_URL = "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/81ff43aa-fa6e-4e6d-b646-b1aa56795769";
const VIP_CHECKOUT_URL = "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/af526bef-e447-4905-8f62-61923bc2fa12";

export function PricingSection({ id = "pricing" }: PricingSectionProps) {
  return (
    <section id={id} className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold tracking-widest text-neutral-700 md:text-sm">
              PRICING
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            料金プラン
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-xl">
            あなたのペースに合わせて選べます。
            <br />
            迷ったら、まずは<span className="font-semibold text-neutral-900">一番人気</span>から。
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">スターター</h3>
                <p className="mt-1 text-sm text-neutral-500">まずは教材だけ試したい人へ</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900">
                  24,900 KRW
                </span>
                <span className="text-sm text-neutral-500">買い切り</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">発売記念価格（期間限定）</p>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>メインテキスト（eBook）</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>会話オーディオ（MP3）</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>ボキャブラリーノート</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>購入後すぐDL（スマホ/PC対応）</span>
              </li>
            </ul>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full text-base">
                <a className="lemonsqueezy-button" href={STARTER_CHECKOUT_URL}>
                  スターターで始める
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-neutral-500">
                迷ったら次の「一番人気」がおすすめ
              </p>
            </div>
          </div>

          {/* Coaching (Most popular) */}
          <div className="relative rounded-3xl border border-neutral-900 bg-neutral-900 p-8 text-white shadow-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-5 py-2 text-center backdrop-blur">
                <span className="text-xs font-semibold tracking-widest text-white/90">一番人気</span>
                <span className="text-sm font-semibold text-white">迷ったらこれ</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold">コーチング付き</h3>
              <p className="mt-1 text-sm text-white/70">最短で「話せる実感」まで進みたい人へ</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">49,000 KRW</span>
                  <span className="text-sm text-white/70">買い切り</span>
                </div>
                <p className="mt-2 text-sm text-white/70">教材 + 3ヶ月サポート</p>
              </div>

              <ul className="mt-7 space-y-3 text-sm text-white/85">
                <li className="flex gap-3">
                  <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>スターターの全内容</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>学習計画（ロードマップ）</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>3ヶ月チャットQ&A（回数制限なし）</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />
                  <span>つまずきポイントの個別アドバイス</span>
                </li>
              </ul>

              <div className="mt-8">
                <Button asChild size="lg" className="h-12 w-full rounded-full bg-white text-neutral-900 hover:bg-white/90 text-base">
                  <a className="lemonsqueezy-button" href={COACHING_CHECKOUT_URL}>
                    迷ったらこれで始める
                  </a>
                </Button>
                <p className="mt-3 text-center text-xs text-white/60">
                  一番人気：迷う時間を減らして、最初の一歩を確実に
                </p>
              </div>
            </div>
          </div>

          {/* VIP */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">VIP</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  手厚く伴走してほしい人へ（枠数限定）
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
                先着
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900">
                  99,000 KRW
                </span>
                <span className="text-sm text-neutral-500">買い切り</span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">教材 + 優先サポート</p>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>コーチングの全内容</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>優先返信（対応スピード優先）</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>個別の学習設計（あなた用に調整）</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                <span>枠数限定（埋まり次第終了）</span>
              </li>
            </ul>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full text-base">
                <a className="lemonsqueezy-button" href={VIP_CHECKOUT_URL}>
                  VIPで進める
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-neutral-500">
                本気で最短ルートを取りたい人向け
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[900px] text-center text-sm text-neutral-500">
          ※価格・内容は予告なく変更される場合があります。購入後はすぐにダウンロードできます。
        </p>
      </div>
    </section>
  );
}