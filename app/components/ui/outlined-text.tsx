import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Stroke weight in px. */
  thin?: boolean;
}

/**
 * Outlined / stroke-only display text. Uses `-webkit-text-stroke` with
 * transparent fill. The text's color (inherited) becomes the stroke color.
 *
 * Use behind hero headlines for the layered "RTFOLIO / TFOLIO" effect.
 */
export function OutlinedText({ children, className = "", thin = false }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`${thin ? "text-outline-thin" : "text-outline"} ${className}`}
    >
      {children}
    </span>
  );
}
