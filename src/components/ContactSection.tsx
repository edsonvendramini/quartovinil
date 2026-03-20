import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contato" ref={ref} className="section-reveal py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-4 leading-[1]">
          Vamos tocar no<br />seu evento?
        </h2>
        <p className="font-body text-foreground/60 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Festas, bares, eventos corporativos ou celebrações especiais. Entre em contato e traga a QuartoVinil para o seu palco.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:quartovinil@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card rounded-xl hover:bg-secondary transition-colors duration-200 active:scale-[0.97]"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-body text-foreground">quartovinil@gmail.com</span>
          </a>
          <a
            href="https://wa.me/5516997897333"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
          >
            <Phone className="w-5 h-5" />
            <span className="font-body font-semibold">(16) 99789-7333</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
