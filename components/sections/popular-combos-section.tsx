"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

const combos = [
  {
    name: "The Ahmedabad Classic",
    description: "Spicy arrabbiata + jalapeños + olives",
    image: "/images/popular-combos/The-Ahmedabad-Classic.png",
  },
  {
    name: "Creamy Dreamy Alfredo",
    description: "Fusilli + extra cheese",
    image: "/images/popular-combos/Creamy-Dreamy-Alfredo.png",
  },
  {
    name: "Pesto Paradise",
    description: "Spaghetti + roasted veggies",
    image: "/images/popular-combos/Pesto-Paradise.png",
  },
  {
    name: "Pink Delight",
    description: "Penne + pink sauce + basil",
    image: "/images/popular-combos/Pink-Delight.png",
  },
  {
    name: "Garden Marinara Light",
    description: "Farfalle + marinara + broccoli + mushrooms",
    image: "/images/popular-combos/Garden-Marinara-Light.png",
  },
  {
    name: "Roman Carbonara Bowl",
    description: "Cresti di Galli + carbonara + parmesan + roasted garlic",
    image: "/images/popular-combos/Roman-Carbonara-Bowl.png",
  },
];

export default function PopularCombosSection() {
  return (
    <section className="relative min-h-[110vh]">
      {/* ================= BG ================= */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            sticky top-0 h-screen w-full
            bg-cover
            bg-center
            sm:bg-[center_top]
            md:bg-center
          "
          style={{
            backgroundImage: "url('/images/popular-combos/bg.png')",
          }}
        />

        {/* overlay tuning */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* ================= CONTENT ================= */}
      <Container className="relative z-10 py-20 sm:py-24">
        {/* H1 */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            heading-font
            text-center
            italic
            text-white
            leading-[0.9]
            text-[2.6rem]
            sm:text-[3.5rem]
            md:text-[5rem]
            xl:text-[7rem]
          "
        >
          Popular Combos
        </motion.h2>

        {/* GRID */}
        <div
          className="
            mt-14
            grid
            justify-items-center
            gap-6

            sm:gap-8
            md:gap-10

            lg:grid-cols-2
            xl:grid-cols-3
          "
        >
          {combos.map((combo, i) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
              }}
              className="
                flex
                w-full

                /* MOBILE */
                max-w-[320px]

                /* TABLET */
                sm:max-w-[360px]
                md:max-w-[420px]

                /* DESKTOP (UNCHANGED FEEL) */
                lg:max-w-[520px]

                flex-col
                rounded-[22px]
                border border-white/15
                bg-white/10

                p-4 sm:p-5 md:p-6

                backdrop-blur-[12px]
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  width={370}
                  height={370}
                  className="
                    mx-auto
                    object-contain

                    /* MOBILE */
                    w-[240px]

                    /* TABLET */
                    sm:w-[260px]
                    md:w-[300px]

                    /* DESKTOP */
                    lg:w-[340px]
                  "
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 sm:mt-5">
                <h3
                  className="
                    font-bold
                    text-white
                    leading-[1.1]

                    /* MOBILE */
                    text-[20px]

                    /* TABLET */
                    sm:text-[22px]
                    md:text-[24px]

                    /* DESKTOP */
                    lg:text-[28px]
                  "
                >
                  {combo.name}
                </h3>

                <p
                  className="
                    mt-1.5
                    leading-[1.3]

                    /* MOBILE */
                    text-[14px]
                    text-[#cdd5c0]

                    /* TABLET */
                    sm:text-[15px]

                    /* DESKTOP */
                    lg:text-[17px]
                    text-[#31421f]
                  "
                >
                  {combo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
