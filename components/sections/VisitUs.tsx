"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function VisitUsSection() {
  return (
    <section className="py-28">
      <Container className="flex flex-col items-center gap-16 md:flex-row md:justify-between">
        {/* LEFT CONTENT */}
        <div className="max-w-[520px] text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="heading-font italic text-[3rem] md:text-[4.5rem] text-[#1c2512]"
          >
            Visit Us at
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[1.4rem] italic text-[#2f3a1f]"
          >
            Vastrapur, Ahmedabad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-[1.3rem] text-[#2f3a1f]"
          >
            Open 11 AM – 11 PM
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-8
              rounded-full
              border border-white/20
              bg-[#556b3d]/25
              px-8 py-4
              text-[1rem]
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
            rounded-[24px]
            border border-white/20
            bg-white/10
            p-3
            backdrop-blur-[10px]
            shadow-lg
          "
        >
          <Image
            src="/images/visit-us/map.png"
            alt="Location map"
            width={500}
            height={350}
            className="rounded-[18px]"
          />
        </motion.div>
      </Container>
    </section>
  );
}
