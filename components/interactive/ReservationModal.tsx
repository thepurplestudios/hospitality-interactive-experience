"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock3, Users, Phone, User, Sparkles } from "lucide-react";
import { useUIStore } from "@/store/use-ui-store";

export default function ReservationModal() {
  const { isReservationOpen, closeReservation } = useUIStore();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      closeReservation();
    }, 2200);
  };

  const inputClass =
    "w-full rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 focus:border-black/30 focus:bg-white focus:shadow-lg";

  return (
    <AnimatePresence>
      {isReservationOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
          }}
          className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-[640px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="glass rounded-[36px] border border-white/30 p-6 md:p-8">
            {!submitted ? (
              <>
                <div className="mb-8 text-center">
                  <h2 className="heading-font text-4xl text-black md:text-5xl">
                    Reserve Your Table
                  </h2>

                  <p className="mt-2 text-sm text-black/60">
                    A beautiful dining experience awaits.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  <Field icon={User}>
                    <input
                      required
                      placeholder="Your Name"
                      className={inputClass}
                    />
                  </Field>

                  <Field icon={Phone}>
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className={inputClass}
                    />
                  </Field>

                  <Field icon={Calendar}>
                    <input required type="date" className={inputClass} />
                  </Field>

                  <Field icon={Clock3}>
                    <input required type="time" className={inputClass} />
                  </Field>

                  <Field icon={Users}>
                    <input
                      required
                      type="number"
                      min={1}
                      max={20}
                      placeholder="Guests"
                      className={inputClass}
                    />
                  </Field>

                  <Field icon={Sparkles}>
                    <select required className={inputClass}>
                      <option value="">Occasion</option>
                      <option>Casual Dinner</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Business Meal</option>
                    </select>
                  </Field>

                  <div className="md:col-span-2">
                    <textarea
                      rows={3}
                      placeholder="Special request (optional)"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    className="md:col-span-2 mt-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white"
                  >
                    Reserve Table
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="py-14 text-center"
              >
                <div className="mb-4 text-5xl">✓</div>

                <h3 className="heading-font text-3xl text-black">
                  Your table is reserved
                </h3>

                <p className="mt-2 text-black/60">
                  We&apos;ll contact you shortly.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-black/40">
        <Icon size={18} />
      </div>

      <div className="[&_input]:pl-12 [&_select]:pl-12">{children}</div>
    </div>
  );
}
