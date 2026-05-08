"use client";

import { MapPin, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/layout/container";
import GlassPill from "@/components/ui/GlassPill";
import GlassIconButton from "@/components/ui/GlassIconButton";
import { useUIStore } from "@/store/use-ui-store";

export default function Navbar() {
  const { openReservation } = useUIStore();

  const scrollToVisit = () => {
    document.querySelector("#visit-us")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-6 md:pt-7">
      <Container className="max-w-[1520px]">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="brand-font text-[3.4rem] leading-none text-black md:text-[4.5rem]"
          >
            Pasta Via
          </motion.button>

          {/* Desktop */}
          <div className="hidden md:block">
            <GlassPill onBookClick={openReservation} />
          </div>

          {/* Mobile */}
          <div className="flex gap-3 md:hidden">
            <GlassIconButton
              icon={UtensilsCrossed}
              label="Book Table"
              onClick={openReservation}
            />

            <GlassIconButton
              icon={MapPin}
              label="Find Us"
              onClick={scrollToVisit}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
