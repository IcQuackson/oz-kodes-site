import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, MapPin, Camera, Mountain, Compass, Ruler } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Levantamento Aéreo",
    description:
      "Voos pré-programados com câmaras on-board até 400m de altitude, garantindo cobertura total e eficiente.",
  },
  {
    icon: Camera,
    title: "Fotogrametria",
    description:
      "Produção de ortofotomapas, modelos 3D e nuvens de pontos com alta resolução e precisão.",
  },
  {
    icon: MapPin,
    title: "Mapeamento Digital",
    description:
      "Soluções completas de mapeamento digital para projectos de engenharia, urbanismo e cadastro.",
  },
  {
    icon: Mountain,
    title: "Modelos de Terreno",
    description:
      "Geração de modelos digitais de terreno (MDT) e superfície (MDS) para análise topográfica avançada.",
  },
  {
    icon: Compass,
    title: "Topografia de Apoio",
    description:
      "Equipas de topografia com GPS e Estações Totais Robotizadas para suporte aos produtos de voo.",
  },
  {
    icon: Ruler,
    title: "Levantamento Topográfico",
    description:
      "Serviços clássicos de topografia com equipamento de precisão para apoio a todo tipo de projecto.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-muted/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-4">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Soluções{" "}
            <span className="text-gradient">Completas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-gradient border border-border/50 rounded-xl p-7 hover:border-primary/30 hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
