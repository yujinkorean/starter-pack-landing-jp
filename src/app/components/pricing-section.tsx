import { Check, Flame, Star } from "lucide-react";
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

        {/* 카운트다운 */}
        <div className="mx-auto mb-8 flex max-w-[680px] flex-col items-center justify-between gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 md:flex-row md:gap-4">
          <div className="flex items-center gap-2">
            <Flame size={18} className="shrink-0 text-orange-500" />
            <p className="text-[15px] font-bold text-orange-900">初期リリース限定価格 · 残り時間</p>
          </div>
          <CountdownTimer />
        </div>

        {/* 무료 */}
        <div className="mx-auto mb-5 max-w-[680px] rounded-2xl border border-green-200 bg-green-50 px-5 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06C755]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-bold text-green-900">まず無料で試す</p>
                  <span className="rounded-full bg-green-200 px-2 py-0.5 text-[11px] font-bold text-green-800">0円</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-green-700">体験版20ページをLINE登録後すぐ受け取れます</p>
              </div>
            </div>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="block w-full rounded-full bg-[#06C755] px-6 py-3 text-center text-sm font-bold text-white transition hover:opacity-90 md:w-auto md:shrink-0">
              まず無料で20ページ体験する
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

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-neutral-900">¥1,480</span>
                <span className="text-sm text-neutral-400">買い切り</span>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  "小説型メインテキスト eBook",
                  "個別単語帳（毎週LINEで配信）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
                    <Check size={16} className="mt-1 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">※ 単語帳は毎週LINEで順次配信します</p>
            </div>

            <a href={CHECKOUT_URLS.starter} target="_blank" rel="noopener noreferrer"
              className="mt-8 block w-full rounded-full border-2 border-neutral-900 py-4 text-center text-base font-bold text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
              スタンダードで始める
            </a>
          </div>

          {/* Coaching */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-orange-500 bg-neutral-900 p-6 text-white shadow-2xl md:p-7">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 shadow">
                <Flame size={12} className="text-white" />
                <span className="text-[11px] font-black text-white">一番人気 · おすすめ</span>
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/80">
                確実に続けたい方へ
              </span>
              <h3 className="mt-4 text-xl font-bold">コーチング</h3>
              <p className="mt-1 text-sm text-white/50">教材 ＋ 単語帳 ＋ 6週間管理</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">¥2,980</span>
                <span className="text-sm text-white/40">買い切り</span>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  "スタンダードの全内容",
                  "6週間の目標・週次プラン設定",
                  "毎週フィードバック＋翌週プラン提供",
                  "個別QnAコーチング（24h以内）",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-white/90">
                    <Check size={16} className="mt-1 shrink-0 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-relaxed text-white/50">
                ※ 韓国語ネイティブ講師が24時間以内に回答します（AIではありません）<br />
                ※ 追加料金なし。すべてこの価格に含まれます
              </p>
            </div>

            <a href={CHECKOUT_URLS.coaching} target="_blank" rel="noopener noreferrer"
              className="mt-8 block w-full rounded-full bg-orange-500 py-4 text-center text-base font-bold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-400">
              コーチングで進める
            </a>
          </div>
        </div>

        {/* 비교표 - mobile card list, desktop table */}
        <div className="mx-auto mt-10 max-w-[680px]">
          {/* Mobile: card list (hidden on md+) */}
          <div className="flex flex-col gap-2 md:hidden">
            {[
              ["メインテキスト eBook", true, true],
              ["毎週LINE個別単語帳", true, true],
              ["6週間目標・週次プラン", false, true],
              ["毎週フィードバック＋翌週プラン", false, true],
              ["個別QnAコーチング", false, true],
            ].map(([label, s, c]) => (
              <div key={String(label)} className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm">
                <span className="font-medium text-neutral-700 pr-2">{label}</span>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] text-neutral-400">標準</span>
                    {s ? <Check size={15} className="text-green-500" /> : <span className="text-neutral-300 text-base">—</span>}
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] text-orange-500 font-bold">コーチ</span>
                    {c ? <Check size={15} className="text-green-500" /> : <span className="text-neutral-300 text-base">—</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table (hidden on mobile) */}
          <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white md:block">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="px-5 py-4 text-left font-bold text-neutral-700">内容</th>
                  <th className="px-4 py-4 text-center font-bold text-neutral-700">スタンダード</th>
                  <th className="px-4 py-4 text-center font-bold text-orange-600">コーチング ★</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["メインテキスト eBook", true, true],
                  ["毎週LINE個別単語帳", true, true],
                  ["6週間目標・週次プラン", false, true],
                  ["毎週フィードバック＋翌週プラン", false, true],
                  ["個別QnAコーチング", false, true],
                ].map(([label, s, c]) => (
                  <tr key={String(label)} className="border-t border-neutral-100">
                    <td className="px-5 py-3.5 text-neutral-600">{label}</td>
                    <td className="px-4 py-3.5 text-center">{s ? <Check size={16} className="mx-auto text-green-500" /> : <span className="text-neutral-300">—</span>}</td>
                    <td className="bg-orange-50/50 px-4 py-3.5 text-center">{c ? <Check size={16} className="mx-auto text-green-500" /> : <span className="text-neutral-300">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-neutral-400">
            ※ 初期リリース限定価格です。期間終了後は変更予定。<br />
            ※ サポートはすべて購入価格に含まれており、追加料金は一切発生しません。
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[680px] rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-bold text-amber-900">
            <Star size={14} fill="currentColor" className="text-amber-500" />
            購入後のレビュー投稿で、次回使える特典クーポンをプレゼント
          </p>
        </div>

      </div>
    </section>
  );
}
