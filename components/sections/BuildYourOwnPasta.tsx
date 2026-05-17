"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

const steps = [
  {
    number: "1.",
    title: ["Pick", "Your", "Pasta"],
    image: "/images/build-your-own-pasta/pasta.png",
  },
  {
    number: "2.",
    title: ["Pick", "Your", "Sauce"],
    image: "/images/build-your-own-pasta/sauce.png",
  },
  {
    number: "3.",
    title: ["Add", "Your", "Toppings"],
    image: "/images/build-your-own-pasta/Toppings.png",
  },
];

export default function BuildYourOwnPasta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Container>
        {/* ================= HEADING ================= */}
        <div className="max-w-[720px] mx-auto text-center px-4 sm:px-6 lg:hidden">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              heading-font
              text-[#14190b]
              leading-[0.9]
              tracking-[-0.03em]
              text-[3rem]
              sm:text-[4.2rem]
              md:text-[5.5rem]
              xl:text-[7.2rem]
            "
          >
            Build Your
            <br />
            Own Pasta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="
              mt-4
              text-[#2f3a1f]
              text-[1.05rem]
              sm:text-[1.2rem]
              font-semibold
            "
          >
            Customize It Your Way
          </motion.p>
        </div>

        {/* ================= MOBILE + TABLET ================= */}
        <div className="lg:hidden flex flex-col gap-16 mt-14 px-4 sm:px-6">
          {/* STEP 1 */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-6">
            <div className="heading-font italic text-[#31411d] text-[2rem] sm:text-[2.4rem] leading-[1]">
              {steps[0].number} {steps[0].title[0]}
              <br />
              {steps[0].title[1]}
              <br />
              {steps[0].title[2]}
            </div>

            <div className="overflow-hidden rounded-[14px]">
              <Image
                src={steps[0].image}
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-6">
            <div className="overflow-hidden rounded-[14px]">
              <Image
                src={steps[1].image}
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>

            <div className="heading-font italic text-right text-[#31411d] text-[2rem] sm:text-[2.4rem] leading-[1]">
              {steps[1].number} {steps[1].title[0]}
              <br />
              {steps[1].title[1]}
              <br />
              {steps[1].title[2]}
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-6">
            <div className="heading-font italic text-[#31411d] text-[2rem] sm:text-[2.4rem] leading-[1]">
              {steps[2].number} {steps[2].title[0]}
              <br />
              {steps[2].title[1]}
              <br />
              {steps[2].title[2]}
            </div>

            <div className="overflow-hidden rounded-[14px]">
              <Image
                src={steps[2].image}
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= DESKTOP (ORIGINAL DESIGN RESTORED) ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-x-16 gap-y-20 mt-20">
          {/* H1 (TOP LEFT) */}
          <div>
            <div className="max-w-[720px] text-center">
              {" "}
              <h2
                className="
        heading-font
        text-[#14190b]
        leading-[0.88]
        tracking-[-0.03em]
        text-[6rem]
        xl:text-[7.2rem]
      "
              >
                Build Your
                <br />
                Own Pasta
              </h2>
              <p
                className="
        mt-6
        text-[#2f3a1f]
        text-[1.35rem]
        font-semibold
      "
              >
                Customize It Your Way
              </p>
            </div>
          </div>

          {/* STEP 1 (TOP RIGHT) */}
          <div className="grid grid-cols-[auto_1fr] items-start gap-8">
            <div className="heading-font italic text-[#31411d] text-[3.5rem] leading-[0.92]">
              {steps[0].number} {steps[0].title[0]}
              <br />
              {steps[0].title[1]}
              <br />
              {steps[0].title[2]}
            </div>

            <motion.div
              whileHover={{ y: -6, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="overflow-hidden rounded-[10px]"
            >
              <Image
                src={steps[0].image}
                alt=""
                width={700}
                height={700}
                className="w-full object-cover"
              />
            </motion.div>
          </div>

          {/* STEP 3 (BOTTOM LEFT) */}
          <div className="grid grid-cols-[1fr_auto] items-start gap-8">
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="overflow-hidden rounded-[10px]"
            >
              <Image
                src={steps[2].image}
                alt=""
                width={700}
                height={700}
                className="w-full object-cover"
              />
            </motion.div>

            <div className="heading-font text-right italic text-[#31411d] text-[3.5rem] leading-[0.92]">
              {steps[2].number} {steps[2].title[0]}
              <br />
              {steps[2].title[1]}
              <br />
              {steps[2].title[2]}
            </div>
          </div>

          {/* STEP 2 (BOTTOM RIGHT) */}
          <div className="grid grid-cols-[auto_1fr] items-end gap-8">
            <div className="heading-font italic text-[#31411d] text-[3.5rem] leading-[0.92]">
              {steps[1].number} {steps[1].title[0]}
              <br />
              {steps[1].title[1]}
              <br />
              {steps[1].title[2]}
            </div>

            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="overflow-hidden rounded-[10px]"
            >
              <Image
                src={steps[1].image}
                alt=""
                width={700}
                height={700}
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.985 }}
            className="
              rounded-[36px]
              border border-white/20
              bg-[#556b3d]/28
              px-8 py-4
              sm:px-10 sm:py-5
              text-[1rem]
              sm:text-[1.15rem]
              font-bold italic
              text-[#243018]
              backdrop-blur-[18px]
            "
          >
            VIEW COMBOS
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
