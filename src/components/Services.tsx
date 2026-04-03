"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Wrench } from "lucide-react";
import Image from "next/image";
import { useScrollLineY } from "./ScrollLineContext";
import { useContent } from "@/hooks/useContent";

function ServiceItem({ label, index }: { label: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const lineY = useScrollLineY();
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (!lineY) return;
    // Check initial value
    const check = (y: number) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      setActive(y >= absTop);
    };
    check(lineY.get());
    const unsub = lineY.on("change", check);
    return unsub;
  }, [lineY]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.05 }}
      className="flex items-center gap-5 group border-b border-gray-100 pb-8 last:border-0 last:pb-0"
    >
      <CheckCircle2
        className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${
          active || isMobile ? "text-accent" : "text-gray-300"
        }`}
      />
      <span
        className={`text-lg sm:text-xl font-medium transition-all duration-300 ${
          active || isMobile
            ? "text-gray-900 font-semibold"
            : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </motion.li>
  );
}

export default function Services() {
  const { services } = useContent();
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src={services.backgroundImage}
        alt="Hintergrund Reinigungsservice Pirmasens"
        fill
        className="object-cover object-center"
        loading="lazy"
        sizes="100vw"
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            {services.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-14 leading-tight">
            {services.title}
          </h2>

          <ul className="space-y-8">
            {services.items.map((service, i) => (
              <ServiceItem key={service} label={service} index={i} />
            ))}
          </ul>

          {/* Küchenmontage Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="mt-12 rounded-2xl border border-accent/30 bg-white/80 backdrop-blur-sm p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-primary mb-2">
                  {services.highlightTitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {services.highlightText}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

