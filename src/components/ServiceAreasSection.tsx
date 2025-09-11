import { MapPin } from "lucide-react";

const cities = [
  "Bauru", "Agudos", "Pederneiras", "Lençóis Paulista", 
  "Jaú", "Botucatu", "Avaí", "Arealva", 
  "Macatuba", "Barra Bonita", "Igaraçu do Tietê", "E todas as cidades vizinhas"
];

const ServiceAreasSection = () => {
  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Atendemos Toda a Região de <span className="text-accent">Bauru/SP</span>
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-border/20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {cities.map((city, index) => (
                <div key={index} className="p-4 rounded-lg hover:bg-section transition-colors duration-300 group">
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {city}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl text-muted-foreground">
                <span className="font-bold text-accent">Não encontrou sua cidade?</span> Entre em contato conosco!<br />
                Expandimos nosso atendimento constantemente para melhor atendê-lo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;