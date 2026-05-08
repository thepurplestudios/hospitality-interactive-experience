"use client";

import Navbar from "@/components/layout/Navbar";
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
        <section
          className="min-h-screen"
          style={{
            background:
              "linear-gradient(180deg, #f6f1e8 0%, #efe4d2 50%, #f6f1e8 100%)",
          }}
        />
      </main>

      <PageBlurOverlay isOpen={isReservationOpen} onClose={closeReservation} />

      <ReservationModal />
    </>
  );
}

export default function Page() {
  return <HomeContent />;
}
