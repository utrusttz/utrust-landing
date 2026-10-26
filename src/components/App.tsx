import { LanguageProvider, type Language } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import PhotoGallery from "@/components/PhotoGallery";
import WhereToBuy from "@/components/WhereToBuy";
import QualityAssurance from "@/components/QualityAssurance";
import B2BOnboarding from "@/components/B2BOnboarding";
import FactorySpecsTable from "@/components/FactorySpecsTable";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

/**
 * Full-page React app wrapped in LanguageProvider.
 * Mounted as an Astro island with client:load so the language context
 * flows to every child component — no prop drilling across the island boundary.
 */
export default function App({ initialLanguage = "en" }: { initialLanguage?: Language }) {
  return (
    <LanguageProvider defaultLanguage={initialLanguage}>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ComparisonMatrix />
        <PhotoGallery />
        <WhereToBuy />
        <QualityAssurance />
        <B2BOnboarding />
        <FactorySpecsTable />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </LanguageProvider>
  );
}
