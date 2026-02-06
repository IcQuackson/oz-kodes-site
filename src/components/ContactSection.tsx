import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-4">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Fale{" "}
            <span className="text-gradient">Connosco</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-gradient border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Morada</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rua Salvador Allende<br />
                  Luanda, Angola
                </p>
              </div>

              {/* Phone */}
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Telefone</h3>
                <a
                  href="tel:+244923306919"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +244 923 306 919
                </a>
              </div>

              {/* Email */}
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:geral@ozkodes.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  geral@ozkodes.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground mb-6">
                Estamos prontos para ajudar no seu próximo projecto.
              </p>
              <a
                href="mailto:geral@ozkodes.com"
                className="inline-block px-8 py-4 rounded-lg font-display font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
