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

    const el = document.querySelector(href);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        flex items-center

        gap-2 sm:gap-3 md:gap-4          /* responsive spacing */

        rounded-full

        px-4 py-2                         /* mobile */
        sm:px-6 sm:py-2.5                 /* tablet */
        md:px-7 md:py-3                   /* desktop */

        border border-white/40
        bg-white/12
        backdrop-blur-[18px]

        shadow-[-6px_-6px_16px_rgba(255,255,255,0.08),8px_10px_30px_rgba(0,0,0,0.12)]
      "
    >
      {NAVIGATION_LINKS.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <motion.button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleClick(item.type, item.href)}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="
              font-medium
              tracking-[-0.01em]
              text-[#14190b]

              text-[0.9rem]        /* mobile */
              sm:text-[1.05rem]    /* tablet */
              md:text-[1.18rem]    /* desktop */
            "
          >
            {item.label}
          </motion.button>

          {index !== NAVIGATION_LINKS.length - 1 && (
            <div
              className="
                mx-2 sm:mx-3 md:mx-4   /* responsive divider spacing */
                h-4 sm:h-5
                w-px
                bg-black/10
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}
