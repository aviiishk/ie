"use client";

import Link from "next/link";
import LeadInline from "@/components/ui/lead-inline";
import LeadPopup from "@/components/ui/lead-popup";
import FloatingCTA from "@/components/ui/floating-cta";
import WhatsAppCTA from "@/components/ui/whatsapp-cta";
import CTA from "@/components/ui/cta";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code,
  Megaphone,
  MessageCircle, BarChart3, Globe, Palette,
  PenTool,
  Share2,
  Smartphone,
  Video,
  Clapperboard,
  Film,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Testimonial from "@/components/ui/testimonial";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { scrollToSection } from "@/lib/utils";

/* ─────────────────────────────────────────────── */

const WHATSAPP_URL =
  "https://wa.me/919678153730?text=" +
  encodeURIComponent(
    "Hi InsideEdge! 👋 I came across your website and I'm interested in your creative services. Can we connect to discuss my project?"
  );

const services = [
  {
    num: "01",
    title: "Paid Advertising (Meta & Google)",
    desc: "Strategic ad campaigns built to acquire customers profitably — not just clicks. From targeting to scaling, we optimise every rupee for maximum ROAS.",
    icon: Megaphone,
  },
  {
    num: "02",
    title: "Social Media Growth & Management",
    desc: "We turn your social presence into a demand engine. Content strategy, posting, and community building aligned to attract, engage, and convert.",
    icon: BarChart3,
  },
  {
    num: "03",
    title: "Funnel & Web Development",
    desc: "High-converting websites and landing pages built for speed, SEO, and conversions — engineered to turn traffic into revenue.",
    icon: Globe,
  },
  {
    num: "04",
    title: "Creative & Content Production",
    desc: "Ad creatives, brand visuals, and storytelling designed to stop the scroll and drive action — the backbone of performance marketing.",
    icon: Palette,
  },
  {
    num: "05",
    title: "Video Editing & Performance Content",
    desc: "High-retention edits for YouTube, ads, and short-form platforms — built to hook fast and convert attention into results.",
    icon: Video,
  },
  {
    num: "06",
    title: "Short-Form Content Engine",
    desc: "Reels, TikToks, and Shorts designed for reach and virality — backed by strategy to drive inbound demand.",
    icon: Clapperboard,
  },
];



