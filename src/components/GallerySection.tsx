import { motion } from "framer-motion";

const placeholders = Array.from({ length: 6 });

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-gold text-xl mb-3">Für uns</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
            Unsere Erinnerungen
          </h2>
          <p className="text-muted-foreground mt-4 font-body max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Hier kommen bald unsere gemeinsamen Erinnerungen hin. Jeder Moment mit dir wird hier seinen Platz finden.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          {placeholders.map((_, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-2xl bg-cream-dark/60 border border-border/40 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="font-script text-gold/30 text-4xl md:text-5xl">♥</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
