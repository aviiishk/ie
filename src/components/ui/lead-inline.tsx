"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function LeadInline() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "service_ftb1odg",
        "template_564tju6",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          time: new Date().toLocaleString(),
        },
        "jCugKLg8ELccTZHVE"
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "" });

    } catch (error) {
      console.log(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="lead-form"
      className="bg-white shadow-xl rounded-2xl p-6 max-w-md mx-auto mt-20 border transition-all duration-300"
    >
      <h2 className="text-xl font-semibold">
        Ready to build a brand that actually grows?
      </h2>

      <div className="inline-block mt-2 mb-4">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
          😀Book a free 30-minute brand audit. We’ll look at your current presence, tell you exactly what’s holding you back, and show you what’s possible. No pitch. No pressure.
        </span>
      </div>

      {/* SUCCESS */}
      {status === "success" && (
        <div className="text-center py-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-green-600">
            Request Sent Successfully
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            We’ll contact you shortly.
          </p>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div className="text-center py-6 animate-fade-in">
          <h3 className="text-lg font-semibold text-red-600">
            Something went wrong
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Please try again.
          </p>
        </div>
      )}

      {/* FORM */}
      {status === "idle" && (
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            placeholder="Your name"
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Phone number"
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full 
              bg-[#F4B400] text-black 
              py-3 rounded-lg 
              font-semibold text-sm 
              flex items-center justify-center gap-2 
              transition-all duration-300 
              hover:bg-[#e0a800] hover:scale-[1.02]
              active:scale-[0.97]
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Book my free brand audit"
            )}
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            We respond within 24 hours · No contracts · Based in Guwahati
          </p>
        </form>
      )}
    </div>
  );
}