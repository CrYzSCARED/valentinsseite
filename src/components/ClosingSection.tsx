import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 gradient-rose text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart className="w-12 h-12 mx-auto text-primary fill-primary/30 mb-8" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ti Amo{" "}
          <span className="text-rose-deep italic">
            Amore mio
          </span>
        </motion.h2>

        <motion.p
          className="font-script text-gold text-2xl mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Für immer dein ♥
        </motion.p>

        <motion.div
          className="mt-12 w-24 h-px bg-primary/30 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.p
          className="mt-6 text-muted-foreground font-body text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Happy Valentine's Day 2026
        </motion.p>
      </div>
    </section>
  );
};

export default ClosingSection;
