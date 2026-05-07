"use client";

import Link from "next/link";

type Variant = "blue" | "green" | "red" | "yellow";

export default function CTA({ variant = "blue" }: { variant?: Variant }) {

  const handleClick = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const styles = {
    blue: {
      bg: "bg-[#2F4A6D]",
      title:
        "Let’s build your brand — book a free audit today.",
      highlight: "bg-yellow-400 text-black",
      sub: "No contracts · Responds within 24 hrs",
      btn: "bg-white text-[#2F4A6D] hover:bg-gray-100",
      tag: "GET STARTED",
      tagColor: "text-white/60",
    },

    green: {
      bg: "bg-green-900",
      title:
        "Tell us what you need — we’ll build a plan around it.",
      highlight: "bg-green-200 text-black",
      sub: "Social · Design · Web · Apps · Video",
      btn: "bg-green-400 text-black hover:bg-green-300",
      tag: "ALL SERVICES. ONE TEAM.",
      tagColor: "text-green-300",
    },

    red: {
      bg: "bg-[#6B2C2C]",
      title:
        "Stop losing clients to brands that look better. Let’s fix yours.",
      highlight: "bg-red-200 text-black",
      sub: "Free 30-min brand audit · No obligation",
      btn: "bg-red-300 text-black hover:bg-red-200",
      tag: "SOUND FAMILIAR?",
      tagColor: "text-red-300",
    },

    yellow: {
      bg: "bg-yellow-600",
      title:
        "See what InsideEdge can do for your business specifically.",
      highlight: "bg-yellow-200 text-black",
      sub: "Free audit · Real answers · No fluff",
      btn: "bg-black text-white hover:bg-gray-900",
      tag: "YOUR BRAND COULD BE NEXT",
      tagColor: "text-yellow-200",
    },
  };

  const s = styles[variant];

  return (
    <section className={`${s.bg} py-10 mt-16`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className={`text-xs tracking-widest mb-2 ${s.tagColor}`}>
            {s.tag}
          </p>

          <h3
            onClick={handleClick}
            className={`
              text-xl md:text-2xl font-semibold
              inline-block px-2 py-1 rounded-md cursor-pointer
              transition-all duration-300 hover:scale-[1.02]
              ${s.highlight}
            `}
          >
            {s.title}
          </h3>

          <p className="text-sm mt-2 text-white/70">
            {s.sub}
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleClick}
          className={`
    px-6 py-3 rounded-lg
    font-semibold text-sm
    transition-all duration-300
    hover:scale-[1.05] active:scale-[0.95]
    ${s.btn}
  `}
        >
          Get my free audit →
        </button>

      </div>
    </section>
  );
}