"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { useState } from "react";

export default function FooterWithFeedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="relative mt-20 md:mt-28 py-24 md:py-32 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-center bg-no-repeat

          bg-[url('/images/footer/mobile.png')]
          bg-cover

          md:bg-[url('/images/footer/tablet.png')]
          md:bg-cover

          lg:bg-[url('/images/footer/desktop.png')]
          lg:bg-cover
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <Container className="relative z-10">
        <div
          className="
            flex flex-col gap-12

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-20
          "
        >
          {/* ================= LEFT ================= */}
          <div
            className="
    text-center
    items-center
    flex flex-col

    lg:text-left
    lg:items-start
    lg:block

    text-white
    lg:max-w-[420px]
  "
          >
            {" "}
            <h3 className="brand-font text-[2.4rem]">Pasta Via</h3>
            <p className="mt-3 text-white/80">Fresh pasta. Built your way.</p>
            <div className="mt-6 flex flex-col gap-2 text-white/80 text-sm">
              <span>Menu</span>
              <span>About</span>
              <span>Visit Us</span>
              <span>Contact</span>
            </div>
            {/* CREDIT */}
            <div className="mt-8">
              <p className="text-[0.75rem] text-white/60">
                Design & Developed by
              </p>

              <a
                href="https://www.instagram.com/_thepurplestudios/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] mt-1 inline-block"
                style={{
                  fontFamily: "Amsterdam",
                  transform: "rotate(2deg)",
                }}
              >
                the purple studios .
              </a>

              <p className="mt-2 text-[0.75rem] text-white/60">
                © {new Date().getFullYear()} Pasta Via. All rights reserved.
              </p>
            </div>
          </div>

          {/* ================= RIGHT (FEEDBACK) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              w-full max-w-[520px]
              mx-auto lg:mx-0

              rounded-[24px]
              border border-white/20

              bg-white/12
              backdrop-blur-[18px]

              p-6 md:p-8

              shadow-[0_10px_40px_rgba(0,0,0,0.2)]
            "
          >
            <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-white text-center">
              Send Your Love
            </h2>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your email"
              className="
                mt-6 w-full
                rounded-[14px]
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-white/60
                outline-none
                focus:ring-2 focus:ring-white/40
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your message"
              rows={4}
              className="
                mt-4 w-full
                rounded-[14px]
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-white/60
                outline-none resize-none
                focus:ring-2 focus:ring-white/40
              "
            />

            {/* STARS */}
            <div className="mt-5 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`text-2xl transition ${
                    star <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-white/40"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              className="
                mt-6 w-full
                rounded-[30px]
                border border-white/20
                bg-white/15
                py-3
                text-white font-semibold
                backdrop-blur-[12px]
                hover:scale-[1.02]
                transition
              "
            >
              Send Love
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
