import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingHearts from "./FloatingHearts";

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-background/40" />
      <FloatingHearts />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          className="font-script text-gold text-xl md:text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>

          Zum Valentinstag
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight mb-6 text-shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>

          Wir zwei zusammen <br /><span className="text-rose-deep italic">für immer.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-10 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}>

          Eine kleine Seite, die meine Liebe zu dir zeigt.
        </motion.p>

        










      </div>
    </section>);

};

export default HeroSection;