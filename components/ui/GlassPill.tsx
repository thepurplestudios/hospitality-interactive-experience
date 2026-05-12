"use client";

import { motion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/constants/navigation";

type Props = {
  onBookClick: () => void;
};

export default function GlassPill({ onBookClick }: Props) {
  const handleClick = (type: string, href: string) => {
    if (type === "modal") {
      onBookClick();
      return;
    }

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
    flex items-center gap-4
    rounded-full
    px-7 py-3
    border border-white/40
    bg-white/12
    backdrop-blur-[18px]
    shadow-[-6px_-6px_16px_rgba(255,255,255,0.08),8px_10px_30px_rgba(0,0,0,0.12)]
  "
    >
      {" "}
      {NAVIGATION_LINKS.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="text-[1.18rem] font-medium tracking-[-0.01em] text-[#14190b]"
          >
            {item.label}
          </motion.button>

          {index !== NAVIGATION_LINKS.length - 1 && (
            <div className="mx-4 h-5 w-px bg-black/10" />
          )}
        </div>
      ))}
    </div>
  );
}
