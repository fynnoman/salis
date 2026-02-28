"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";
import Image from "next/image";
import AboutLine from "./AboutLine";

const stats = [
  { icon: Calendar, value: "Seit 2020", label: "Im Einsatz" },
  { icon: Users, value: "Regional", label: "In Pirmasens" },
  { icon: Award, value: "100%", label: "Zuverlässigkeit" },
  { icon: CheckCircle, value: "9+", label: "Dienstleistungen" },
];

export default function About() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  // ref is placed on the section itself so it works on all screen sizes
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 bg-white relative">
      <AboutLine sectionRef={sectionRef} contentRef={contentRef} headingRef={headingRef} textRef={textRef} />
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Logo: hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/B817091D-7DD4-4933-B2A3-C1F9F15867F1.png"
                alt="Salif Gebäudeservice Logo"
                fill
                className="object-contain scale-90"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Über uns
            </span>
            <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Ihr zuverlässiger Partner in{" "}
              <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
                Pirmasens
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Salif Gebäudeservice – Haus und mehr GbR steht für professionelle
              Dienstleistungen rund ums Haus. Von der Gebäudereinigung über den
              Hausmeisterservice bis hin zu Umzügen und Entrümpelungen bieten wir
              Ihnen alles aus einer Hand.
            </p>
            <p ref={textRef} className="text-gray-600 text-lg leading-relaxed mb-8">
              Unser Team arbeitet gründlich, zuverlässig und immer mit dem Ziel,
              unsere Kunden zu 100% zufriedenzustellen. Überzeugen Sie sich selbst
              von unserer Qualität!
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-10">
              {[
                "Professionelle und erfahrene Mitarbeiter",
                "Faire und transparente Preise",
                "Flexible Terminvereinbarung",
                "Persönliche Beratung vor Ort",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 sm:mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center bg-muted rounded-2xl p-6 border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
