import { useScrollReveal } from "@/hooks/useScrollReveal";
import bandGroup from "@/assets/band-group.jpg";
import viniciusImg from "@/assets/vinicius.jpg";
import guilhermeImg from "@/assets/guilherme.jpg";
import edsonImg from "@/assets/edson.jpg";
import edImg from "@/assets/ed.jpg";

const members = [
  { name: "Vinícius", role: "Vocal", img: viniciusImg },
  { name: "Guilherme", role: "Baixo", img: guilhermeImg },
  { name: "Edson", role: "Bateria", img: edsonImg },
  { name: "Ed", role: "Guitarra", img: edImg },
];

const BandSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="banda" ref={ref} className="section-reveal py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary text-vinho-shadow mb-4 block">A Banda</span>
            <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-6 leading-[1]">
              Quatro músicos,<br />uma paixão
            </h2>
            <p className="font-body text-foreground/60 text-lg leading-relaxed">
              A QuartoVinil leva o melhor do pop e rock nacional e internacional dos anos 80 e 90 para todos os públicos — dos mais jovens aos mais experientes. Cada show é uma viagem no tempo com energia e qualidade.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            <img
              src={bandGroup}
              alt="QuartoVinil - foto da banda"
              className="w-full h-80 sm:h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="group relative rounded-xl overflow-hidden bg-card shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={member.img}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-2xl text-foreground">{member.name}</h3>
                <p className="font-body text-sm text-primary text-vinho-shadow">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandSection;
