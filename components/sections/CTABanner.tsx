"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function CTABanner() {
  return (
    <section className="relative mt-20 md:mt-28 overflow-hidden">
      {/* BG IMAGE LAYERS (MOST RELIABLE WAY) */}

      {/* Mobile */}
      <div
        className="
    absolute inset-0
    bg-no-repeat

    bg-[url('/images/cta-banner/banner-mobile.png')]
    bg-cover
    bg-[center_20%]          /* 👈 show more TOP (logo visible) */

    md:bg-[url('/images/cta-banner/banner-tablet.png')]
    md:bg-cover
    md:bg-[center_25%]       /* 👈 tablet slightly balanced */

    lg:bg-[url('/images/cta-banner/banner-main.png')]
    lg:bg-cover
    lg:bg-center             /* desktop unchanged */
  "
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* CONTENT */}
      <Container className="relative z-10 px-5 sm:px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            max-w-[720px]
            mx-auto
            text-center
          "
        >
          <h2
            className="
              heading-font text-white leading-[1]

              text-[2.4rem]
              sm:text-[3rem]
              md:text-[3.8rem]
              lg:text-[4.5rem]
            "
          >
            Ready to Build Your Perfect Pasta?
          </h2>

          <p
            className="
              mt-4
              text-white/90

              text-[1rem]
              sm:text-[1.1rem]
              md:text-[1.2rem]
            "
          >
            Fresh ingredients, bold flavors, and a bowl crafted exactly how you
            like it.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-6 md:mt-8

              rounded-full
              border border-white/20
              bg-white/20

              px-7 py-3.5
              sm:px-8 sm:py-4

              text-[0.95rem]
              sm:text-[1rem]

              font-semibold
              text-white
              backdrop-blur-[12px]
            "
          >
            View Menu
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
