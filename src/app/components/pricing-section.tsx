import { Check, Flame, Star, Users } from "lucide-react";
import { useState, useEffect } from "react";

type PricingSectionProps = { id?: string };

const CHECKOUT_URLS = {
  starter: "https://yujinkorean.gumroad.com/l/eilwqu",
  coaching: "https://yujinkorean.gumroad.com/l/rknprh",
};
const LINE_URL = "https://lin.ee/YaJg73C";

function CountdownTimer() {
  const [t, setT] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    let end = Number(sessionStorage.getItem("pe"));
    if (!end) { end = Date.now() + 24 * 3600000; sessionStorage.setItem("pe", String(end)); }
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setT({ h: Math.floor(d / 3600000), m: Math.floor((d % 3600000) / 60000), s: Math.floor((d % 60000) / 1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-1 font-mono">
      {[t.h, t.m, t.s].map((v, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="rounded-md bg-neutral-900 px-2 py-1 text-sm font-bold text-white">{p(v)}</span>
          {i < 2 && <span className="font-bold text-neutral-400">:</span>}
        </span>
      ))}
    </div>
  );
}

export function PricingSection({ id = "pricing" }: PricingSectionProps) {
  return (
    <section id={id} className="w-full bg-neutral-50 px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto w-full max-w-[960px]">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">Pricing</p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            シンプルな2つのプラン
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-neutral-500 md:text-lg">
            まず無料で試してから、続けるか決めてください。
          </p>
        </div>

        {/* 가치 비교 앵커 */}
        <div className="mx-auto mb-8 max-w-[680px] rounded-2xl border border-neutral-200 bg-white px-5 py-5">
          <p className="mb-4 text-center text-xs font-bold tracking-widest text-neutral-400 uppercase">比較してみてください</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-neutral-50 px-3 py-4">
              <p className="text-[11px] font-semibold text-neutral-500">個人レッスン</p>
              <p className="mt-1 text-xl font-black text-neutral-900">¥5,000<span className="text-xs font-normal">/回</span></p>
              <p className="mt-1 text-[11px] text-neutral-400">1時間のみ</p>
            </div>
            <div className="rounded-xl bg-neutral-50 px-3 py-4">
              <p className="text-[11px] font-semibold text-neutral-500">語学スクール</p>
              <p className="mt-1 text-xl font-black text-neutral-900">¥30,000<span className="text-xs font-normal">/月</span></p>
              <p className="mt-1 text-[11px] text-neutral-400">週2〜3回程度</p>
            </div>
            <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-4">
              <p className="text-[11px] font-bold text-orange-600">このプログラム</p>
              <p className="mt-1 text-xl font-black text-orange-600">¥5,800</p>
              <p className="mt-1 text-[11px] text-orange-500 font-semibold">6週間コーチング</p>
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] font-semibold text-neutral-700">
            語学スクール1か月の<span className="text-orange-500">約1/5の価格</span>で、プロが6週間伴走。
          </p>
        </div>

        {/* 카운트다운 */}
        <div className="mx-auto mb-6 flex max-w-[680px] flex-col items-center justify-between gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 md:flex-row md:gap-4">
          <div className="flex items-center gap-2">
            <Flame size={18} className="shrink-0 text-orange-500" />
            <p className="text-[15px] font-bold text-orange-900">ローンチ特別価格 · 残り時間</p>
          </div>
          <CountdownTimer />
        </div>

        {/* 무료 체험 */}
        <div className="mx-auto mb-5 max-w-[680px] rounded-2xl border border-green-200 bg-green-50 px-5 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06C755]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-[15px] font-bold text-green-900">まず10ページ、無料で読む</p>
                  <span className="rounded-full bg-green-200 px-2 py-0.5 text-[11px] font-bold text-green-800">完全無料</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-green-700">LINEで受け取り。「続きが読みたい」と思えたら、そのまま購入を。</p>
              </div>
            </div>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="block w-full rounded-full bg-[#06C755] px-6 py-3 text-center text-sm font-bold text-white transition hover:opacity-90 md:w-auto md:shrink-0">
              無料で試す →
            </a>
          </div>
        </div>

        {/* 2가지 유료 플랜 */}
        <div className="mx-auto grid max-w-[680px] grid-cols-1 gap-5 md:grid-cols-2">

          {/* Standard */}
          <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-7">
            <div>
              <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-600">
                自分のペースで進めたい方へ
              </span>
              <h3 className="mt-4 text-xl font-bold text-neutral-900">スタンダード</h3>
              <p className="mt-1 text-sm text-neutral-400">教材 ＋ 毎週LINE単語帳</p>

              <div className="mt-5">
                <p className="text-xs text-neutral-400 line-through">定価 ¥2,980</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-neutral-900">¥1,480</span>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-600">ローンチ価格</span>
                </div>
                <p className="mt-1 text-xs text-neutral-400">コーヒー1杯分で、6週間分の教材</p>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  "小説型メインテキスト eBook（全章）",
                  "毎週LINE個別単語帳",
                  ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
                    <Check size={16} className="mt-1 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a href={CHECKOUT_URLS.starter} target="_blank" rel="noopener noreferrer"
                className="block w-full rounded-full border-2 border-neutral-900 py-4 text-center text-base font-bold text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
                スタンダードで始める
              </a>
              <p className="mt-2 text-center text-[11px] text-neutral-400">購入後すぐにダウンロード可能</p>
            </div>
          </div>

          {/* Coaching */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-orange-500 bg-neutral-900 p-6 text-white shadow-lg md:shadow-2xl md:p-7">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 shadow">
                <Flame size={12} className="text-white" />
                <span className="text-[11px] font-black text-white">一番人気 · おすすめ</span>
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/80">
                確実に結果を出したい方へ
              </span>

              <div className="mt-3 flex items-center gap-1.5">
                <Users size={13} className="text-orange-400" />
                <span className="text-xs font-bold text-orange-400">コーチング枠 残り5名</span>
              </div>

              <h3 className="mt-2 text-xl font-bold">コーチング</h3>
              <p className="mt-1 text-sm text-white/50">教材 ＋ 単語帳 ＋ 6週間プロ管理</p>
              <p className="mt-1 text-[11px] font-semibold text-orange-400">初心者〜TOPIK5・6級合格目標まで対応</p>

              <div className="mt-5">
                <p className="text-xs text-white/40 line-through">定価 ¥12,800</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">¥5,800</span>
                  <span className="rounded-full border border-orange-400/50 bg-orange-500/20 px-2 py-0.5 text-[11px] font-bold text-orange-400">ローンチ価格</span>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  "スタンダードの全内容",
                  "6週間の目標・週次プラン設定",
                  "毎週フィードバック＋翌週プラン提供",
                  "個別QnAコーチング（24h以内返答）",
                  ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-white/90">
                    <Check size={16} className="mt-1 shrink-0 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs leading-relaxed text-white/60">
                  💡 語学スクール1か月分の<strong className="text-white">1/5の価格</strong>で、プロが6週間伴走します。
                </p>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-white/40">
                ※ 韓国語ネイティブ講師が直接回答（AIではありません）<br />
                ※ 追加料金なし。すべてこの価格に含まれます
              </p>
            </div>

            <div className="mt-5">
              <a href={CHECKOUT_URLS.coaching} target="_blank" rel="noopener noreferrer"
                className="block w-full rounded-full bg-orange-500 py-4 text-center text-base font-bold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-400">
                コーチングで進める
              </a>
              <p className="mt-2 text-center text-[11px] text-white/40">残り5名 · ローンチ特別価格</p>
            </div>
          </div>
        </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-neutral-400">
          ※ ローンチ特別価格のため、期間終了後は定価に変更予定です。<br />
          ※ 追加料金は一切発生しません。
        </p>

      </div>
    </section>
  );
}
