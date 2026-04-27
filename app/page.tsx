import Hero from "@/components/Hero";
import ProblemRecognition from "@/components/ProblemRecognition";
import RealityCheck from "@/components/RealityCheck";
import ProgramFeature from "@/components/ProgramFeature";
import AboutPreview from "@/components/AboutPreview";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemRecognition />
      <RealityCheck />
      <ProgramFeature />
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
