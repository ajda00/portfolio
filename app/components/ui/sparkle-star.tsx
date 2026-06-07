interface Props {
  size?: number;
  className?: string;
  /** Tailwind utility class for fill, e.g. "fill-coral" or "fill-yellow" */
  variant?: "coral" | "yellow" | "cream" | "green";
}

const fillByVariant: Record<NonNullable<Props["variant"]>, string> = {
  coral: "fill-coral",
  yellow: "fill-yellow",
  cream: "fill-cream",
  green: "fill-green",
};

/**
 * 4-point sparkle star — pure SVG. Used as ambient decoration around
 * hero headlines and photo frames.
 */
export function SparkleStar({
  size = 32,
  className = "",
  variant = "coral",
}: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={`${fillByVariant[variant]} ${className}`}
    >
      <path d="M16 0 C16.5 8.5 23.5 15.5 32 16 C23.5 16.5 16.5 23.5 16 32 C15.5 23.5 8.5 16.5 0 16 C8.5 15.5 15.5 8.5 16 0 Z" />
    </svg>
  );
}
