"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/container";

const steps = [
  {
    number: "1.",
    title: "Pick\nYour\nPasta",
    image: "/images/build-your-own-pasta/pasta.png",
    className: "justify-self-end",
  },
  {
    number: "2.",
    title: "Pick\nYour\nSauce",
    image: "/images/build-your-own-pasta/sauce.png",
    className: "mt-16",
  },
  {
    number: "3.",
    title: "Add\nYour\nToppings",
    image: "/images/build-your-own-pasta/Toppings.png",
    className: "mt-12",
  },
];

export default function BuildYourOwnPasta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Container>
        {/* main asymmetrical grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-18">
          {/* LEFT SIDE */}
          <div className="grid gap-16">
            {/* heading block */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  heading-font
                  text-[#14190b]
                  leading-[0.88]
                  tracking-[-0.03em]
                  text-[4rem]
                  sm:text-[5rem]
                  md:text-[6rem]
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
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                }}
                className="
  mt-7
  w-fit
  mx-auto
  text-center
  text-[#2f3a1f]
  text-[1.35rem]
  font-semibold
"
              >
                Customize It Your Way
              </motion.p>
            </div>

            {/* step 3 */}
            <div className="grid grid-cols-[1fr_auto] items-start gap-8">
              <motion.div
                whileHover={{
                  y: -6,
                  rotate: -1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="overflow-hidden rounded-[10px]"
              >
                <Image
                  src={steps[2].image}
                  alt="Toppings"
                  width={700}
                  height={700}
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />
              </motion.div>

              <div
                className="
                  heading-font
                  pt-2
                  text-right
                  leading-[0.92]
                  text-[#31411d]
                  text-[2.8rem]
                  italic
                  md:text-[3.5rem]
                "
              >
                {steps[2].number} {steps[2].title.split("\n")[0]}
                <br />
                {steps[2].title.split("\n")[1]}
                <br />
                {steps[2].title.split("\n")[2]}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-18">
            {/* step 1 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-8">
              <div
                className="
                  heading-font
                  pt-2
                  leading-[0.92]
                  text-[#31411d]
                  text-[2.8rem]
                  italic
                  md:text-[3.5rem]
                "
              >
                {steps[0].number} {steps[0].title.split("\n")[0]}
                <br />
                {steps[0].title.split("\n")[1]}
                <br />
                {steps[0].title.split("\n")[2]}
              </div>

              <motion.div
                whileHover={{
                  y: -6,
                  rotate: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="overflow-hidden rounded-[10px]"
              >
                <Image
                  src={steps[0].image}
                  alt="Pasta types"
                  width={700}
                  height={700}
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />
              </motion.div>
            </div>

            {/* step 2 */}
            <div className="grid grid-cols-[auto_1fr] items-end gap-8">
              <div
                className="
                  heading-font
                  pb-2
                  leading-[0.92]
                  text-[#31411d]
                  text-[2.8rem]
                  italic
                  md:text-[3.5rem]
                "
              >
                {steps[1].number} {steps[1].title.split("\n")[0]}
                <br />
                {steps[1].title.split("\n")[1]}
                <br />
                {steps[1].title.split("\n")[2]}
              </div>

              <motion.div
                whileHover={{
                  y: -6,
                  rotate: -1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="overflow-hidden rounded-[10px]"
              >
                <Image
                  src={steps[1].image}
                  alt="Sauces"
                  width={700}
                  height={700}
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.025,
              y: -1,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="
    rounded-[36px]
    border border-white/20
    bg-[#556b3d]/28
    px-12
    py-5
    text-[1.2rem]
    font-bold
    italic
    text-[#243018]
    backdrop-blur-[18px]
    shadow-[
      inset_0_1px_1px_rgba(255,255,255,0.22),
      0_10px_28px_rgba(85,107,61,0.18)
    ]
    transition-all
    duration-150
    ease-out
  "
          >
            VIEW COMBOS
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
