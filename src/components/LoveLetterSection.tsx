import { motion } from "framer-motion";

const LoveLetterSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}>

          <p className="font-script text-gold text-xl mb-3">Nur für dich</p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
            Ein Brief an dich
          </h2>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 glow-rose"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}>

          {/* Decorative corner */}
          <div className="absolute top-4 right-4 font-script text-gold/40 text-4xl">♥</div>

          <div className="font-script text-2xl md:text-3xl text-foreground leading-relaxed space-y-6">
            <p>Mein Schatz</p>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Es gibt so vieles, das ich dir sagen möchte und trotzdem reichen alle Worte der Welt nicht aus, um auszudrücken, was du mir bedeutest. Du bist mein erster Gedanke am Morgen und mein letzter Gedanke am Abend. Du bedeutest mir die Welt und hast den wichtigsten Platz in meinem Herzen.
            </p>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Mit dir habe ich gelernt, was es bedeutet, richtig geliebt zu werden. Bedingungslos, ehrlich und von ganzem Herzen. Du machst jeden Moment zu etwas Besonderem und jeder Moment mit dir ist unvergesslich.
            </p>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Danke, dass du du bist und mich so nimmst, wie ich bin. Danke, dass du in mein Leben gekommen bist und mir so viel Freude gebracht hast. Danke für jedes Lächeln und jeden Kuss, den du mir gegeben hast. Ich freue mich auf unseren ersten richtigen Kuss.
            </p>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Du hast mich zu einem besseren Menschen gemacht und dafür bin ich dir sehr dankbar. Ohne dich kann ich nicht mehr, denn du bist meine Welt. Ich brauche dich an meiner Seite, denn du bist meine Kraft und meine Motivation.
            </p>

            <p className="mt-8">
              Ich Liebe Dich<br />
              <span className="text-rose-deep font-script text-3xl">Mona</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default LoveLetterSection;