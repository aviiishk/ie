"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/919678153730?text=" +
  encodeURIComponent(
    "Hi InsideEdge! 👋 I came across your website and I'm interested in your creative services. Can we connect to discuss my project?"
  );

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us",   label: "Why Us"   },
  { href: "#clients",  label: "Clients"  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_8px_rgba(1,18,38,0.08)] border-b border-[#E2E8F0]"
          : "bg-white border-b border-[#E2E8F0]"
      }`}
    >
      {/* ── Main bar ── */}
      <Container>
        <div className="flex h-[60px] items-center justify-between">

          {/* Logo */}
          <Link href="/" aria-label="InsideEdge Home" className="shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.avif"
              alt="InsideEdge"
              className="h-11 md:h-14 w-auto object-contain transition-all duration-200 group-hover:opacity-75"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(link.href.slice(1));
                  }
                }}
                className="relative px-4 py-2 text-sm font-medium text-[#64748B] rounded-lg
                  hover:text-[#011226] hover:bg-black/[0.04] transition-all duration-200
                  after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px]
                  after:rounded-full after:bg-[#F0BF26]
                  after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold
                bg-[#25D366]/10 text-[#128C5E] border border-[#25D366]/25
                hover:bg-[#25D366]/18 hover:border-[#25D366]/45
                transition-all duration-200">
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp
              </button>
            </Link>
            <Link href="https://insideedge.info/" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="default" className="font-bold gap-1">
                Visit Site <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <div className="h-9 w-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/25
                flex items-center justify-center text-[#128C5E]">
                <MessageCircle className="h-[18px] w-[18px]" />
              </div>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="h-9 w-9 rounded-lg flex items-center justify-center
                text-[#64748B] hover:text-[#011226] hover:bg-black/[0.04]
                transition-all duration-200"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </Container>

      {/* ── Mobile drawer — inside sticky header, no fixed positioning ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#F1F5F9]
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setOpen(false);
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(link.href.slice(1));
                  }
                }}
                className="flex items-center py-3.5 text-[15px] font-semibold text-[#011226]
                  border-b border-[#F1F5F9] last:border-0
                  hover:text-[#c8930a] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA row */}
            <div className="flex flex-col gap-2.5 py-4">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button size="lg" className="w-full gap-2 font-bold">
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link
                href="https://insideedge.info/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button variant="outline" size="lg" className="w-full gap-1.5 font-semibold">
                  Visit Main Website <ArrowUpRight className="h-4 w-4 shrink-0" />
                </Button>
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
