"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function VisitUsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container
        className="
          flex flex-col items-center

          /* MOBILE spacing fix */
          gap-12 px-5

          /* TABLET */
          md:flex-row md:items-center md:justify-between md:gap-10 md:px-6

          /* DESKTOP (unchanged feel) */
          lg:gap-16
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            max-w-[520px]

            /* center on mobile */
            text-center

            /* left align from tablet */
            md:text-left
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              heading-font italic
              text-[2.4rem]
              sm:text-[2.8rem]
              md:text-[3.5rem]
              lg:text-[4.5rem]
              text-[#1c2512]
              leading-[1.1]
            "
          >
            Visit Us at
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-3
              text-[1.2rem]
              sm:text-[1.3rem]
              md:text-[1.35rem]
              italic
              text-[#2f3a1f]
            "
          >
            Vastrapur, Ahmedabad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-2
              text-[1.1rem]
              sm:text-[1.2rem]
              md:text-[1.25rem]
              text-[#2f3a1f]
            "
          >
            Open 11 AM – 11 PM
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-6 md:mt-8

              rounded-full
              border border-white/20
              bg-[#556b3d]/25

              px-7 py-3.5
              sm:px-8 sm:py-4

              text-[0.95rem]
              sm:text-[1rem]

              font-semibold
              text-[#243018]
              backdrop-blur-[12px]
              transition-all
            "
          >
            Get Directions
          </motion.button>
        </div>

        {/* RIGHT MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.03,
            y: -4,
          }}
          className="
            w-full

            /* MOBILE */
            max-w-[340px]

            /* TABLET */
            sm:max-w-[420px]

            /* DESKTOP */
            md:max-w-[480px]
            lg:max-w-[520px]

            rounded-[22px]
            border border-white/20
            bg-white/10
            p-2.5 md:p-3
            backdrop-blur-[10px]
            shadow-lg
          "
        >
          <Image
            src="/images/visit-us/map.png"
            alt="Location map"
            width={500}
            height={350}
            className="w-full h-auto rounded-[16px]"
          />
        </motion.div>
      </Container>
    </section>
  );
}
