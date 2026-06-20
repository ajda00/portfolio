"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          aria-hidden="true"
          className={cn(
            `
            [--cream-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)]
            [--aurora:repeating-linear-gradient(100deg,oklch(78%_0.10_265)_10%,oklch(84%_0.07_290)_15%,oklch(80%_0.09_275)_20%,oklch(88%_0.05_310)_25%,oklch(76%_0.11_260)_30%)]
            [background-image:var(--cream-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            blur-[10px]
            after:content-[''] after:absolute after:inset-0
            after:[background-image:var(--cream-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed]
            after:mix-blend-soft-light
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
};
