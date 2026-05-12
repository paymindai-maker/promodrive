import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { ProcessSection } from "@/components/sections/process";
import { ArticlesSection } from "@/components/sections/articles";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhyUsSection />
        <FeaturedWorkSection />
        <ProcessSection />
        <ArticlesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
