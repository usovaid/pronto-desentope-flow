import { Button } from "@/components/ui/button";
import heroPlumber from "@/assets/hero-plumber.jpg";
import logo24horasTec from "@/assets/logo-24horas-tec-favicon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPlumber})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo24horasTec} 
            alt="24Horas TEC Desentupidora" 
            className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Desentupidora 24 Horas em <span className="text-accent">Bauru</span>?<br />
          A <span className="text-accent">24Horas TEC</span> Resolve!
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto font-medium">
          Atendimento Imediato, Visita Técnica e Orçamento Grátis.<br />
          <span className="text-accent font-bold">Cobrimos qualquer oferta da concorrência!</span>
        </p>
        
        <Button variant="hero" size="xl" className="text-xl px-12 py-6 shadow-medium">
          FALE CONOSCO
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;