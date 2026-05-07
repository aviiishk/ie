import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[12px] border border-[#E2E8F0] bg-white p-6",
        "shadow-[0_1px_4px_rgba(1,18,38,0.06),0_4px_12px_rgba(1,18,38,0.04)]",
        "transition-all duration-200 ease-out",
        "hover:border-[#F0BF26]/60 hover:shadow-[0_4px_20px_rgba(240,191,38,0.15),0_1px_4px_rgba(1,18,38,0.07)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
