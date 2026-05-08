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
      onClick={onClick}
      aria-label={label}
      className="glass flex h-14 w-14 items-center justify-center rounded-full text-black"
    >
      <Icon size={24} strokeWidth={1.8} />
    </motion.button>
  );
}
