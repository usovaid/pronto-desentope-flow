import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ServiceAreasSection />
      <FooterSection />
    </div>
  );
};

export default Index;