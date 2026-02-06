import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-aerial.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista aérea de mapeamento por drone em Angola"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Soluções de Mapeamento Aéreo
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Mapeamento de{" "}
            <span className="text-gradient glow-text">Precisão</span>
            <br />
            com Tecnologia VANT
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            A ponte entre a fotogrametria tradicional e a topografia clássica.
            Rápido, eficiente e com resultados de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded-lg font-display font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Nossos Serviços
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded-lg font-display font-semibold text-sm tracking-wide border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              Fale Connosco
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "400m", label: "Altitude Máx." },
            { value: "50+", label: "Min. de Voo" },
            { value: "100%", label: "Autónomo" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary stat-glow">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
