import LandingPageTemplate from "@/components/LandingPageTemplate";
import { buildLandingData } from "@/lib/landingData";

export default function Page() {
  return <LandingPageTemplate data={buildLandingData("hausmeisterservice", "zweibruecken")} />;
}
