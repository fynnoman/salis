"use client";

import { useContent } from "@/hooks/useContent";

export default function SeoTextblock() {
  const { seoBlock, contact } = useContent();

  return (
    <section className="bg-white py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-6 text-center">
          {seoBlock.title}
        </h2>
        <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
          {seoBlock.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <p className="text-center font-semibold text-[#1a3a5c]">
            {seoBlock.ctaText}{" "}
            <a
              href={`tel:${contact.phoneRaw}`}
              className="text-[#22c55e] hover:underline"
            >
              {contact.phone}
            </a>{" "}
            oder per{" "}
            <a
              href={`https://wa.me/49${contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22c55e] hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
