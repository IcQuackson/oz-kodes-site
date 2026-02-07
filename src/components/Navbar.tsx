import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import type { Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = t.nav.items;
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "PT", flag: "🇵🇹" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
  ];
  const currentLanguage = languages.find((option) => option.code === language) ?? languages[0];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="font-display text-2xl font-bold tracking-tight"
        >
          <span className="text-gradient">OZ</span>
          <span className="text-foreground">-KODES</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t.nav.languageLabel}
              >
                <span className="text-base leading-none">{currentLanguage.flag}</span>
                <span>{currentLanguage.label}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value as Language)}>
                {languages.map((option) => (
                  <DropdownMenuRadioItem key={option.code} value={option.code} className="gap-2">
                    <span className="text-base leading-none">{option.flag}</span>
                    <span>{option.label}</span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {t.nav.languageLabel}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={t.nav.languageLabel}
                  >
                    <span className="text-base leading-none">{currentLanguage.flag}</span>
                    <span>{currentLanguage.label}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value as Language)}>
                    {languages.map((option) => (
                      <DropdownMenuRadioItem key={option.code} value={option.code} className="gap-2">
                        <span className="text-base leading-none">{option.flag}</span>
                        <span>{option.label}</span>
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
