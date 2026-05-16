"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.6 }}
      className="fixed inset-0 z-[999] bg-[#e7dfcf] overflow-hidden"
    >
      {/* STATIC HERO PLATE (NO ANIMATION) */}
      <div className="absolute top-0 right-0">
        <Image
          src="/images/hero/hero-main.png"
          alt="Pasta plate"
          width={1200}
          height={1200}
          priority
          className="
            w-[110vw]
            md:w-[105vw]
            xl:w-[1300px]
            max-w-none
          "
        />
      </div>

      {/* TEXT WRAPPER (SHIFTED LEFT) */}
      <div
        className="
    absolute
    left-0
    top-[45%]
    -translate-y-1/2
    pl-10
    xl:pl-16
    max-w-[520px]
  "
      >
        {" "}
        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
    text-[#2f3a1f]
    text-[1.2rem]
    md:text-[1.4rem]
    tracking-wide
    mb-5
  "
        >
          Crafted Fresh. Served Your Way.
        </motion.p>
        {/* BRAND */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="
    brand-font
    text-[#14190b]
    leading-[1]
    text-[4rem]
    md:text-[5.5rem]
  "
        >
          Pasta Via
        </motion.h1>
      </div>

      {/* FADE OUT BOTH TEXTS */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
