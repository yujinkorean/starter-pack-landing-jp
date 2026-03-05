import { useState } from "react";
import { Button } from "./ui/button";
import { X, Star, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. 레몬스퀴즈 결제 링크 및 리뷰 데이터 (이전과 동일)
const CHECKOUT_URLS = {
  starter: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/0cbaad82-3dc3-4b95-93ca-a0e7f48300c5",
  coaching: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/81ff43aa-fa6e-4e6d-b646-b1aa56795769",
  vip: "https://koreanwithyujin.lemonsqueezy.com/checkout/buy/af526bef-e447-4905-8f62-61923bc2fa12"
};

const REVIEWS = {
  starter: {
    name: "みほ様", attr: "30代・主婦",
    text: "育児の合間でも楽しく続けられます！",
    fullText: "독학으로 시작했다 포기했었는데, 이 교재는 이야기가 궁금해서 계속 읽게 돼요. 아이를 키우며 짬짬이 공부하기에 최적입니다.",
    images: ["/review-starter-1.jpg", "/review-starter-2.jpg"] 
  },
  coaching: {
    name: "K.S.様", attr: "都内大学生",
    text: "3개월 서포트로 발음 불안이 사라졌습니다.",
    fullText: "발음 교정 피드백이 정말 정확해요. 로드맵 덕분에 방황하지 않고 목표치까지 도달할 수 있었습니다.",
    images: ["/review-coaching-1.jpg", "/review-coaching-2.jpg"]
  },
  vip: {
    name: "A.M.様", attr: "クリエイティブ職",
    text: "나만을 위한 커리큘럼으로 가치 충분!",
    fullText: "비즈니스 목적으로 급했는데 VIP 플랜 덕분에 실력이 비약적으로 늘었습니다. 가격 이상의 가치를 보장합니다.",
    images: ["/review-vip-1.jpg", "/review-vip-2.jpg", "/review-vip-3.jpg"]
  }
};

export function PricingSection({ id = "pricing" }: { id?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<keyof typeof REVIEWS>("starter");
  const [imgIndex, setImgIndex] = useState(0); // 슬라이드 인덱스 관리

  const openModal = (plan: keyof typeof REVIEWS) => {
    setActivePlan(plan);
    setImgIndex(0);
    setIsModalOpen(true);
  };

  const nextImg = () => setImgIndex((prev) => (prev + 1) % REVIEWS[activePlan].images.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + REVIEWS[activePlan].images.length) % REVIEWS[activePlan].images.length);

  return (
    <section id={id} className="w-full bg-white px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* 헤더 및 카드 영역은 이전과 동일하게 유지 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {(Object.keys(REVIEWS) as Array<keyof typeof REVIEWS>).map((plan) => (
            <div key={plan} className={`relative rounded-3xl border p-8 shadow-sm ${plan === 'coaching' ? 'bg-neutral-900 text-white border-neutral-800' : 'bg-white border-neutral-200'}`}>
              <h3 className="text-xl font-bold uppercase">{plan}</h3>
              <div className={`mt-8 mb-6 rounded-2xl p-4 border ${plan === 'coaching' ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-100'}`}>
                <p className={`text-xs italic ${plan === 'coaching' ? 'text-white/80' : 'text-neutral-600'}`}>"{REVIEWS[plan].text}"</p>
                <button onClick={() => openModal(plan)} className={`text-[10px] underline mt-2 block font-bold ${plan === 'coaching' ? 'text-white' : 'text-neutral-900'}`}>후기 사진 더보기(+12)</button>
              </div>
              <a href={CHECKOUT_URLS[plan]} target="_blank" rel="noopener noreferrer">
                <Button className={`w-full rounded-full h-12 font-bold ${plan === 'coaching' ? 'bg-white text-neutral-900' : 'bg-neutral-900 text-white'}`}>구매하기</Button>
              </a>
            </div>
          ))}
        </div>

        {/* 팝업 모달 애니메이션 + 슬라이더 적용 */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white p-8 overflow-hidden shadow-2xl"
              >
                <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 z-10 text-neutral-400 hover:text-neutral-900"><X /></button>
                
                <h3 className="text-xl font-bold mb-4 text-neutral-900">{REVIEWS[activePlan].name}님의 실제 후기</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">"{REVIEWS[activePlan].fullText}"</p>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-bold flex items-center gap-2 text-neutral-400"><ImageIcon size={16} /> 실제 학습 사진</h4>
                  
                  {/* 슬라이더 영역 */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={imgIndex}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-full w-full items-center justify-center font-medium text-neutral-400"
                      >
                         {/* 실제 이미지가 있다면 아래 <img /> 주석 해제 */}
                         {/* <img src={REVIEWS[activePlan].images[imgIndex]} alt="Review" className="h-full w-full object-cover" /> */}
                         실제 리뷰 사진 #{imgIndex + 1}
                      </motion.div>
                    </AnimatePresence>

                    {/* 화살표 컨트롤 */}
                    {REVIEWS[activePlan].images.length > 1 && (
                      <>
                        <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm hover:bg-white"><ChevronLeft size={20} /></button>
                        <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm hover:bg-white"><ChevronRight size={20} /></button>
                        
                        {/* 인디케이터 (Dots) */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                          {REVIEWS[activePlan].images.map((_, i) => (
                            <div key={i} className={`h-1.5 w-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-neutral-800 w-4' : 'bg-neutral-400'}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
