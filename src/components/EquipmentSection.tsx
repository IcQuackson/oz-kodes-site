import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import topographyImage from "@/assets/topography-team.jpg";

const capabilities = [
  { label: "Câmaras on-board de alta resolução", detail: "Imagens de precisão para fotogrametria" },
  { label: "Voo pré-programado autónomo", detail: "Tecto máximo de 400m de altitude" },
  { label: "Autonomia superior a 50 minutos", detail: "Múltiplos tipos de VANT disponíveis" },
  { label: "Aterragem em espaços reduzidos", detail: "Superfícies irregulares suportadas" },
  { label: "GPS e Estações Totais Robotizadas", detail: "Apoio topográfico completo" },
];

const EquipmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipment" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden glow-border">
              <img
                src={topographyImage}
                alt="Equipa de topografia da OZ-KODES em campo"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-4">
              Equipamentos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Tecnologia de{" "}
              <span className="text-gradient">Ponta</span>
            </h2>

            <div className="space-y-5">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="mt-1.5 w-3 h-3 rounded-full border-2 border-primary flex-shrink-0 group-hover:bg-primary transition-colors" />
                  <div>
                    <p className="font-display font-medium text-foreground">{cap.label}</p>
                    <p className="text-sm text-muted-foreground">{cap.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
