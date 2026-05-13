"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#e7dfcf] px-6 py-16">
      <div className="mx-auto max-w-[1200px] grid gap-12 md:grid-cols-3">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="brand-font text-[42px] text-[#14190b]">Pasta Via</h2>

          <p className="mt-2 text-[#2f3a1f] text-[15px]">
            Fresh pasta. Built your way.
          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2 text-[#14190b]"
        >
          <h3 className="font-semibold text-[16px] mb-2">Explore</h3>

          <a href="#" className="hover:opacity-60">
            Home
          </a>
          <a href="#" className="hover:opacity-60">
            Menu
          </a>
          <a href="#" className="hover:opacity-60">
            About
          </a>
          <a href="#" className="hover:opacity-60">
            Find Us
          </a>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#2f3a1f]"
        >
          <h3 className="font-semibold text-[16px] mb-2 text-[#14190b]">
            Visit
          </h3>

          <p>Vastrapur, Ahmedabad</p>
          <p className="mt-1">Open 11 AM – 11 PM</p>

          <p className="mt-4 text-sm opacity-70">
            © {new Date().getFullYear()} Pasta Via
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
