"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type GlassIconButtonProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

export default function GlassIconButton({
  icon: Icon,
  label,
  onClick,
}: GlassIconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 20,
      }}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      aria-label={label}
      className="
        glass
        flex items-center justify-center
        rounded-full
        text-black

        h-10 w-10          /* mobile */
        sm:h-11 sm:w-11    /* tablet */
        md:h-14 md:w-14    /* desktop */
      "
    >
      <Icon
        className="
          h-4 w-4          /* mobile */
          sm:h-5 sm:w-5    /* tablet */
          md:h-6 md:w-6    /* desktop */
        "
        strokeWidth={1.8}
      />
    </motion.button>
  );
}
