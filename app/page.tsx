import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MainFeaturesSection } from "@/components/main-features-section"
import { PlatformShowcase } from "@/components/platform-showcase"
import { BenefitsSection } from "@/components/benefits-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MainFeaturesSection />
      <PlatformShowcase />
      <BenefitsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
