import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { VaultSection } from "@/components/landing/vault-section";
import { OrchestrationSection } from "@/components/landing/orchestration-section";
import { AgentsSection } from "@/components/landing/agents-section";
import { TrustSection } from "@/components/landing/trust-section";
import { NetworkSection } from "@/components/landing/network-section";
import { TokenSection } from "@/components/landing/token-section";
import { EarlyAccessSection } from "@/components/landing/early-access-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { LiveRightNowSection } from "@/components/landing/live-right-now-section";
import { PricingSection } from "@/components/landing/pricing-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <VaultSection />
      <OrchestrationSection />
      <AgentsSection />
      <LiveRightNowSection />
      <TrustSection />
      <NetworkSection />
      <TokenSection />
      <PricingSection />
      <EarlyAccessSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
