"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useContent } from "@/hooks/useContent";


const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Contact() {
  const { contact } = useContent();

  const contactItems = [
    {
      icon: Phone,
      label: "Telefon / WhatsApp",
      value: contact.phone,
      href: `tel:${contact.phoneRaw}`,
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: contact.address,
      href: null,
    },
    {
      icon: Clock,
      label: "Erreichbarkeit",
      value: contact.hours,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle green grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            {contact.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            {contact.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            {contact.subtitle}
          </p>
        </motion.div>

        {/* Contact cards — 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => {
            const inner = (
              <>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm sm:text-base font-bold text-primary break-all">{value}</div>
                </div>
              </>
            );

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}
              >
                {href ? (
                  <a
                    href={href}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-accent/40 hover:shadow-md transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease, delay: 0.25 }}
          className="flex justify-center"
        >
          <motion.a
            href={`https://wa.me/49${contact.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-white text-lg"
            style={{ backgroundColor: '#22c55e', boxShadow: '0 0 32px rgba(34,197,94,0.25)' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(34,197,94,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            {contact.whatsappText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}