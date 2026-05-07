import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center whitespace-nowrap font-semibold tracking-tight",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0BF26] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "disabled:pointer-events-none disabled:opacity-40 select-none",
          {
            // ── Primary: gold bg + navy text ──────────────────
            "bg-[#F0BF26] text-[#011226] shadow-[0_2px_8px_rgba(240,191,38,0.3)] hover:bg-[#e6b420] hover:shadow-[0_4px_16px_rgba(240,191,38,0.4)] hover:-translate-y-px active:scale-[0.98] active:brightness-95":
              variant === "default",

            // ── Outline: white bg + navy border + navy text ───
            "border border-[#E2E8F0] bg-white text-[#011226] shadow-[0_1px_3px_rgba(1,18,38,0.06)] hover:border-[#F0BF26] hover:text-[#011226] hover:shadow-[0_2px_8px_rgba(240,191,38,0.2)] hover:-translate-y-px active:scale-[0.98]":
              variant === "outline",

            // ── Ghost: transparent + navy text, gold on hover ─
            "text-[#64748B] hover:text-[#011226] hover:bg-[rgba(1,18,38,0.05)] active:scale-[0.98]":
              variant === "ghost",

            // ── Secondary: navy bg + white text ──────────────
            "bg-[#011226] text-white hover:bg-[#0a2240] hover:shadow-[0_4px_12px_rgba(1,18,38,0.25)] hover:-translate-y-px active:scale-[0.98]":
              variant === "secondary",

            // ── Sizes ─────────────────────────────────────────
            "h-10 px-5 rounded-[10px] text-sm": size === "default",
            "h-8 px-3.5 rounded-[8px] text-xs":   size === "sm",
            "h-13 px-8 rounded-[12px] text-base":  size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
