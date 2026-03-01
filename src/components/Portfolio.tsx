'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Bürogebäude Pirmasens',
    category: 'Firmenreinigung',
    description: 'Regelmäßige Unterhaltsreinigung eines 3-stöckigen Bürokomplexes – wöchentlich, zuverlässig, professionell.',
    tag: 'Gewerbe',
    color: '#1a3a5c',
    accent: '#39ff14',
    year: '2024',
    image: '/370F32F7-69E4-413A-9D3B-939899D891CC_1_105_c.jpeg',
  },
  {
    id: 2,
    title: 'Mehrfamilienhaus Zweibrücken',
    category: 'Treppenhausreinigung',
    description: 'Monatliche Reinigung aller Treppenhäuser und Gemeinschaftsflächen für einen privaten Vermieter.',
    tag: 'Privat',
    color: '#0f2440',
    accent: '#22c55e',
    year: '2023',
    image: '/3925AABC-805D-4FCB-8E98-64ECDEF2F69C_1_105_c.jpeg',
  },
  {
    id: 3,
    title: 'Entrümpelung Kaiserslautern',
    category: 'Umzüge & Entrümpelung',
    description: 'Komplette Wohnungsauflösung inklusive Entsorgung und besenreiner Übergabe innerhalb von 2 Tagen.',
    tag: 'Entrümpelung',
    color: '#1a3a5c',
    accent: '#39ff14',
    year: '2024',
    image: '/WhatsApp Image 2026-03-02 at 00.20.02.jpeg',
  },
  {
    id: 4,
    title: 'Glasfassade Stadtmitte',
    category: 'Glas- & Fensterreinigung',
    description: 'Außenreinigung einer vollverglasten Ladenfront – mit Profi-Ausrüstung streifenfrei gereinigt.',
    tag: 'Gewerbe',
    color: '#0f2440',
    accent: '#22c55e',
    year: '2023',
    image: '/A93B4617-3647-48A1-AF9F-7CEF7F7B16E9_1_105_c.jpeg',
  },
  {
    id: 5,
    title: 'Hausmeisterservice Pirmasens',
    category: 'Hausmeisterservice',
    description: 'Dauerhafter Hausmeistervertrag: Kleinreparaturen, Grünpflege, Winterdienst und Mülltonnen-Service.',
    tag: 'Dauerpflege',
    color: '#1a3a5c',
    accent: '#39ff14',
    year: '2022',
    image: '/WhatsApp Image 2026-03-02 at 00.24.19.jpeg',
  },
];

// Card width + gap in px (must match CSS below)
const CARD_W = 400;
const CARD_GAP = 24;

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className="relative flex-shrink-0 rounded-3xl overflow-hidden flex flex-col"
      style={{ backgroundColor: project.color, width: CARD_W, height: 520 }}
    >
      {/* Photo — top half */}
      <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="400px"
        />
        {/* Gradient overlay so tag is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        {/* Tag + year on top of photo */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: project.accent + '33', color: project.accent, border: `1px solid ${project.accent}55` }}
          >
            {project.tag}
          </span>
          <span className="text-white/60 text-sm font-mono bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{project.year}</span>
        </div>
      </div>

      {/* Content — bottom */}
      <div className="relative flex flex-col justify-between flex-1 p-6">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow blob */}
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: project.accent }}
        />

        <div className="relative z-10 space-y-2">
          <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="relative z-10 h-0.5 w-[40%] rounded-full mt-4" style={{ backgroundColor: project.accent }} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const totalCards = projects.length;
  const trackWidth = totalCards * CARD_W + (totalCards - 1) * CARD_GAP;
  // Extra scroll room: 150vh gives smooth travel to reach the last card
  const stickyHeight = `calc(${trackWidth}px + 150vh)`;

  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : containerRef,
    offset: ['start start', 'end end'],
  });

  // How far we need to translate: full track width minus one viewport width, plus padding offset
  const [viewportW, setViewportW] = useState(1440);
  useEffect(() => {
    const update = () => setViewportW(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(trackWidth - viewportW + 64)]
  );

  // ── MOBILE / TABLET ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section id="portfolio" className="relative bg-[#0a0a0a] py-16 px-4">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-5 blur-[100px] pointer-events-none"
          style={{ backgroundColor: '#39ff14' }}
        />
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#39ff14' }}>
              Referenzen
            </span>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Unsere{' '}
              <span className="relative inline-block">
                Projekte
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 rounded-full"
                  style={{ backgroundColor: '#39ff14' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.06 }}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative w-full h-52 flex-shrink-0">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: project.accent + '33', color: project.accent, border: `1px solid ${project.accent}55` }}>{project.tag}</span>
                </div>
              </div>
              <div className="relative p-5">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: project.accent }} />
                <div className="relative z-10 space-y-1.5">
                  <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>{project.category}</div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="relative z-10 h-0.5 w-[40%] rounded-full mt-4" style={{ backgroundColor: project.accent }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mt-10"
        >
          <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold text-black text-sm" style={{ backgroundColor: '#39ff14', boxShadow: '0 0 24px #39ff1444' }}>
            Jetzt Anfrage stellen →
          </a>
          <a href="/portfolio" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold text-sm border" style={{ color: '#39ff14', borderColor: '#39ff1466', backgroundColor: '#39ff1411' }}>
            Alle Projekte ansehen
          </a>
        </motion.div>
      </section>
    );
  }

  // ── DESKTOP: sticky horizontal scroll ────────────────────────────────────────
  return (
    <div ref={containerRef} id="portfolio" style={{ height: stickyHeight }} className="relative bg-[#0a0a0a]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
          style={{ backgroundColor: '#39ff14' }}
        />

        {/* Header */}
        <div ref={headingRef} className="px-8 sm:px-16 mb-12 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#39ff14' }}>
              Referenzen
            </span>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Unsere{' '}
                <span className="relative inline-block">
                  Projekte
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 rounded-full"
                    style={{ backgroundColor: '#39ff14' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                  />
                </span>
              </h2>
              <p className="text-white/40 text-sm hidden sm:block max-w-xs text-right">
                Echte Projekte, echte Ergebnisse – ein Auszug unserer Arbeiten
              </p>
            </div>
          </motion.div>
        </div>

        {/* Horizontally moving track */}
        <motion.div
          style={{ x, willChange: 'transform' }}
          className="flex gap-6 px-8 sm:px-16 flex-shrink-0"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase"
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            →
          </motion.div>
          Scrollen
        </motion.div>
      </div>

      {/* CTA below sticky — rendered after the scroll ends */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-center justify-center gap-4 bg-[#0a0a0a]">
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-black text-sm"
          style={{ backgroundColor: '#39ff14', boxShadow: '0 0 24px #39ff1444' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px #39ff1466' }}
          whileTap={{ scale: 0.97 }}
        >
          Jetzt Anfrage stellen →
        </motion.a>
        <motion.a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border hover:opacity-80 transition-opacity"
          style={{ color: '#39ff14', borderColor: '#39ff1466', backgroundColor: '#39ff1411' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Alle Projekte ansehen
        </motion.a>
      </div>
    </div>
  );
}
