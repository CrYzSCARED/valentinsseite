import { motion } from "framer-motion";
import futureBg from "@/assets/future-bg.jpg";

const dreams = ["Vertrauen", "Zusammenhalt", "Gemeinsame Träume", "Abenteuer", "Für immer"];

const FutureSection = () => {
  return (
    <section className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${futureBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          className="font-script text-gold-light text-xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Was noch vor uns liegt
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif font-semibold text-primary-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unsere Zukunft
        </motion.h2>

        <motion.p
          className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Die Zukunft ist ungeschrieben – und genau das macht sie so aufregend. Solange wir zusammen sind,
          kann uns nichts aufhalten. Jeder neue Tag ist ein Geschenk, das wir gemeinsam auspacken.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {dreams.map((dream, index) => (
            <motion.span
              key={dream}
              className="px-6 py-3 rounded-full border border-gold-light/40 text-primary-foreground font-body text-sm backdrop-blur-sm bg-foreground/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              {dream}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
