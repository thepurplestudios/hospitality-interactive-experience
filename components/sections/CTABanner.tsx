"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* BG IMAGE */}
      <Image
        src="/images/cta-banner/banner-main.png"
        alt="Pasta dining experience"
        fill
        className="object-cover"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[800px]"
        >
          <h2 className="heading-font text-white text-[3rem] md:text-[4rem] leading-[1]">
            Experience Pasta Like Never Before
          </h2>

          <p className="mt-4 text-white/80 text-[1.1rem] md:text-[1.2rem]">
            Fresh ingredients. Bold flavors. Built your way.
          </p>

          <button
            className="
              mt-8
              rounded-full
              border border-white/30
              bg-white/10
              px-8 py-4
              text-white
              font-semibold
              backdrop-blur-md
              transition-all
              hover:bg-white/20
            "
          >
            Book a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
