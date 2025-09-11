import { Check, Clock, DollarSign, MapPin, Shield, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24 Horas",
    description: "Estamos disponíveis dia e noite, incluindo sábados, domingos e feriados. A emergência não escolhe hora, e nós também não!"
  },
  {
    icon: DollarSign,
    title: "Orçamento Grátis e Sem Compromisso",
    description: "Fale conosco pelo chat, explique seu problema e receba um orçamento justo e transparente na hora."
  },
  {
    icon: MapPin,
    title: "Visita Técnica Gratuita",
    description: "Nossos técnicos vão até você para avaliar o problema de perto, sem custo algum."
  },
  {
    icon: Shield,
    title: "Garantia Total do Serviço",
    description: "Oferecemos garantia em todos os nossos serviços. Se o problema voltar, nós também voltamos!"
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Aceitamos Pix, cartões de crédito, débito e oferecemos as melhores condições de pagamento."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sua Tranquilidade é a Nossa Prioridade
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6 p-6 rounded-2xl hover:bg-section transition-all duration-300 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="flex-shrink-0 mt-2">
                <Check className="w-8 h-8 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;