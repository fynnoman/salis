import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import { ScrollLineProvider } from "@/components/ScrollLineContext";

export default function Home() {
  return (
    <ScrollLineProvider>
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Zum Inhalt springen
      </a>
      <main id="main-content">
        <Hero />
        <Navbar />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollLine />
    </ScrollLineProvider>
  );
}
