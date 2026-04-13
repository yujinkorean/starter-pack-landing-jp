import { HeroSection } from "./components/hero-section";
import { BookPreviewSection } from "./components/book-preview-section";
import { StorySection } from "./components/story-section";
import { ProblemSection } from "./components/problem-section";
import { PackageSection } from "./components/package-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { FinalCTASection } from "./components/final-cta-section";
import { AbleToDoSection } from "./components/able-to-do-section";
import { TrustSection } from "./components/trust-section";
import { Footer } from "./components/footer";
import { LearningFlowSection } from "./components/learning-flow-section";
import { RealReviewsSection } from "./components/real-reviews-section";
import { CoachingSpotlightSection } from "./components/coaching-spotlight-section";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection previewId="preview" pricingId="pricing" />
      <ProblemSection />
      <AbleToDoSection />
      <RealReviewsSection />
      <PackageSection />
      <CoachingSpotlightSection />
      <LearningFlowSection />
      <section id="preview">
        <BookPreviewSection />
      </section>
      <StorySection />
      <TrustSection />
      <section id="pricing">
        <PricingSection />
      </section>
      <FaqSection />
      <FinalCTASection pricingId="pricing" previewId="preview" />
      <Footer />
      <Analytics />
    </div>
  );
}
