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
