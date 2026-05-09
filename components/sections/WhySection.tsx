"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

const features = [
  "Fresh Pasta\nMade Daily",
  "50+ Build-\nYour-Own\nCombinations",
  "Authentic\nItalian Flavors,\nLocal Prices",
];

export default function WhySection() {
  return (
    <section className="relative overflow-visible pt-18 pb-28 md:pt-24 md:pb-36">
      {/* left decorative overlap plate */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          left-[-100px]
          top-[-260px]
          z-0
          rotate-[-6deg]
          w-[420px]
          md:w-[520px]
          xl:w-[620px]
        "
      >
        <Image
          src="/images/why-section/why-left-bg.png"
          alt=""
          width={620}
          height={620}
          className="
            h-auto
            w-full
            select-none
            opacity-55
            blur-[2px]
            saturate-75
            contrast-85
          "
        />
      </motion.div>

      <Container className="relative z-20">
        {/* content block */}
        <div className="mr-0 ml-auto max-w-[980px]">
          {" "}
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
          {/* red plates */}
          <div className="mt-14 flex flex-col items-center gap-10 md:flex-row md:justify-start md:gap-8 xl:gap-12">
            {features.map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: i === 1 ? 0 : i % 2 === 0 ? -2 : 2,
                }}
                className="relative shrink-0 w-[200px] md:w-[250px] xl:w-[285px]"
              >
                <Image
                  src="/images/why-section/plate.png"
                  alt=""
                  width={285}
                  height={285}
                  className="h-auto w-full"
                />

                <div className="absolute inset-0 grid place-items-center text-center">
                  <div
                    className="
                      w-[58%]
                      font-serif
                      italic
                      leading-[1.08]
                      text-white
                      text-[18px]
                      md:text-[22px]
                      xl:text-[26px]
                    "
                  >
                    {text.split("\n").map((line) => (
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
