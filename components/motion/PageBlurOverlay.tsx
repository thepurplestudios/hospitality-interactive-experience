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
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md"
        />
      )}
    </AnimatePresence>
  );
}
