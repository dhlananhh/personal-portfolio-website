"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#goals", label: "Goals" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#github-contributions", label: "Contributions" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ activeSection, setActiveSection ] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "";
      navItems.forEach(item => {
        if (item.href.startsWith("/#")) {
          const sectionId = item.href.substring(2);
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sectionId;
            }
          }
        }
      });
      if (window.scrollY < 50 && !currentSection) {
        currentSection = "hero";
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={ cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
        "bg-slate-900/80",
        (isScrolled || isOpen) &&
        "bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-700/60",
        !(isScrolled || isOpen) &&
        "border-b border-transparent"
      ) }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link
              href="/#hero"
              onClick={ (e) => handleLinkClick(e, "/#hero") }
              className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 bg-clip-text text-transparent"
            >
              Khuê Nhã
            </Link>
          </div>

          {/* Desktop Menu */ }
          <div className="hidden md:flex items-center space-x-2">
            { navItems.map((item) => (
              <Link
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  activeSection === item.href.substring(2)
                    ? "text-rose-300 bg-rose-500/10 text-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50 text-md"
                ) }
              >
                { item.label }
              </Link>
            )) }
          </div>

          {/* Mobile Menu Button */ }
          <div className="md:hidden flex items-center">
            <button
              onClick={ toggleMenu }
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-expanded={ isOpen }
              aria-label={ isOpen ? "Close menu" : "Open menu" }
            >
              { isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /> }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */ }
      { isOpen && (
        <div
          className={ cn(
            "md:hidden absolute top-full left-0 w-full shadow-lg",
            "bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/60"
          ) }
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            { navItems.map((item) => (
              <Link
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  activeSection === item.href.substring(2)
                    ? "bg-rose-500/20 text-rose-300"
                    : "text-slate-200 hover:text-white hover:bg-slate-700/50"
                ) }
              >
                { item.label }
              </Link>
            )) }
          </div>
        </div>
      ) }
    </nav>
  );
}
