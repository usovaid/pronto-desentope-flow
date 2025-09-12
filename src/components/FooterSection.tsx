import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import logo24horasTec from "@/assets/logo-24horas-tec-new.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={logo24horasTec} 
                alt="24Horas TEC" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              Soluções em desentupimento com agilidade e confiança desde 2020. 
              Sua emergência é nossa prioridade!
            </p>
          </div>
          
          {/* Column 2 - Service Hours and CTA */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-6 text-accent">Atendimento</h4>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-lg">24 Horas, 7 dias por semana</span>
            </div>
            <Button variant="cta" size="lg" className="w-full md:w-auto">
              FALE CONOSCO
            </Button>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 24Horas TEC Desentupidora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;