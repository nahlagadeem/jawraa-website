import type { CSSProperties, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div
      className={["jawraa-fade-in", className].filter(Boolean).join(" ")}
      style={{ "--jawraa-fade-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
