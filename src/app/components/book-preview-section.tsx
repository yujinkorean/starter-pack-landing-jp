import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plus } from "lucide-react"; // 상세 보기를 암시하는 아이콘 추가

const bookPreviews = [
  {
    title: "ストーリーページ",
    description: "ユジン와 에반의 감성적인 이야기로 시작하는 학습",
    image: "https://images.unsplash.com/photo-1636959865701-65a48395910d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "STORY",
  },
  {
    title: "ダイアログ",
    description: "日常でそのまま使える、生きた会話文",
    image: "https://images.unsplash.com/photo-1633118948215-480c9d78fc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "DIALOGUE",
  },
  {
    title: "発音ガイド",
    description: "韓国語特有の音の仕組みを、視覚的に解説",
    image: "https://images.unsplash.com/photo-1753198151600-85828558db90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "PRONUNCIATION",
  },
  {
    title: "学習ポイント",
    description: "文法の核心を、シンプルに分かりやすく整理",
    image: "https://images.unsplash.com/photo-1718780276042-acf483f2b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "KEY POINTS",
  },
  {
    title: "練習ページ",
    description: "学んだことを、自分の言葉でアウトプット",
    image: "https://images.unsplash.com/photo-1550226812-76aa0c7635a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "PRACTICE",
  },
  {
    title: "ボキャブラリー",
    description: "物語に登場した単語を, 例文と一緒に定着",
    image: "https://images.unsplash.com/photo-1552321046-a54642dc0cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "VOCABULARY",
  },
];

export function BookPreviewSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* 🌟 1. Header (감성적인 레이아웃) 🌟 */}
        <div className="mb-20 text-center md:mb-28">
          <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-neutral-400">
            INSIDE THE BOOK
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
            中身を見る
          </h2>
          <div className="mx-auto mt-8 h-px w-16 bg-neutral-900"></div>
          <p className="mt-8 text-lg font-medium leading-relaxed text-neutral-500 md:text-xl">
            ストーリー、対話、発音、練習まで。<br />
            一冊で「読む → 話す」につながる構成です。
          </p>
        </div>

        {/* 🌟 2. 고급스러운 카드 그리드 🌟 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {bookPreviews.map((preview, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6"
            >
              {/* 이미지 컨테이너 (고급스러운 테두리와 그림자) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-50 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src={preview.image}
                  alt={preview.title}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                
                {/* 세련된 플로팅 라벨 (유리 효과) */}
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-xl">
                  {preview.tag}
                </div>

                {/* 하단 캡션 (Hover 시 노출되는 디테일) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-xl">
                      <Plus size={24} strokeWidth={1.5} />
                   </div>
                </div>
              </div>

              {/* 텍스트 영역 (가독성과 위계 강조) */}
              <div className="px-2">
                <h3 className="text-2xl font-bold text-neutral-900 md:text-2xl">
                  {preview.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-500">
                  {preview.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🌟 3. Footer 🌟 */}
        <div className="mt-20 border-t border-neutral-100 pt-12 text-center">
          <p className="text-sm font-medium tracking-widest text-neutral-400">
            ※ 実際の教材ページは近日公開予定です。
          </p>
        </div>

      </div>
    </section>
  );
}