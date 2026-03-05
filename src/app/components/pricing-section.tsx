import { Button } from "./ui/button";
import { Check, Star, Users } from "lucide-react";

type PricingSectionProps = {
  id?: string;
};

const CHECKOUT_URLS = {
  starter: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/0cbaad82-3dc3-4b95-93ca-a0e7f48300c5",
  coaching: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/81ff43aa-fa6e-4e6d-b646-b1aa56795769",
  vip: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/af526bef-e447-4905-8f62-61923bc2fa12"
};

export function PricingSection({ id = "pricing" }: PricingSectionProps) {
  return (
    <section id={id} className="w-full bg-white px-6 py-24 md:py-32 font-sans">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* 1. Header */}
        <div className="mx-auto max-w-[900px] text-center mb-10">
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
        </div>

        {/* 🌟 2. 공통 리뷰 혜택 배너 🌟 */}
        <div className="mx-auto max-w-[800px] mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-5 md:p-6 text-center shadow-sm">
          <p className="flex justify-center items-center gap-2 text-sm md:text-base font-bold text-amber-900 mb-2">
            <Star size={18} fill="currentColor" className="text-amber-500" />
            【全プラン対象】レビュー投稿キャンペーン
          </p>
          <p className="text-xs md:text-sm text-amber-800 font-medium">
            ご購入後、レビューをご投稿いただいた方全員に、次回（Pack2やコーチング等）使える<br className="hidden md:block" />
            <span className="font-bold underline decoration-amber-400 decoration-2 underline-offset-4 text-amber-950 text-base">3,000ウォン割引クーポン</span>をプレゼントいたします！
          </p>
        </div>

        {/* 3. 3-Tier Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Tier 1: Starter Pack */}
          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Starter Pack</h3>
              <p className="mt-2 text-sm text-neutral-500">独学で着実に始めたい方へ</p>
              
              <div className="mt-8">
                {/* 🔴 SAVE 배지를 지우고 취소선 정가만 깔끔하게 남김 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-neutral-400 line-through font-medium">34,900 KRW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900">24,900</span>
                  <span className="text-lg font-bold text-neutral-900">KRW</span>
                </div>
              </div>

              <ul className="mt-10 space-y-4 text-sm text-neutral-600">
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>メインテキスト eBook (日・英対応)</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>必須単語帳リスト</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>会話音声 MP3 (日・英対応)</span></li>
              </ul>
            </div>

            <Button asChild size="lg" variant="outline" className="mt-10 h-14 w-full rounded-full text-base font-bold transition-all hover:bg-neutral-50">
              <a href={CHECKOUT_URLS.starter} target="_blank" rel="noopener noreferrer">Starterで始める</a>
            </Button>
          </div>

          {/* Tier 2: Starter + Coaching (Most Popular) */}
          <div className="relative flex flex-col rounded-3xl border-2 border-neutral-900 bg-neutral-900 p-8 text-white shadow-xl lg:scale-105 z-10 justify-between">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-5 py-2 text-center backdrop-blur">
                <span className="text-[10px] font-bold tracking-widest text-white/90">一番人気</span>
                <span className="text-sm font-bold text-white">迷ったらこれ</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">Coaching バンドル</h3>
              <p className="mt-2 text-sm text-white/70">3ヶ月間の学習ロードマップ＆質問サポート</p>

              <div className="mt-8">
                {/* 🔴 SAVE 배지 삭제 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-white/40 line-through font-medium">69,000 KRW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">49,000</span>
                  <span className="text-lg font-bold">KRW</span>
                </div>
              </div>

              <ul className="mt-10 space-y-4 text-sm text-white/90">
                <li className="flex gap-3"><Check size={18} className="text-white shrink-0" /> <span>Starter Pack 全内容</span></li>
                <li className="flex gap-3"><Check size={18} className="text-white shrink-0" /> <span>3ヶ月間の学習計画作成 (診断＋ロードマップ)</span></li>
                <li className="flex gap-3"><Check size={18} className="text-white shrink-0" /> <span>LINE/オープンチャットでのQ&A対応</span></li>
              </ul>
            </div>

            <Button asChild size="lg" className="mt-10 h-14 w-full rounded-full bg-white text-neutral-900 hover:bg-white/90 text-base font-bold">
              <a href={CHECKOUT_URLS.coaching} target="_blank" rel="noopener noreferrer">バンドルで確実に始める</a>
            </Button>
          </div>

          {/* Tier 3: VIP */}
          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">VIP 集中管理</h3>
                  <p className="mt-2 text-sm text-neutral-500">3ヶ月間、あなたの学習を徹底サポート</p>
                </div>
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold text-neutral-700">
                  <Users size={12} className="mr-1" /> 先着20名限定
                </span>
              </div>

              <div className="mt-8">
                {/* 🔴 SAVE 배지 삭제 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-neutral-400 line-through font-medium">129,000 KRW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900">99,000</span>
                  <span className="text-lg font-bold text-neutral-900">KRW</span>
                </div>
              </div>

              <ul className="mt-10 space-y-4 text-sm text-neutral-600">
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>バンドルプランの全内容</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>週1回の学習量チェック＆個別フィードバック</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0" /> <span>毎週の学習ログ確認＆次週ミッション提示</span></li>
              </ul>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" variant="outline" className="h-14 w-full rounded-full text-base font-bold transition-all hover:bg-neutral-50">
                <a href={CHECKOUT_URLS.vip} target="_blank" rel="noopener noreferrer">VIPプランに申し込む</a>
              </Button>
              <p className="mt-3 text-center text-[11px] text-neutral-400 font-medium italic">※定員に達し次第、募集を終了いたします</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[900px] text-center text-xs text-neutral-400 font-medium">
          ※ リリース特別価格は30日間限定です。期間終了後は通常価格での販売となります。ご購入後、すぐに教材をダウンロードいただけます。
        </p>
      </div>
    </section>
  );
}