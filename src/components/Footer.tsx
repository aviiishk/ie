import Link from "next/link";
import { Container } from "./ui/Container";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919678153730?text=" +
  encodeURIComponent(
    "Hi InsideEdge! 👋 I came across your website and I'm interested in your creative services. Can we connect to discuss my project?"
  );

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <Container>
        <div className="pt-12 md:pt-16 pb-8">

          {/* ── Top ── */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-8 pb-10 border-b border-[#E2E8F0]">

            {/* Brand */}
            <div className="space-y-4 max-w-xs">
              <Link href="/" aria-label="InsideEdge Home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.avif"
                  alt="InsideEdge"
                  className="h-12 w-auto object-contain opacity-90 hover:opacity-70 transition-opacity duration-200"
                />
              </Link>
              <p className="text-sm text-[#64748B] leading-relaxed">
                A premium creative agency for social media, design, web, apps and video.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 w-full sm:w-auto sm:items-end">
              <p className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-semibold">
                Ready to start?
              </p>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  w-full sm:w-auto justify-center
                  rounded-[10px] bg-[#F0BF26] text-[#011226]
                  px-6 py-3 font-bold text-sm
                  hover:bg-[#e6b420] hover:shadow-[0_4px_14px_rgba(240,191,38,0.3)]
                  hover:-translate-y-px
                  transition-all duration-200 shadow-[0_1px_6px_rgba(240,191,38,0.18)]
                "
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                Chat on WhatsApp
              </Link>
              <Link
                href="https://insideedge.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-1.5
                  w-full sm:w-auto justify-center
                  rounded-[10px] border border-[#E2E8F0] bg-white text-[#011226]
                  px-6 py-2.5 font-semibold text-sm
                  hover:border-[#F0BF26]/60
                  transition-all duration-200
                "
              >
                Visit Main Website
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ── Bottom ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#94A3B8]">
            <p>© {new Date().getFullYear()} InsideEdge Agency. All rights reserved.</p>
            <p className="uppercase tracking-widest font-medium text-[#CBD5E1] text-[10px]">
              Built for the bold
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}
