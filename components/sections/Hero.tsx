"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function Hero() {
  return (
    <section
      className="
  relative overflow-visible

  pt-10 pb-24          /* 🔥 clean mobile spacing */
  sm:pt-12 sm:pb-28
  md:pt-16 md:pb-28
"
    >
      {/* IMAGE */}
      <div
        className="
          pointer-events-none 
          absolute 
          top-[-10px]

          right-[10px]       /* 🔥 slightly better balance */
          sm:right-[-80px]
          md:right-[-1px]
          xl:right-0

          z-0
          will-change-transform
        "
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="Fresh handmade pasta"
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

      {/* CONTENT */}
      <Container
        className="
    relative z-10 flex
    min-h-[55vh] sm:min-h-[72vh] md:min-h-screen

    items-start md:items-center

    pt-30 sm:pt-22 md:pt-0   /* 🔥 THIS FIX */

    px-5 sm:px-6 md:px-10 xl:px-16
  "
      >
        <div
          className="
          pt-4 sm:pt-10 md:pt-32
          pt-6 sm:pt-10 md:pt-32
          max-w-[650px]
          "
        >
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="
              heading-font
              text-[#14190b]
              leading-[0.92]
              font-bold

              text-[2.4rem]   /* 🔥 slightly tighter mobile */
              sm:text-[3.8rem]
              md:text-[5.8rem]
              xl:text-[7.5rem]
            "
          >
            Ahmedabad’s
            <br />
            <span className="whitespace-nowrap">First Pasta Bar.</span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="
  mt-4
  text-[#2f3a1f]

  text-[0.9rem]
  sm:text-[1.05rem]
  md:text-[1.2rem]

  leading-[1.5]

  max-w-[85%]      /* 🔥 key fix */
  sm:max-w-[520px]

  pr-2             /* 🔥 small breathing space */
"
          >
            At Pasta Via, we make fresh pasta every morning and let you take the
            lead. Choose your shape, pick your sauce, add your toppings — and
            watch it come together into a bowl that’s entirely yours.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.985 }}
            className="
              mt-4  /* 🔥 tighter spacing */

              rounded-[200px]
              border border-white/30
              bg-white/12

              px-5 py-3.5   /* 🔥 better mobile proportion */
              sm:px-6 sm:py-4
              md:px-8 md:text-[1.35rem]

              text-[0.95rem]
              font-bold
              text-[#2f3a1f]

              backdrop-blur-[10px]
              shadow-[-5px_-5px_10px_2px_rgba(0,0,0,0.2)]
            "
          >
            VIEW MENU
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
