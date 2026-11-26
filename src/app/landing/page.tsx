import CatalogSection from "@/components/CatalogSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { CatalogProvider } from "@/context/CatalogContext";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CatalogProvider>
      <Header />
      <main>
        <Hero />
        <CatalogSection />
        <ContactForm />
      </main>
      <Footer />
    </CatalogProvider>
  );
}