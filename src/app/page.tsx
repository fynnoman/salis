import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import { ScrollLineProvider } from "@/components/ScrollLineContext";

export default function Home() {
  return (
    <ScrollLineProvider>
      <main id="main-content">
        <Hero />
        <Navbar />
        <Services />
        <About />
        <Portfolio />
        <BeforeAfter />
        {/* SEO-Textblock: Reinigung Pirmasens */}
        <section className="bg-white py-16 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-6 text-center">
              Ihre Reinigungsfirma in Pirmasens – Salif Gebäudeservice
            </h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                <strong>Salif Gebäudeservice</strong> ist Ihre professionelle Reinigungsfirma in Pirmasens.
                Als lokales Reinigungsunternehmen bieten wir Gebäudereinigung, Fensterreinigung,
                Treppenhausreinigung, Grundreinigung und Unterhaltsreinigung für Privat- und
                Gewerbekunden in Pirmasens und der gesamten Region Südwestpfalz.
              </p>
              <p>
                Unser Leistungsspektrum umfasst professionelle <strong>Büroreinigung in Pirmasens</strong>,
                streifenfreie <strong>Glasreinigung</strong>, regelmäßige <strong>Treppenhausreinigung</strong> für
                Hausverwaltungen und Vermieter, sowie <strong>Hausmeisterservice</strong> mit Grünpflege,
                Winterdienst und Kleinreparaturen. Darüber hinaus bieten wir <strong>Entrümpelung</strong>,
                Wohnungsauflösungen, <strong>Umzüge</strong> und Kleintransporte an.
              </p>
              <p>
                Mit erfahrenem Team, flexiblen Servicezeiten und fairen Preisen sorgt
                Salif Gebäudeservice für nachhaltige Sauberkeit – in Pirmasens,
                Zweibrücken, Kaiserslautern, Landau und der Südwestpfalz.
                Schnell, zuverlässig und persönlich.
              </p>
              <p className="text-center font-semibold text-[#1a3a5c]">
                Jetzt unverbindliches Angebot anfordern:{" "}
                <a href="tel:015229043159" className="text-[#22c55e] hover:underline">
                  01522 904 3159
                </a>{" "}
                oder per{" "}
                <a href="https://wa.me/4915229043159" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollLine />
    </ScrollLineProvider>
  );
}
