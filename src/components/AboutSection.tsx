import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import droneImage from "@/assets/drone-equipment.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-4">
              Quem Somos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Inovação Angolana em{" "}
              <span className="text-gradient">Mapeamento Aéreo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A OZ-KODES é uma empresa angolana que produz soluções de mapeamento entre a
                fotogrametria tradicional, dispendiosa, com logística complexa e a topografia
                clássica, demorada e muitas vezes com dificuldade de mobilidade.
              </p>
              <p>
                Estamos em constante progresso na adaptação das necessidades e satisfação dos
                nossos clientes, utilizando equipamentos de ponta e tecnologia de última geração.
              </p>
            </div>

            {/* Features list */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Voos Autónomos",
                "Alta Precisão",
                "Logística Simplificada",
                "Resultados Rápidos",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-sm text-secondary-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={droneImage}
                alt="Drone VANT utilizado pela OZ-KODES para mapeamento aéreo"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 glow-border">
              <p className="font-display text-3xl font-bold text-primary">VANT</p>
              <p className="text-xs text-muted-foreground mt-1">Veículo Aéreo<br/>Não Tripulado</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
