import { useEffect } from "react";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import MaterialsProducts from "@/components/MaterialsProducts";
import TeamSpotlight from "@/components/TeamSpotlight";
import ContactCTA from "@/components/ContactCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Дейвид Груп | Тенекиени решения създадени да издържат";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <StatsSection />
      <MaterialsProducts />
      <TeamSpotlight />
      <ContactCTA />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
