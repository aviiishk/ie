"use client";

import { useEffect, useState } from "react";

export default function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const phone = "919678153730"; 
  const message = "Hi, I want a free strategy call";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (!visible) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 left-6 z-50

        bg-green-500 text-white
        px-5 py-3 rounded-full
        shadow-xl

        text-sm font-semibold
        flex items-center gap-2

        animate-[pulseGlowGreen_2s_infinite]

        hover:bg-green-600 hover:scale-[1.05]
        active:scale-[0.95]

        transition-all duration-300
      "
    >
      💬 Chat on WhatsApp
    </a>
  );
}