import { HeroSection } from "./components/hero-section";
import { BookPreviewSection } from "./components/book-preview-section";
import { DifferenceSection } from "./components/difference-section";
import { StorySection } from "./components/story-section";
import { ProblemSection } from "./components/problem-section";
import { PackageSection } from "./components/package-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { FinalCTASection } from "./components/final-cta-section";
import { AbleToDoSection } from "./components/able-to-do-section";
import { TrustSection } from "./components/trust-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection previewId="preview" pricingId="pricing" />
      <ProblemSection />
      <AbleToDoSection />

      <section id="preview">
        <BookPreviewSection />
      </section>

      <TrustSection />
      <StorySection />
      <PackageSection />

      <section id="pricing">
        <PricingSection />
      </section>

      <FaqSection />
      <FinalCTASection pricingId="pricing" previewId="preview" />
      <Footer />
    </div>
  );
}