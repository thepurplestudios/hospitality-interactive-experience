"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section className="relative mt-24 md:mt-32 h-[110vh]">
      {/* BG IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/about-us/kitchen.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <Container className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            max-w-[720px]
            rounded-[20px]
            bg-[#e7dfcf]
            px-10
            py-10
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* HEADING */}
          <h2
            className="
              heading-font
              text-[3rem]
              md:text-[3.8rem]
              leading-[1]
              text-[#14190b]
            "
          >
            <span className="font-light">about </span>
            <span className="italic">Pasta Via</span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-[1rem] leading-relaxed text-[#2c3420]">
            Pasta Via began as a family tradition — long before it became a
            place. What started around a kitchen table grew into a shared
            belief: pasta should be honest, comforting, and made with intention.
            <br />
            <br />
            Inspired by classic Italian recipes and shaped by Ahmedabad’s
            evolving food culture, Pasta Via blends old-world technique with
            modern tastes. No shortcuts. No unnecessary fuss.
            <br />
            <br />
            Here, every bowl tells a story — built your way, using fresh
            ingredients, bold sauces, and combinations that feel personal.
            <br />
            Because good pasta isn’t just eaten. It’s experienced.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
