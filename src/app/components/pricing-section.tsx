import { Button } from "./ui/button";

type PricingSectionProps = {
  id?: string;
};

// 1. 레몬스퀴즈 결제 URL 상수 정의
const CHECKOUT_URLS = {
  starter: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/0cbaad82-3dc3-4b95-93ca-a0e7f48300c5",
  coaching: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/81ff43aa-fa6e-4e6d-b646-b1aa56795769",
  vip: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/af526bef-e447-4905-8f62-61923bc2fa12"
};

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
            迷ったら、まずは<span className="font-semibold text-neutral-900">一番人気</span>から.
          </p>
        </div>

        {/* Cards - 세로 3열 배치 (lg:grid-cols-3) */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 1. Starter (스타터) */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">スターター</h3>
                  <p className="mt-1 text-sm text-neutral-500">まずは教材だけ試したい人へ</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-neutral-900">24,900 KRW</span>
                  <span className="text-sm text-neutral-500">買い切り</span>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />メインテキスト（eBook）</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />会話オーディオ（MP3）</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />ボ캐브ラリーノート</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />購入後すぐDL（スマホ/PC対応）</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full text-base">
                <a href={CHECKOUT_URLS.starter} target="_blank" rel="noopener noreferrer">
                  スター터로 시작하기
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-neutral-500">迷ったら次の「一番人気」가おすすめ</p>
            </div>
          </div>

          {/* 2. Coaching (코칭, 제일 인기) */}
          <div className="relative rounded-3xl border border-neutral-900 bg-neutral-900 p-8 text-white shadow-sm flex flex-col justify-between">
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
              </div>

              <ul className="mt-7 space-y-3 text-sm text-white/85">
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />スター터의 전 내용</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />学習計画（ロードマップ）</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />3ヶ月チャットQ&A</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-white" />つまずきポイント의 개별 어드바이스</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="h-12 w-full rounded-full bg-white text-neutral-900 hover:bg-white/90 text-base">
                <a href={CHECKOUT_URLS.coaching} target="_blank" rel="noopener noreferrer">
                  코칭으로 시작하기
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-white/60">一番人気：迷う 시간을 줄여서, 최초의 일보를 확실히</p>
            </div>
          </div>

          {/* 3. VIP */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-neutral-900">VIP</h3>
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">先着</span>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-neutral-900">99,000 KRW</span>
                  <span className="text-sm text-neutral-500">買い切り</span>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />코칭의 전 내용</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />優先返信（対応スピード優先）</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />개별 학습 설계 (당신용으로 조정)</li>
                <li className="flex gap-3"><span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-neutral-900" />枠수限定（埋まり次第 종료）</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full text-base">
                <a href={CHECKOUT_URLS.vip} target="_blank" rel="noopener noreferrer">
                  VIP로 진행하기
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-neutral-500">本気で최단 루트를 타고 싶은 사람용</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[900px] text-center text-sm text-neutral-500">
          ※가격・내용은 예고 없이 변경될 수 있습니다. 구매 후는 바로 다운로드할 수 있습니다.
        </p>
      </div>
    </section>
  );
}