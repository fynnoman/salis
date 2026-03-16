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
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-4">
              Professionelle Reinigung in Pirmasens
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Als lokales Reinigungsunternehmen in Pirmasens bieten wir Gebäudereinigung,
              Fensterreinigung, Treppenhausreinigung und Hausmeisterservice für Privat- und
              Gewerbekunden in Pirmasens und der gesamten Region Südwestpfalz.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Mit erfahrenem Team, flexiblen Servicezeiten und fairen Preisen sorgt
              Salif Haus und Mehr für nachhaltige Sauberkeit in Pirmasens –
              schnell, zuverlässig und persönlich. Jetzt unverbindliches Angebot
              anfordern:{" "}
              <a href="tel:015229043159" className="font-semibold text-[#22c55e] hover:underline">
                01522 904 3159
              </a>
              .
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollLine />
    </ScrollLineProvider>
  );
}
