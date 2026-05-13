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
    <section className="relative min-h-[220vh]">
      {/* BG STAGE (ONLY THIS IS STICKY) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/images/popular-combos/bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT (NORMAL SCROLL) */}
      <Container className="relative z-10 py-24">
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
            text-[4rem]
            sm:text-[5rem]
            md:text-[6rem]
            xl:text-[7rem]
          "
        >
          Popular Combos
        </motion.h2>

        {/* GRID */}
        <div className="mt-20 grid justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
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
                max-w-[600px]
                flex-col
                rounded-[26px]
                border border-white/18
                bg-white/10
                p-[20px]
                backdrop-blur-[14px]
              "
            >
              <div className="overflow-hidden rounded-[18px]">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  width={370}
                  height={370}
                  className="mx-auto w-[370px] h-auto object-contain"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-[28px] font-bold text-white leading-[1]">
                  {combo.name}
                </h3>

                <p className="mt-2 text-[18px] text-[#31421f] leading-[1.2]">
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
