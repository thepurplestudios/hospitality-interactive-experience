"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {" "}
      {/* IMAGE (ABSOLUTE — SAME AS YOUR ORIGINAL) */}
      <div className="pointer-events-none absolute top-0 right-[-120px] z-0 md:right-[-80px] xl:right-0">
        {" "}
        <Image
          src="/images/hero/hero-main.png"
          alt="Fresh handmade pasta"
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
      {/* CONTENT */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div
          className="
    pt-2 sm:pt-6 md:pt-32
    -mt-20 sm:-mt-12 md:mt-0   /* 🔥 THIS IS THE FIX */
    pl-4 sm:pl-6 md:pl-10 xl:pl-16
    max-w-[650px]
  "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="
              heading-font
              text-[#14190b]
              leading-[0.9]
              font-bold
              text-[2.6rem]
              sm:text-[3.8rem]
              md:text-[5.8rem]
              xl:text-[7.5rem]
            "
          >
            Ahmedabad’s
            <br />
            First Pasta Bar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="
              mt-5
              text-[#2f3a1f]
              leading-[1.45]
              text-[0.95rem]
              sm:text-[1.05rem]
              md:text-[1.2rem]
              max-w-[520px]
            "
          >
            At Pasta Via, we make fresh pasta every morning and let you take the
            lead. Choose your shape, pick your sauce, add your toppings — and
            watch it come together into a bowl that’s entirely yours.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.985 }}
            className="
              mt-6
              rounded-[200px]
              border border-white/30
              bg-white/12
              px-6 py-4
              text-[1rem]
              font-bold
              text-[#2f3a1f]
              backdrop-blur-[10px]
              shadow-[-5px_-5px_10px_2px_rgba(0,0,0,0.2)]
              md:px-8 md:text-[1.35rem]
            "
          >
            VIEW MENU
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
