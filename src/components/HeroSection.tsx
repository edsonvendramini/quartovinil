import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="QuartoVinil"
          className="w-40 sm:w-52 mx-auto mb-6 drop-shadow-2xl animate-in fade-in zoom-in-95 duration-700"
        />
        <p className="font-body text-primary/80 uppercase tracking-[0.3em] text-sm mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          Pop & Rock · Anos 80 & 90
        </p>
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-foreground text-glow leading-[0.9] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          QuartoVinil
        </h1>
        <p className="font-body text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          Música de excelente qualidade para todos os públicos. Dos clássicos nacionais aos hits internacionais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            Contrate a Banda
          </a>
          <a
            href="#repertorio"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground/20 text-foreground font-body font-semibold rounded-lg hover:bg-foreground/5 active:scale-[0.97] transition-all duration-200"
          >
            Repertório
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
