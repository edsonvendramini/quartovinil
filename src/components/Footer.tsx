import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="QuartoVinil" className="w-10 h-10 object-contain" />
        <p className="font-display text-2xl text-foreground">QuartoVinil</p>
      </div>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} QuartoVinil. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
