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
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
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

  h-12 w-12        /* mobile */
  md:h-14 md:w-14  /* desktop */
"
    >
      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />{" "}
    </motion.button>
  );
}
