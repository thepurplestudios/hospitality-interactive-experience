"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
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
      </main>

      <PageBlurOverlay isOpen={isReservationOpen} onClose={closeReservation} />

      <ReservationModal />
    </>
  );
}

export default function Page() {
  return <HomeContent />;
}
