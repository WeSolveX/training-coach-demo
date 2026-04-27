import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsStrip from "@/components/StatsStrip";
import ProblemRecognition from "@/components/ProblemRecognition";
import PullQuote from "@/components/PullQuote";
import RealityCheck from "@/components/RealityCheck";
import ProgramFeature from "@/components/ProgramFeature";
import SecondaryProducts from "@/components/SecondaryProducts";
import AboutPreview from "@/components/AboutPreview";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsStrip />
      <ProblemRecognition />
      <PullQuote />
      <RealityCheck />
      <ProgramFeature />
      <SecondaryProducts />
      <AboutPreview />
      <CTABanner
        title="Du har prøvet at starte forfra nok gange."
        body="Nu gør du det anderledes. Ingen gætværk. Ingen kompleksitet. Kun struktur der virker i din hverdag."
        ctaLabel="Køb nu — adgang med det samme"
        variant="rust"
      />
    </>
  );
}
