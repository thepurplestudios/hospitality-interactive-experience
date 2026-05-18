"use client";

import { motion, AnimatePresence } from "framer-motion";

type PageBlurOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PageBlurOverlay({
  isOpen,
  onClose,
}: PageBlurOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="
            fixed inset-0 z-40

            /* stronger blur */
            backdrop-blur-xl

            /* better contrast */
            bg-black/30

            overflow-hidden
          "
        >
          {/* GRAIN TEXTURE */}
          <div
            className="
    pointer-events-none
    absolute inset-0
    opacity-[0.18]
  "
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 2px)",
              backgroundSize: "3px 3px",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
