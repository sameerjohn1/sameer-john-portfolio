import { cn } from "../lib/utils";

export interface AuroraTextEffectProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blurAmount?:
    | "blur-none"
    | "blur-sm"
    | "blur-md"
    | "blur-lg"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl"
    | string;
  animationSpeed?: {
    border?: number;
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
}

export function AuroraTextEffect({
  text,
  className,
  textClassName,
  fontSize = "clamp(3rem, 8vw, 7rem)",
  animationSpeed = {
    border: 6,
    first: 5,
    second: 5,
    third: 3,
    fourth: 13,
  },
}: AuroraTextEffectProps) {
  const animationDuration = Math.max(
    2,
    Math.min(
      animationSpeed.first || 5,
      animationSpeed.second || 5,
      animationSpeed.third || 3,
      animationSpeed.fourth || 13,
    ),
  );

  const keyframes = `
    @keyframes violet-text {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  `;

  return (
    <div
      className={cn(
        "bg-white flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <style>{keyframes}</style>

      <div className="text-center">
        <h2
          className={cn(
            "font-extrabold tracking-tight",
            "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600",
            "bg-[length:200%_200%]",
            "bg-clip-text text-transparent",
            textClassName,
          )}
          style={{
            fontSize,
            animation: `violet-text ${animationDuration}s ease-in-out infinite`,
          }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
