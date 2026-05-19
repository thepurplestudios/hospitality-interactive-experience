"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { useState } from "react";

const features = [
  { title: "Fresh Pasta\nMade Daily" },
  { title: "50+ Build-\nYour-Own\nCombinations" },
  { title: "Authentic\nItalian Flavors,\nLocal Prices" },
];

export default function WhySection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-visible pt-18 pb-28 md:pt-16 md:pb-28 -mt-28 sm:-mt-22 md:-mt-40 lg:mt-0">
      {/* LEFT BG PLATE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute

          -left-16 md:-left-25

          -top-70 sm:-top-36 md:-top-60 xl:-top-65
          z-0
          -rotate-6

          w-95 sm:w-115 md:w-130 xl:w-155
        "
      >
        <Image
          src="/images/why-section/why-left-bg.png"
          alt=""
          width={620}
          height={620}
          className="h-auto w-full opacity-55 blur-[2px] saturate-75 contrast-85"
        />
      </motion.div>

      <Container className="relative z-20">
        <div className="mr-0 ml-auto max-w-245">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="
              heading-font
              font-semibold
              tracking-[-0.02em]
              text-[#14190b]
              leading-[0.95]
              whitespace-nowrap
              text-right
              pr-6 md:pr-10 xl:pr-16

              text-[2.5rem] sm:text-[3.3rem]   /* 🔥 smaller mobile */
              md:text-[5.6rem]
              xl:text-[6.5rem]
            "
          >
            Why Pasta Via?
          </motion.h2>

          {/* INTERACTIVE PLATES */}
          <div
            className="
              mt-4 md:mt-2 lg:mt-14
              flex flex-col items-center
              gap-6 sm:gap-8 md:gap-6 xl:gap-12   /* 🔥 tighter mobile + tablet */

              md:flex-row
              md:justify-start   /* ✅ original alignment */
            "
          >
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                animate={{
                  scale: active === i ? 1.1 : 0.9,
                  opacity: active === i ? 1 : 0.6,
                }}
                className="
                  relative
                  shrink-0
                  cursor-pointer

                  w-44 sm:w-48        /* mobile */
                  md:w-52             /* 🔥 tablet FIX */
                  xl:w-71.25          /* desktop unchanged */
                "
              >
                <Image
                  src="/images/why-section/plate.png"
                  alt=""
                  width={285}
                  height={285}
                  className="h-auto w-full"
                />

                {/* TEXT */}
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div
                    className="
                      w-[60%]
                      font-serif
                      italic
                      leading-[1.1]
                      text-white

                      text-[15px] sm:text-[17px]
                      md:text-[19px]   /* 🔥 scaled for tablet */
                      xl:text-[26px]
                    "
                  >
                    {item.title.split("\n").map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
