import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-accent">24Horas TEC</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Soluções em desentupimento com agilidade e confiança desde 2020. 
              Sua emergência é nossa prioridade!
            </p>
          </div>
          
          {/* Column 2 - Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-6 text-accent">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg">(14) 3234-5678</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="text-lg">(14) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-6 h-6 text-accent" />
                <span className="text-lg">contato@24horastec.com.br</span>
              </div>
            </div>
          </div>
          
          {/* Column 3 - Service Hours and CTA */}
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