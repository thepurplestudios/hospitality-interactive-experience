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
    const el = document.querySelector("#visit-us");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-6 md:pt-7">
      <Container className="max-w-[1520px] px-5 md:px-0">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 2.0, // 🔥 sync with loader
          }}
          className="flex items-center justify-between"
        >
          {" "}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="brand-font text-[2.6rem] leading-none text-black md:text-[4.5rem]"
          >
            Pasta Via
          </motion.button>
          {/* Desktop */}
          <div className="hidden md:block">
            <GlassPill onBookClick={openReservation} />
          </div>
          {/* Mobile */}
          <div className="flex gap-2 md:hidden pr-1">
            {" "}
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
        </motion.div>{" "}
      </Container>
    </header>
  );
}
