"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // ✅ Auto open once
  useEffect(() => {
    const seen = sessionStorage.getItem("lead_popup_shown");

    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("lead_popup_shown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ ESC close
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Lock scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

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

      setTimeout(() => setOpen(false), 2000);

    } catch (error) {
      console.log(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={() => setOpen(false)}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-[fadeIn_0.3s_ease]"
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold">
          Let’s grow your brand
        </h2>

        <div className="inline-block mt-2 mb-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
            🚀 Get a free strategy call
          </span>
        </div>

        {/* SUCCESS */}
        {status === "success" && (
          <div className="text-center py-6">
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
          <div className="text-center py-6">
            <h3 className="text-lg font-semibold text-red-600">
              Something went wrong
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Please try again.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-blue-600 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* FORM */}
        {status === "idle" && (
          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              placeholder="Your name"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              placeholder="Phone number"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                bg-black text-white 
                py-3 rounded-lg 
                font-medium text-sm 
                flex items-center justify-center gap-2 
                transition-all duration-300 
                hover:bg-gray-900 
                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Get Free Strategy Call"
              )}
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full text-sm text-gray-500 mt-2 hover:text-black"
            >
              No thanks
            </button>


          </form>
        )}
      </div>
    </div>
  );
}