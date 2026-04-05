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
import SeoTextblock from "@/components/SeoTextblock";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Was kostet eine Gebäudereinigung in Pirmasens?", acceptedAnswer: { "@type": "Answer", text: "Der Stundensatz für Reinigungsarbeiten liegt bei ca. 28 € pro Stunde. Der genaue Preis hängt vom Umfang, der Häufigkeit und der Art des Auftrags ab. Für größere Objekte oder Daueraufträge erstellen wir ein individuelles Angebot." } },
      { "@type": "Question", name: "In welchen Städten ist Salif Gebäudeservice tätig?", acceptedAnswer: { "@type": "Answer", text: "Wir sind hauptsächlich in Pirmasens und der Region Südwestpfalz tätig, darunter Zweibrücken, Kaiserslautern, Landau, Rodalben, Dahn und Waldfischbach-Burgalben." } },
      { "@type": "Question", name: "Bietet Salif Gebäudeservice auch Hausmeisterservice an?", acceptedAnswer: { "@type": "Answer", text: "Ja, wir bieten umfassenden Hausmeisterservice in Pirmasens an: Kleinreparaturen, Grünpflege, Winterdienst, Mülltonnenservice und mehr – alles aus einer Hand." } },
      { "@type": "Question", name: "Wie kann ich ein unverbindliches Angebot anfragen?", acceptedAnswer: { "@type": "Answer", text: "Sie können uns jederzeit unter 01522 904 3159 anrufen, eine WhatsApp-Nachricht schreiben oder eine E-Mail an salif-dienstleistungen@gmx.de senden. Wir melden uns schnell zurück." } },
      { "@type": "Question", name: "Welche Reinigungsleistungen bietet Salif Gebäudeservice in Pirmasens an?", acceptedAnswer: { "@type": "Answer", text: "Wir bieten Gebäudereinigung, Fensterreinigung, Treppenhausreinigung, Grundreinigung, Unterhaltsreinigung, Büroreinigung, Dachrinnenreinigung, Hausmeisterservice, Entrümpelung, Umzüge und Kleintransporte in Pirmasens und der Südwestpfalz." } },
      { "@type": "Question", name: "Bietet Salif Gebäudeservice auch Entrümpelung und Umzüge an?", acceptedAnswer: { "@type": "Answer", text: "Ja, wir übernehmen komplette Wohnungsauflösungen, Entrümpelungen mit fachgerechter Entsorgung sowie Umzüge und Kleintransporte in Pirmasens und der Region." } },
      { "@type": "Question", name: "Wann ist Salif Gebäudeservice erreichbar?", acceptedAnswer: { "@type": "Answer", text: "Wir sind Montag bis Samstag von 7:00 bis 20:00 Uhr erreichbar. Sonntags auf Anfrage. Rufen Sie uns an unter 01522 904 3159 oder schreiben Sie uns per WhatsApp." } },
    ],
  };

  return (
    <ScrollLineProvider>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Hero />
        <Navbar />
        <Services />
        <About />
        <Portfolio />
        <BeforeAfter />
        <SeoTextblock />
        <Contact />
      </main>
      <Footer />
      <ScrollLine />
    </ScrollLineProvider>
  );
}
