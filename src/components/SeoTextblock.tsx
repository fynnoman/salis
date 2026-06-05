"use client";

import { useContent } from "@/hooks/useContent";
import { RevealWords } from "@/components/_design";

export default function SeoTextblock() {
  const { seoBlock, contact } = useContent();

  return (
    <section className="relative bg-bone text-ink border-y border-ink/15">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2 marker-line text-ink/60">
            06 / SEO
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] text-ink break-words mb-8">
              <RevealWords text={seoBlock.title} />
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 text-base sm:text-lg leading-relaxed text-ink/80 max-w-5xl">
              {seoBlock.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <p className="mt-12 font-editorial italic text-xl sm:text-2xl text-ink">
              {seoBlock.ctaText}{" "}
              <a
                href={`tel:${contact.phoneRaw}`}
                className="text-voltage-dim hover:text-voltage underline decoration-voltage decoration-2 underline-offset-4 transition-colors"
              >
                {contact.phone}
              </a>{" "}
              oder per{" "}
              <a
                href={`https://wa.me/49${contact.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-voltage-dim hover:text-voltage underline decoration-voltage decoration-2 underline-offset-4 transition-colors"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
