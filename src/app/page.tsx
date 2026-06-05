import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollLineProvider } from "@/components/ScrollLineContext";
import SeoTextblock from "@/components/SeoTextblock";
import StandorteSection from "@/components/StandorteSection";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine Gebäudereinigung in Pirmasens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der Stundensatz für Reinigungsarbeiten liegt bei ca. 28 € pro Stunde inkl. Material. Der genaue Preis hängt vom Umfang, der Häufigkeit und der Art des Auftrags ab. Für größere Objekte, Daueraufträge oder Rahmenverträge erstellen wir ein individuelles Festpreis-Angebot nach kurzer Besichtigung.",
        },
      },
      {
        "@type": "Question",
        name: "Was kostet eine Reinigung in Kaiserslautern?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Kaiserslautern rechnen wir vergleichbar zu Pirmasens — ab 28 €/h inkl. Material, bei laufenden Verträgen mit gestaffelten Festpreisen. Die Anfahrt nach Kaiserslautern ist bei regelmäßigen Aufträgen in der Pauschale enthalten.",
        },
      },
      {
        "@type": "Question",
        name: "In welchen Städten ist Salif Gebäudeservice tätig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir sind aktiv in Pirmasens, Kaiserslautern, Zweibrücken, Landstuhl, Homburg, Landau, Rodalben, Dahn, Waldfischbach-Burgalben und in der gesamten Region Südwestpfalz, Westpfalz und Saarpfalz.",
        },
      },
      {
        "@type": "Question",
        name: "Bietet Salif Gebäudeservice auch Hausmeisterservice an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir bieten umfassenden Hausmeisterservice in Pirmasens, Kaiserslautern und Umgebung: Kleinreparaturen, Grünpflege, Mülltonnenservice, Sichtkontrollen, Glühbirnen-Tausch, Winterdienst und mehr – alles aus einer Hand, mit einer Rechnung pro Monat.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich ein unverbindliches Angebot anfragen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie können uns jederzeit unter 01522 904 3159 anrufen, eine WhatsApp-Nachricht schreiben oder eine E-Mail an salif-dienstleistungen@gmx.de senden. Wir melden uns in der Regel innerhalb weniger Stunden zurück.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Reinigungsleistungen bietet Salif Gebäudeservice an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir bieten Gebäudereinigung, Unterhaltsreinigung, Grundreinigung, Büroreinigung, Fensterreinigung, Glasreinigung, Wintergartenreinigung, Treppenhausreinigung, Dachrinnenreinigung, Hausmeisterservice, Entrümpelung, Umzüge, Kleintransporte und Winterdienst in Pirmasens, Kaiserslautern und der gesamten Region.",
        },
      },
      {
        "@type": "Question",
        name: "Bietet Salif Gebäudeservice auch Entrümpelung und Umzüge an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir übernehmen komplette Wohnungsauflösungen, Entrümpelungen mit fachgerechter Entsorgung, Haushaltsauflösungen nach Erbfall sowie Umzüge und Kleintransporte in Pirmasens, Kaiserslautern und der gesamten Region.",
        },
      },
      {
        "@type": "Question",
        name: "Wann ist Salif Gebäudeservice erreichbar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir sind Montag bis Samstag von 7:00 bis 20:00 Uhr erreichbar. Sonntags auf Anfrage. Rufen Sie uns an unter 01522 904 3159 oder schreiben Sie uns per WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Sind Sie haftpflichtversichert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, Salif Gebäudeservice ist umfassend haftpflicht- und betriebsversichert. Nachweise senden wir Ihnen auf Anfrage gerne zu.",
        },
      },
    ],
  };

  return (
    <ScrollLineProvider>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Hero />
        <Navbar />
        <Services />
        <About />
        <StandorteSection />
        <Portfolio />
        <BeforeAfter />
        <SeoTextblock />
        <Contact />
      </main>
      <Footer />
    </ScrollLineProvider>
  );
}
