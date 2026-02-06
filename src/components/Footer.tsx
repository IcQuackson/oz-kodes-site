const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">OZ</span>
          <span className="text-foreground">-KODES</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} OZ-KODES. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
