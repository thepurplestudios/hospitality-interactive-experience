"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import { AnimatePresence } from "framer-motion";

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReservationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isReservationOpen]);

  return (
    <>
      {/* SINGLE LOADER */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          <main
            className={`
              min-h-screen
              transition-all duration-300

              ${
                isReservationOpen
                  ? "blur-[6px] brightness-75"
                  : "blur-0 brightness-100"
              }
            `}
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

          <PageBlurOverlay
            isOpen={isReservationOpen}
            onClose={closeReservation}
          />

          <ReservationModal />
        </>
      )}
    </>
  );
}

/* ✅ CLEAN PAGE (NO SECOND LOADER) */
export default function Page() {
  return <HomeContent />;
}
