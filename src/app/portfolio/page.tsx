"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
	{
		id: 1,
		title: "Bürogebäude Pirmasens",
		category: "Firmenreinigung",
		description:
			"Regelmäßige Unterhaltsreinigung eines 3-stöckigen Bürokomplexes – wöchentlich, zuverlässig, professionell. Sämtliche Gemeinschaftsflächen, Sanitäranlagen und Büros werden nach festem Reinigungsplan gepflegt.",
		tag: "Gewerbe",
		color: "#1a3a5c",
		accent: "#39ff14",
		image: "/370F32F7-69E4-413A-9D3B-939899D891CC_1_105_c.jpeg",
	},
	{
		id: 2,
		title: "Mehrfamilienhaus Zweibrücken",
		category: "Treppenhausreinigung",
		description:
			"Monatliche Reinigung aller Treppenhäuser und Gemeinschaftsflächen für einen privaten Vermieter. Zuverlässig, termingerecht und immer zum vereinbarten Festpreis.",
		tag: "Privat",
		color: "#0f2440",
		accent: "#22c55e",
		image: "/3925AABC-805D-4FCB-8E98-64ECDEF2F69C_1_105_c.jpeg",
	},
	{
		id: 3,
		title: "Entrümpelung Kaiserslautern",
		category: "Umzüge & Entrümpelung",
		description:
			"Komplette Wohnungsauflösung inklusive Entsorgung und besenreiner Übergabe innerhalb von 2 Tagen. Alles aus einer Hand – von der Abholung bis zur fachgerechten Entsorgung.",
		tag: "Entrümpelung",
		color: "#1a3a5c",
		accent: "#39ff14",
		image: "/WhatsApp Image 2026-03-02 at 00.20.02.jpeg",
	},
	{
		id: 4,
		title: "Glasfassade Stadtmitte",
		category: "Glas- & Fensterreinigung",
		description:
			"Außenreinigung einer vollverglasten Ladenfront – mit Profi-Ausrüstung streifenfrei gereinigt. Auch Hochglanz-Schaufenster und schwer zugängliche Glasflächen kein Problem.",
		tag: "Gewerbe",
		color: "#0f2440",
		accent: "#22c55e",
		image: "/A93B4617-3647-48A1-AF9F-7CEF7F7B16E9_1_105_c.jpeg",
	},
	{
		id: 5,
		title: "Hausmeisterservice Pirmasens",
		category: "Hausmeisterservice",
		description:
			"Dauerhafter Hausmeistervertrag: Kleinreparaturen, Grünpflege, Winterdienst und Mülltonnen-Service. Ein Ansprechpartner für alle Belange rund ums Gebäude.",
		tag: "Dauerpflege",
		color: "#1a3a5c",
		accent: "#39ff14",
		image: "/WhatsApp Image 2026-03-02 at 00.24.19.jpeg",
	},
	{
		id: 6,
		title: "Kiosk & Lotto Landau",
		category: "Unterhaltsreinigung",
		description:
			"Regelmäßige Unterhaltsreinigung eines Kiosk- und Lotto-Geschäfts in Landau – sauber, ordentlich und zuverlässig vor Ladenöffnung. Verkaufsfläche, Theke und Sanitärbereich stets in Top-Zustand.",
		tag: "Gewerbe",
		color: "#0f2440",
		accent: "#22c55e",
		image: "/A8A333ED-F584-4282-A8F0-85C259B2E50F_1_105_c.jpeg",
	},
];

