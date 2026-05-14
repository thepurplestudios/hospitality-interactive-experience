"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/container";

const features = [
  {
    title: "Fresh Pasta\nMade Daily",
    desc: "Made fresh every morning",
  },
  {
    title: "50+ Build-\nYour-Own\nCombinations",
    desc: "Endless customization options",
  },
  {
    title: "Authentic\nItalian Flavors,\nLocal Prices",
    desc: "True Italian taste, affordable pricing",
  },
];

export default function WhySection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-visible pt-18 pb-28 md:pt-24 md:pb-36">
      {/* left decorative plate */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          -left-25
          -top-65
          z-0
          -rotate-6
          w-105
          md:w-130
          xl:w-155
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
          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              heading-font
              font-semibold
              tracking-[-0.02em]
              text-[#14190b]
              leading-[0.95]
              whitespace-nowrap
              text-[3.3rem]
              sm:text-[4.6rem]
              md:text-[5.6rem]
              xl:text-[6.5rem]
              text-right
              pr-10
              xl:pr-16
            "
          >
            Why Pasta Via?
          </motion.h2>

          {/* interactive plates */}
          <div className="mt-14 flex flex-col items-center gap-10 md:flex-row md:justify-start md:gap-8 xl:gap-12">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                }}
                animate={{
                  scale: active === i ? 1.1 : 0.9,
                  opacity: active === i ? 1 : 0.6,
                }}
                className="relative shrink-0 w-50 md:w-62.5 xl:w-71.25 cursor-pointer"
              >
                {/* plate image */}
                <Image
                  src="/images/why-section/plate.png"
                  alt=""
                  width={285}
                  height={285}
                  className="h-auto w-full"
                />

                {/* gradient overlay */}
                <div
                  className={`
                    absolute inset-0 rounded-full
                    transition-all duration-300
                    ${
                      active === i
                        ? "bg-gradient-to-br from-red-600 to-red-800 opacity-70"
                        : "opacity-0"
                    }
                  `}
                />

                {/* text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <div
                    className="
                      font-serif italic leading-[1.08]
                      text-white
                      text-[18px]
                      md:text-[22px]
                      xl:text-[26px]
                    "
                  >
                    {item.title.split("\n").map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>

                  {/* reveal text */}
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="
                        mt-2
                        text-[12px]
                        md:text-[14px]
                        text-white/90
                      "
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
