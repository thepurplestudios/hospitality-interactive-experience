"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* right hero image */}
      <div className="pointer-events-none absolute right-[-2%] top-0 z-0 md:right-[-1%] md:top-0 xl:right-0 xl:top-0">
        <Image
          src="/images/hero/hero-main.png"
          alt="Fresh handmade pasta"
          width={1200}
          height={1200}
          priority
          className="w-[620px] md:w-[980px] xl:w-[1180px]"
        />
      </div>

      {/* content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-[780px] pt-28 md:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-font text-[3.3rem] leading-[0.9] font-bold text-[#14190b] sm:text-[4.6rem] md:text-[5.8rem] xl:text-[7.5rem]"
          >
            Ahmedabad’s
            <br />
            First Pasta Bar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-[720px] text-[1rem] leading-[1.45] text-[#2f3a1f] sm:text-[1.1rem] md:mt-6 md:text-[1.2rem]"
          >
            At Pasta Via, we make fresh pasta every morning and let you take the
            lead. Choose your shape, pick your sauce, add your toppings — and
            watch it come together into a bowl that’s entirely yours.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-6 rounded-[200px] border border-white/30 bg-white/12 px-7 py-5 text-[1.1rem] font-bold text-[#2f3a1f] shadow-[-5px_-5px_10px_2px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all md:mt-7 md:px-8 md:text-[1.35rem]"
          >
            VIEW MENU
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
