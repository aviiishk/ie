"use client";

import React from "react";

type Testimonial = {
  role: string;
  company: string;
  content: string;
};

const DATA: Testimonial[] = [
  {
    role: "Marketing Head",
    company: "Real Estate Brand",
    content:
      "InsideEdge Marketing helped us fix what three other agencies couldn’t consistency. Within 6 weeks, our cost per lead dropped by nearly 40%.",
  },
  {
    role: "Founder",
    company: "E-commerce Brand",
    content:
      "We came in with zero funnel. Now we’re closing deals predictably every month.",
  },
  {
    role: "Co-Founder",
    company: "D2C Food Brand",
    content:
      "Our ROAS went from 1.6× to 3.9× in under 90 days.",
  },
  {
    role: "Director",
    company: "Healthcare Company",
    content:
      "Weekly optimisations, clear communication, no fluff. Best investment we made.",
  },
  {
    role: "Sales Head",
    company: "SaaS Company",
    content:
      "Better leads. Not just more leads. Sales team actually enjoys calling now.",
  },
  {
    role: "Founder",
    company: "Consumer Brand",
    content:
      "From onboarding to live campaigns in under 10 days.",
  },
  {
    role: "COO",
    company: "Wellness Brand",
    content:
      "Every rupee tracked, every decision explained.",
  },
];

function Card({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 w-72 mx-3 shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
      <p className="text-sm text-[#011226] leading-relaxed">
        “{item.content}”
      </p>

      <div className="mt-4">
        <p className="font-semibold text-[#011226] text-sm">
           {item.role}
        </p>
        <p className="text-xs text-gray-500">{item.company}</p>
      </div>
    </div>
  );
}

function Row({
  data,
  reverse = false,
}: {
  data: Testimonial[];
  reverse?: boolean;
}) {
  const doubled = [...data, ...data];

  return (
    <div className="overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

      <div
        className="flex w-max"
        style={{
          animation: `scroll 25s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-20">

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#011226]">
            Real Results. Real Clients.
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Trusted by brands that care about growth.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-6">
          <Row data={DATA.slice(0, 4)} />
          <Row data={DATA.slice(3, 7)} reverse />
        </div>

      </div>
    </section>
  );
}