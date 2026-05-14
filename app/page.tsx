"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import BuildYourOwnPasta from "@/components/sections/BuildYourOwnPasta";
import PopularCombosSection from "@/components/sections/popular-combos-section";
import AboutSection from "@/components/sections/AboutSection";
import VisitUsSection from "@/components/sections/VisitUs";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import ReservationModal from "@/components/interactive/ReservationModal";
import PageBlurOverlay from "@/components/motion/PageBlurOverlay";
import { useUIStore } from "@/store/use-ui-store";

function HomeContent() {
  const { isReservationOpen, closeReservation } = useUIStore();

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen transition-all duration-500 ${
          isReservationOpen ? "scale-[0.985]" : "scale-100"
        }`}
      >
        <Hero />
        <WhySection />
        <BuildYourOwnPasta />
        <PopularCombosSection />
        <AboutSection />
        <VisitUsSection />
        <CTABanner />
        <Footer />
      </main>

      <PageBlurOverlay isOpen={isReservationOpen} onClose={closeReservation} />

      <ReservationModal />
    </>
  );
}

export default function Page() {
  return <HomeContent />;
}
