import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Toilet, 
  Utensils, 
  Settings, 
  Truck, 
  Waves 
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Desentupimento de Ralos",
    description: "Desobstrução de ralos de banheiro, cozinha e áreas externas com rapidez e sem sujeira."
  },
  {
    icon: Toilet,
    title: "Desentupimento de Vaso",
    description: "Resolvemos entupimentos em vasos sanitários de forma rápida e higiênica, sem quebrar nada."
  },
  {
    icon: Utensils,
    title: "Desentupimento de Pia",
    description: "Acabe com a água que não desce. Desentupimos pias de cozinha e banheiro com total eficiência."
  },
  {
    icon: Settings,
    title: "Desentupimento de Esgoto",
    description: "Desobstrução completa da rede de esgoto, prevenindo refluxos e maiores problemas."
  },
  {
    icon: Truck,
    title: "Limpeza de Fossa",
    description: "Esgotamento e limpeza de fossas sépticas com caminhão auto vácuo e descarte ecológico."
  },
  {
    icon: Waves,
    title: "Hidrojateamento",
    description: "Limpeza profunda de tubulações com jatos de alta pressão, removendo toda a sujeira incrustada."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Serviços Especializados para sua Casa ou Empresa
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="xl" className="shadow-medium">
            FALE CONOSCO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;