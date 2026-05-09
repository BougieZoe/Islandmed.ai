import { CTASection } from "./CTASection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { TrustSection } from "./TrustSection";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <TrustSection />
      <CTASection />
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        IslandMed AI helps travelers find, explain, and access healthcare with less stress.
      </footer>
    </main>
  );
}
