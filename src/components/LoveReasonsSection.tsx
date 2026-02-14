import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Dein Lächeln, das mich blendet",
  "Deine Stärke, die mich jeden Tag inspiriert",
  "Wie du mich verstehst, ohne Worte",
  "Dein Lachen, das ansteckend ist",
  "Deine Wärme, die mich wie ein Zuhause fühlen lässt",
  "Deine Geduld und dein großes Herz",
  "Die Art, wie du bist",
  "Dass du mich zu einem besseren Menschen machst",
];

const LoveReasonsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-blush/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-gold text-xl mb-3">Von Herzen</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
            Was ich an dir liebe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover:glow-rose transition-shadow duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 fill-primary/30" />
              <p className="font-body text-foreground leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveReasonsSection;