function ProjectCard({
	project,
	index,
}: {
	project: typeof projects[0];
	index: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.55, delay: index * 0.07 }}
			className="relative rounded-3xl overflow-hidden flex flex-col"
			style={{ backgroundColor: project.color }}
		>
			{/* Photo */}
			<div className="relative w-full h-60 flex-shrink-0 overflow-hidden">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover transition-transform duration-700 hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
				<div className="absolute top-4 left-4 z-10">
					<span
						className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm"
						style={{
							backgroundColor: project.accent + "33",
							color: project.accent,
							border: `1px solid ${project.accent}55`,
						}}
					>
						{project.tag}
					</span>
				</div>
			</div>

			{/* Content */}
			<div className="relative flex flex-col flex-1 p-6 sm:p-7">
				{/* Grid bg */}
				<div
					className="absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
						backgroundSize: "32px 32px",
					}}
				/>
				{/* Glow */}
				<div
					className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
					style={{ backgroundColor: project.accent }}
				/>

				<div className="relative z-10 space-y-2">
					<div
						className="text-xs font-semibold tracking-widest uppercase"
						style={{ color: project.accent }}
					>
						{project.category}
					</div>
					<h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
						{project.title}
					</h2>
					<p className="text-white/55 text-sm leading-relaxed">
						{project.description}
					</p>
				</div>

				<div
					className="relative z-10 h-0.5 w-[40%] rounded-full mt-6"
					style={{ backgroundColor: project.accent }}
				/>
			</div>
		</motion.div>
	);
}

export default function PortfolioPage() {
	const heroRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true });

	return (
		<main className="min-h-screen bg-[#0a0a0a]">
			{/* Hero */}
			<section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
				{/* Neon glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
					style={{ backgroundColor: "#39ff14" }}
				/>
				{/* Subtle grid */}
				<div
					className="absolute inset-0 pointer-events-none opacity-[0.03]"
					style={{
						backgroundImage: `linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)`,
						backgroundSize: "48px 48px",
					}}
				/>

				<div className="relative z-10 max-w-5xl mx-auto">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Zurück zur Startseite
					</Link>

					<motion.div
						ref={heroRef}
						initial={{ opacity: 0, y: 30 }}
						animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.65 }}
					>
						<span
							className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
							style={{ color: "#39ff14" }}
						>
							Referenzen
						</span>
						<h1 className="text-4xl sm:text-6xl font-bold text-white mb-5 leading-tight">
							Unsere{" "}
							<span className="relative inline-block">
								Projekte
								<motion.span
									className="absolute -bottom-1 left-0 h-1 rounded-full"
									style={{ backgroundColor: "#39ff14" }}
									initial={{ width: 0 }}
									animate={isHeroInView ? { width: "100%" } : {}}
									transition={{ duration: 0.8, delay: 0.5 }}
								/>
							</span>
						</h1>
						<p className="text-white/50 text-lg sm:text-xl max-w-2xl leading-relaxed">
							Echte Projekte, echte Ergebnisse – ein Auszug unserer Arbeiten in
							Pirmasens und der Region Südwestpfalz.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Project Grid */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, i) => (
						<ProjectCard key={project.id} project={project} index={i} />
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
				<div
					className="absolute inset-0 pointer-events-none opacity-[0.03]"
					style={{
						backgroundImage: `linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)`,
						backgroundSize: "48px 48px",
					}}
				/>
				<div
					className="absolute inset-0 opacity-[0.05] blur-[100px] pointer-events-none"
					style={{
						background: "radial-gradient(ellipse at center, #39ff14 0%, transparent 70%)",
					}}
				/>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="relative z-10 max-w-2xl mx-auto text-center"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Ihr Projekt als{" "}
						<span style={{ color: "#39ff14" }}>nächstes?</span>
					</h2>
					<p className="text-white/50 text-lg mb-10 leading-relaxed">
						Wir freuen uns auf Ihre Anfrage – kostenlos, unverbindlich und
						persönlich.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<motion.a
							href="https://wa.me/4915229043159"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black text-sm w-full sm:w-auto justify-center"
							style={{
								backgroundColor: "#39ff14",
								boxShadow: "0 0 28px #39ff1444",
							}}
							whileHover={{ scale: 1.05, boxShadow: "0 0 44px #39ff1466" }}
							whileTap={{ scale: 0.97 }}
						>
							<MessageCircle className="w-4 h-4" />
							WhatsApp – direkt schreiben
						</motion.a>
						<motion.a
							href="tel:015229043159"
							className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm border border-white/20 hover:border-white/50 w-full sm:w-auto justify-center transition-colors"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							01522 904 3159
						</motion.a>
					</div>
				</motion.div>
			</section>

			<Footer />
		</main>
	);
}
