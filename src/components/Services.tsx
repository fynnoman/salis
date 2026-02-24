"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useScrollLineY } from "./ScrollLineContext";

const services = [
  "Glas- & Fensterreinigung",
  "Gebäudereinigung",
  "Hausmeisterservice",
  "Treppenhausreinigung",
  "Dachrinnenreinigung",
  "Firmenreinigung",
  "Hausreinigung",
  "Kleintransporte",
  "Umzüge & Entrümpelung",
];

function ServiceItem({ label, index }: { label: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/9ABD4A74-BF19-4D7A-9ADE-51AC3DDCBBD1.png"
        alt=""
        fill
        className="object-cover object-center"
        priority={false}
        sizes="100vw"
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Was wir bieten
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-14 leading-tight">
            Unsere Leistungen
          </h2>

          <ul className="space-y-8">
            {services.map((service, i) => (
              <ServiceItem key={service} label={service} index={i} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

