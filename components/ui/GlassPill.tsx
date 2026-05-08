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
    <div className="glass flex items-center gap-4 rounded-full px-6 py-2.5 shadow-md">
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
            className="text-[1.2rem] font-medium text-black"
          >
            {item.label}
          </motion.button>

          {index !== NAVIGATION_LINKS.length - 1 && (
            <div className="mx-4 h-4 w-px bg-black/15" />
          )}
        </div>
      ))}
    </div>
  );
}
