import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";
import InfoBand from "@/components/InfoBand";
import Discover from "@/components/Discover";
import CtaBand from "@/components/CtaBand";
import WalkAway from "@/components/WalkAway";
import WhoCanJoin from "@/components/WhoCanJoin";
import Gallery from "@/components/Gallery";
import Host from "@/components/Host";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <StickyBar />
      <Hero />
      <InfoBand />
      <Discover />
      <CtaBand title="Ready to experience sound healing for yourself?" sub="Free live webinar · 26 November 2026 · 11 AM – 12 PM IST" />
      <WalkAway />
      <WhoCanJoin />
      <Gallery />
      <Host />
      <CtaBand title="Learn directly from an ISH certified sound healing trainer" sub="Join Keertie G Sujnaniii live. It is free, and your spot is one click away." />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
