"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section className="relative mt-20 md:mt-32 h-[100vh] md:h-[110vh]">
      {/* ================= BG IMAGE ================= */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-no-repeat

          /* MOBILE: avoid weird crop */
          bg-[center_top]

          /* TABLET: shift to show chef */
          md:bg-[60%_center]

          /* DESKTOP (same as before) */
          xl:bg-center
        "
        style={{
          backgroundImage: "url('/images/about-us/kitchen.png')",
        }}
      />

      {/* OVERLAY (slightly lighter for glass visibility) */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/45" />

      {/* ================= CONTENT ================= */}
      <Container className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
    w-[92%]               /* controls equal margin on both sides */
    max-w-[720px]
    mx-auto               /* TRUE horizontal centering */

    bg-[#e7dfcf]/85
    backdrop-blur-[14px]
    border border-white/20

    rounded-[18px]

    px-6 py-8
    sm:px-8 sm:py-10
    md:px-10 md:py-12

    text-center
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  "
        >
          {/* HEADING */}
          <h2 className="leading-[1] text-center">
            <span
              className="
                heading-font
                text-[32px]
                sm:text-[40px]
                md:text-[60px]
                text-[#2f3a1f]
              "
            >
              about{" "}
            </span>

            <span
              className="
                brand-font
                text-[56px]
                sm:text-[72px]
                md:text-[120px]
                text-black
                leading-none
                inline-block
              "
            >
              Pasta Via
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-5 sm:mt-6

              text-[14px]
              sm:text-[15px]
              md:text-[18px]

              text-[#2f3a1f]
              tracking-[0.4px]
              leading-[1.6]
            "
          >
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
