import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const timelineItems = [
  {
    period: "Der Anfang",
    title: "Der erste Chat",
    text: "Der erste Tag mit dir bleibt für mich unvergesslich. Ich weiss noch, wie wir geschrieben haben und du mich wegen \u201ECiao\u201C direkt gestresst hast. Ich dachte nur: \u201EWas ist das für ein Vogel?\u201C aber genau das hat mein Interesse geweckt. Irgendwie wusste ich schon da, dass du die Richtige bist.",
  },
  {
    period: "Erste Momente",
    title: "Unsere ersten gemeinsamen Schritte",
    text: "Unsere ersten Monate waren chaotisch. Wir hatten viele Diskussionen und sogar eine Pause. Es lief nicht immer gut und auch die Distanz zwischen uns hat es nicht leichter gemacht. Trotzdem haben wir es geschafft und uns gegenseitig gezeigt, dass wir füreinander kämpfen.",
  },
  {
    period: "Heute",
    title: "Was wir geworden sind",
    text: "Jetzt sind wir keine Fremden mehr. Wir haben vieles gemeinsam durchgestanden und meistern jedes Hindernis zusammen. Unsere Bindung ist unglaublich stark geworden und wir sind ein unschlagbares Team. Ich bin sehr stolz auf uns.",
  },
  {
    period: "Morgen",
    title: "Was noch kommt",
    text: "Irgendwann werden wir unser erstes Treffen haben. Irgendwann werde ich dir einen Antrag machen. Und mein grösster Traum ist es, mit dir eine wunderschöne Familie zu gründen, denn ich könnte mich nicht glücklicher schätzen, so eine wundervolle Frau an meiner Seite zu haben.",
  },
];

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 px-6 bg-blush/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-gold text-xl mb-3">Kapitel für Kapitel</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
            Unsere Geschichte
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 mt-2" />

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="font-script text-gold text-sm">{item.period}</span>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
