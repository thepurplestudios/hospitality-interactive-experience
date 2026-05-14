"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [rating, setRating] = useState(0);

  return (
    <footer className="bg-[#e7dfcf] px-6 py-20">
      <div className="mx-auto max-w-[1200px] grid gap-16 md:grid-cols-4">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="brand-font text-[44px] text-[#14190b]">Pasta Via</h2>

          <p className="mt-3 text-[#2f3a1f] text-[15px] leading-[1.5]">
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
          <h3 className="font-semibold text-[16px] mb-3">Explore</h3>

          {["Home", "Menu", "About", "Find Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:translate-x-1 hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#2f3a1f]"
        >
          <h3 className="font-semibold text-[16px] mb-3 text-[#14190b]">
            Visit
          </h3>

          <p>Vastrapur, Ahmedabad</p>
          <p className="mt-1">Open 11 AM – 11 PM</p>
        </motion.div>

        {/* FEEDBACK FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            rounded-[20px]
            border border-white/20
            bg-white/10
            p-4
            backdrop-blur-md
          "
        >
          <h3 className="font-semibold text-[16px] mb-3 text-[#14190b]">
            Send Love 💛
          </h3>

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="
              w-full
              mb-2
              rounded-md
              border border-white/20
              bg-white/40
              px-3 py-2
              text-sm
              outline-none
            "
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            rows={2}
            className="
              w-full
              mb-3
              rounded-md
              border border-white/20
              bg-white/40
              px-3 py-2
              text-sm
              outline-none
              resize-none
            "
          />

          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            className="
              w-full
              rounded-full
              border border-white/30
              bg-[#556b3d]/25
              px-4 py-2
              text-sm
              font-semibold
              text-[#243018]
              backdrop-blur-md
              transition-all
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            Send Love
          </button>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-[#2f3a1f]/70">
        © {new Date().getFullYear()} Pasta Via. All rights reserved.
      </div>
    </footer>
  );
}
