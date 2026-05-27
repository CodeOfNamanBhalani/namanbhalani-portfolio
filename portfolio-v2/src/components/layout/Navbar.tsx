"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);

        // scroll-spy: find which section is in view
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        let current = "hero";
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.getBoundingClientRect().top;
            if (top <= 100) current = id;
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-white/10 bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-foreground text-sm font-bold text-background">
            NB
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm",
                    active
                      ? "bg-white/10 text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              className="rounded-full border border-white/10 p-2 text-muted hover:text-foreground"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <a
            href={siteConfig.resumePath}
            download
            className="btn-primary hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium sm:flex"
          >
            <Download size={16} />
            Resume
          </a>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-white/5"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.resumePath}
                download
                className="btn-primary mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
