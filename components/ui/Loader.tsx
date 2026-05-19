"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="fixed inset-0 z-[999] bg-background overflow-hidden"
    >
      {/* IMAGE — SAME AS HERO */}
      <div
        className="
          pointer-events-none 
          absolute 
          top-[-10px]

          right-[-40px]
          sm:right-[-80px]
          md:right-[-1px]
          xl:right-0

          w-[180vw]
          sm:w-auto
          md:w-auto

          z-0
        "
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="Pasta plate"
          width={1200}
          height={1200}
          priority
          className="
            w-[180vw]
            sm:w-[125vw]
            md:w-[115vw]
            xl:w-[1300px]

            max-w-none
            block
          "
        />
      </div>

      {/* TEXT BLOCK */}
      <div
        className="
          absolute

          top-1/2
          -translate-y-1/2

          left-0

          pl-5 sm:pl-8 md:pl-10 xl:pl-16

          max-w-[85%] sm:max-w-[520px]
        "
      >
        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="
            text-[#2f3a1f]

            text-[0.9rem]      /* mobile */
            sm:text-[1.1rem]
            md:text-[1.4rem]

            tracking-wide
            mb-4 sm:mb-5 md:mb-6
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

            text-[3.5rem]      /* mobile */
            sm:text-[4.5rem]
            md:text-[5.5rem]
          "
        >
          Pasta Via
        </motion.h1>
      </div>

      {/* FADE OUT */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
