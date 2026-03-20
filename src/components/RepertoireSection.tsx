import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Disc3 } from "lucide-react";

const artists = [
  { name: "Legião Urbana", era: "80s" },
  { name: "Cazuza", era: "80s" },
  { name: "Barão Vermelho", era: "80s" },
  { name: "Charlie Brown Jr.", era: "90s" },
  { name: "Simple Minds", era: "80s" },
  { name: "Jota Quest", era: "90s" },
  { name: "Lulu Santos", era: "80s" },
  { name: "E muito mais...", era: "" },
];

const RepertoireSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="repertorio" ref={ref} className="section-reveal py-24 sm:py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Disc3 className="w-5 h-5 text-primary" />
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">Repertório</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-6 leading-[1]">
          Clássicos que<br />marcaram época
        </h2>
        <p className="font-body text-foreground/60 text-lg max-w-2xl mb-16 leading-relaxed">
          Nosso setlist percorre o melhor de duas décadas inesquecíveis. Do rock brasileiro aos hits internacionais.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {artists.map((artist, i) => (
            <div
              key={artist.name}
              className="group flex items-center gap-4 bg-background/50 rounded-lg px-5 py-4 hover:bg-primary/10 transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Disc3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">{artist.name}</p>
                {artist.era && (
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{artist.era}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
