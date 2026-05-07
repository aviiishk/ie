"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("lead-form");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      el.classList.add("ring-2", "ring-yellow-400");

      setTimeout(() => {
        el.classList.remove("ring-2", "ring-yellow-400");
      }, 1500);

      setTimeout(() => {
        const input = el.querySelector("input");
        (input as HTMLInputElement)?.focus();
      }, 400);
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50

        bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500
        text-black

        px-6 py-3 rounded-full
        shadow-xl

        text-sm font-semibold
        flex items-center gap-2

        animate-pulse
        hover:animate-none

        transition-all duration-300
        hover:scale-[1.08]
        active:scale-[0.95]
      "
    >
       Free Strategy Call
    </button>
  );
}