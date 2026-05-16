"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="fixed inset-0 z-[999] bg-[#e7dfcf] overflow-hidden"
    >
      {/* 🔥 HERO IMAGE — EXACT SAME AS HERO (DO NOT CHANGE) */}
      {/* HERO IMAGE — PERFECTLY MATCHES HERO */}
      <div
        className="
  pointer-events-none 
  absolute 
  top-[-10px]

  right-[15px]       /* mobile fix */
  sm:right-[-80px]
  md:right-[-1px]   /
  xl:right-0

  z-0
  will-change-transform
"
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="Pasta plate"
          width={1200}
          height={1200}
          priority
          className="
      w-[140vw]
      sm:w-[125vw]
      md:w-[115vw]
      xl:w-[1300px]
      max-w-none
    "
        />
      </div>

      {/* 🔥 TEXT BLOCK — LEFT ALIGNED (MATCHES HERO GRID) */}
      <div
        className="
          absolute
          left-0
          top-[48%]
          -translate-y-1/2
          pl-6
          sm:pl-8
          md:pl-10
          xl:pl-16
          max-w-[520px]
        "
      >
        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="
            text-[#2f3a1f]
            text-[1rem]
            sm:text-[1.2rem]
            md:text-[1.4rem]
            tracking-wide
            mb-6
          "
        >
          Crafted Fresh. Served Your Way.
        </motion.p>

        {/* BRAND */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="
            brand-font
            text-[#14190b]
            leading-[1]
            text-[3rem]
            sm:text-[4rem]
            md:text-[5.5rem]
          "
        >
          Pasta Via
        </motion.h1>
      </div>

      {/* 🔥 FADE OUT TEXT (SMOOTH EXIT) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