const stats = [
  { value: "150+", label: "Brands Served" },
  { value: "5M+", label: "Views Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "3×", label: "Engagement Lift" },
];


/* ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <> 
    <LeadPopup />
    <WhatsAppCTA />
    <FloatingCTA />
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <Section id="hero" className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.55] pointer-events-none" />
        <div className="absolute inset-0 bg-gold-spotlight pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">

            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-[#F0BF26]/40 bg-[#F0BF26]/10 px-3.5 py-1.5 text-[11px] font-bold text-[#9a7200] tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F0BF26] inline-block" />
              Accepting new projects · Q3 2026
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animation-delay-100 text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#011226]">
              Great brands don't just look good.<br />
              <span className="text-gold-gradient">They grow</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-in-up animation-delay-200 text-[#64748B] text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              InsideEdge is a full-service creative agency that builds brands people remember and businesses that convert. Social media, design, web, apps and video, Trusted by brands across Assam, North East India and beyond.</p>

            {/* CTAs */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-3 justify-center pt-1">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 font-bold">
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                  See what we do
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
<CTA variant="blue" />

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <div id="stats" className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#E2E8F0]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 py-6 px-4 text-center"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-tight tabular-nums">
                  {s.value}
                </span>
                <span className="text-xs text-[#64748B] font-medium leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ══════════════════════════════════════
          SERVICES — editorial numbered list
      ══════════════════════════════════════ */}
      <Section id="services" className="bg-white py-16 md:py-28">
        <Container>
          {/* Header */}
          <div className="mb-10 md:mb-14 space-y-2 md:space-y-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0BF26] font-bold">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-[#011226]">
              We don’t offer services<br className="hidden sm:block" /> We build growth engines.
            </h2>
          </div>

          {/* List */}
          <div className="divide-y divide-[#E2E8F0]">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 sm:gap-6 py-6 sm:py-7 hover:bg-[#FAFAF9] -mx-5 sm:-mx-6 md:-mx-10 px-5 sm:px-6 md:px-10 transition-colors duration-150"
              >
                {/* Number */}
                <span className="text-sm font-bold text-[#F0BF26] mt-0.5 w-7 shrink-0 tabular-nums">
                  {svc.num}
                </span>
                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#011226] tracking-tight leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-sm sm:text-[0.93rem] text-[#64748B] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                {/* Icon — hidden on small, decorative on large */}
                <svc.icon
                  className="hidden sm:block h-5 w-5 text-[#E2E8F0] group-hover:text-[#F0BF26] transition-colors duration-150 mt-1 shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div> 
        </Container>
      </Section>
      <CTA variant="green" />
      {/* ══════════════════════════════════════
          WHY US
      ══════════════════════════════════════ */}
      <Section id="why-us" className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-16 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Left — copy */}
            <div className="space-y-7">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0BF26] font-bold">
                  Why InsideEdge?
                </p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#011226] leading-tight">
                  Strategy first.<br />Execution second.<br />Results always.
                </h2>

                <p className="text-gray-500 mt-6 max-w-xl leading-relaxed">
                  Most agencies jump straight into ads. We don’t.
                  <br /><br />
                  We start with the only thing that actually matters a clear, profitable path from traffic to revenue.
                  <br /><br />
                  Because without strategy, more traffic just means more wasted spend.
                </p>
              </div>

         

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="secondary" size="lg" className="font-bold gap-1.5">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right — quote card */}
            <div className="relative lg:pt-4">
              {/* Soft gold shadow */}
              <div className="absolute -inset-3 rounded-[20px] bg-[rgba(240,191,38,0.05)] blur-xl pointer-events-none" />
              <div className="relative rounded-[16px] border border-[#E2E8F0] bg-white p-7 sm:p-10 space-y-6 shadow-[0_2px_16px_rgba(1,18,38,0.06)]">
                <span className="block text-7xl font-extrabold text-gold-gradient tracking-tighter leading-none select-none">
                  "
                </span>
                <blockquote className="text-xl sm:text-2xl font-bold text-[#011226] tracking-tight leading-snug">
                  Every detail we design is intentional measured, refined, and built to perform.
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-[#E2E8F0]">
                  <div className="h-9 w-9 rounded-full bg-[rgba(240,191,38,0.12)] border border-[#F0BF26]/30 flex items-center justify-center shrink-0">
                    <span className="text-xs font-extrabold text-[#b8820a] tracking-tight">IE</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#011226] leading-tight">InsideEdge Studio</p>
                    <p className="text-xs text-[#94A3B8] leading-tight">Full-Service Creative Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <CTA variant="red" /> 
      {/* ══════════════════════════════════════
    TESTIMONIALS
══════════════════════════════════════ */}
     
      <Testimonial />

      {/* ══════════════════════════════════════
          CLIENTS
      ══════════════════════════════════════ */}
      <Section id="clients" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col items-center space-y-8 sm:space-y-10">
            <div className="text-center space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0BF26] font-bold">
                Trusted By
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#011226]">
                Brands That Chose The Edge
              </h2>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic22.png"
              alt="InsideEdge client logos"
              className="w-full max-w-3xl h-auto object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            
          </div>
        </Container>
      </Section>
       <CTA variant="yellow" />
      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <Section id="contact-us" className="relative bg-white border-t border-[#E2E8F0] py-20 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.4] pointer-events-none" />
        {/* Gold rule at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#F0BF26] to-transparent" />
         
        <Container className="relative z-10">
          <div className="max-w-xl mx-auto text-center space-y-6 sm:space-y-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0BF26] font-bold">
              Let&apos;s Talk
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#011226] leading-[1.05]">
              Ready to grow<br />
              <span className="text-gold-gradient">your brand?</span>
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Drop us a message on WhatsApp — no lengthy forms, just a real conversation about your project.
            </p>
                  
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto gap-2 font-bold h-[52px] px-8">
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link
                href="https://insideedge.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-1.5 font-semibold h-[52px] px-8"
                >
                  Visit Main Website <ArrowRight className="h-4 w-4 shrink-0" />
                </Button>
              </Link>
              
            </div>
            <LeadInline />
          </div>
        </Container>
      </Section>
    </>
  );
}
