import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import droneImage from "@/assets/drone-equipment.jpg";
import { useLanguage } from "@/hooks/use-language";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
              {t.about.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t.about.titlePrefix}
              <span className="text-gradient">{t.about.titleHighlight}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Features list */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {t.about.features.map((feature) => (
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
                alt={t.about.imageAlt}
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 glow-border">
              <p className="font-display text-3xl font-bold text-primary">{t.about.badgeTitle}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {t.about.badgeSubtitleLine1}
                <br />
                {t.about.badgeSubtitleLine2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
