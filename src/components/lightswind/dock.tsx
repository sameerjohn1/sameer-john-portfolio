"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLDivElement | null>,
  spring: { mass: number; stiffness: number; damping: number },
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;

    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };

    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );

  return useSpring(targetSize, spring);
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
  badgeCount?: number;
  badgeColor?: string;
  itemBackground?: string;
  itemBorderColor?: string;
  borderRadius?: string;
  hideLabels?: boolean;
  labelPosition?: "top" | "bottom";
  labelBackground?: string;
  labelTextColor?: string;
}

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  baseItemSize,
  magnification,
  distance,
  spring,
  badgeCount,
  badgeColor = "bg-red-500",
  itemBackground,
  itemBorderColor,
  borderRadius,
  hideLabels = false,
  labelPosition = "top",
  labelBackground,
  labelTextColor,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const { isDark } = useTheme();

  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring,
  );

  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) => {
      setShowLabel(value === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  const labelOffsetStyle =
    labelPosition === "bottom"
      ? { top: "calc(100% + 8px)", bottom: "auto" }
      : { bottom: "calc(100% + 8px)", top: "auto" };

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center",
        "cursor-pointer",
        isDark
          ? "bg-zinc-800 border border-zinc-700"
          : "bg-white border border-zinc-200",
        "shadow-sm hover:shadow-md",
        "transition-shadow duration-200",
        isDark ? "text-zinc-500" : "text-zinc-800",
        borderRadius ?? "rounded-full",
        itemBackground,
        itemBorderColor ? `border-2 ${itemBorderColor}` : "",
      )}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      <div
        className={cn(
          "flex items-center justify-center",
          isDark ? "text-zinc-500" : "text-zinc-800",
        )}
      >
        {icon}
      </div>

      {/* Badge */}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span
          className={cn(
            "absolute -top-2 -right-2",
            "flex items-center justify-center",
            "w-5 h-5 rounded-full",
            "text-xs font-bold text-white",
            badgeColor,
          )}
        >
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}

      {/* Tooltip */}
      {!hideLabels && (
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{
                opacity: 0,
                y: labelPosition === "bottom" ? -4 : 4,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: labelPosition === "bottom" ? -4 : 4,
              }}
              transition={{ duration: 0.18 }}
              className={cn(
                "absolute left-1/2 z-50",
                "w-fit whitespace-pre",
                "rounded-lg",
                "border",
                isDark
                  ? "border-zinc-700 bg-zinc-800 text-violet-300"
                  : "border-violet-200 bg-white text-violet-600",
                "px-3 py-1.5",
                "text-xs font-semibold",
                "shadow-md",
                "pointer-events-none",
              )}
              style={{
                x: "-50%",
                ...labelOffsetStyle,
              }}
              role="tooltip"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  badgeCount?: number;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  spring?: {
    mass: number;
    stiffness: number;
    damping: number;
  };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
  position?: "bottom" | "top";
  gap?: string;
  itemBackground?: string;
  itemBorderColor?: string;
  borderRadius?: string;
  badgeColor?: string;
  hideLabels?: boolean;
  labelPosition?: "top" | "bottom";
  labelBackground?: string;
  labelTextColor?: string;
  blurBackground?: boolean;
  multiBorder?: boolean;
  showSeparator?: boolean;
  separatorIndex?: number;
}

export default function Dock({
  items,
  className = "",
  spring = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
  gap = "gap-4",
  itemBackground = "bg-white",
  itemBorderColor,
  borderRadius,
  badgeColor = "bg-red-500",
  hideLabels = false,
  labelPosition = "top",
  labelBackground = "bg-white",
  labelTextColor = "text-violet-600",
  blurBackground = false,
  multiBorder = true,
  showSeparator = false,
  separatorIndex,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const { isDark } = useTheme();

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight],
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring,
  );

  return (
    <motion.div
      style={{
        height: animatedHeight,
      }}
      className="mx-2 flex max-w-full items-center justify-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          "absolute bottom-2 left-1/2",
          "-translate-x-1/2",
          "flex items-center justify-center",
          "w-fit",
          "transition-all duration-300",

          multiBorder
            ? [
                "p-[3px]",
                "rounded-[24px] sm:rounded-[28px]",
                "border",
                isDark
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-zinc-200 bg-white",
                "shadow-lg",
              ].join(" ")
            : "",

          className,
        )}
        style={{
          height: panelHeight,
        }}
        role="toolbar"
        aria-label="Application dock"
      >
        <div
          className={cn(
            "flex items-end",
            "w-fit",
            "rounded-[20px] sm:rounded-[24px]",
            "px-4 pb-2",
            "h-full",
            gap,

            multiBorder
              ? [
                  "border",
                  isDark
                    ? "border-zinc-700 bg-zinc-900"
                    : "border-zinc-200 bg-white",
                  "shadow-sm",
                ].join(" ")
              : [
                  isDark ? "bg-zinc-900" : "bg-white",
                  "border",
                  isDark ? "border-zinc-700" : "border-zinc-200",
                  "shadow-sm",
                ].join(" "),
          )}
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <DockItem
                icon={item.icon}
                label={item.label}
                onClick={item.onClick}
                mouseX={mouseX}
                baseItemSize={baseItemSize}
                magnification={magnification}
                distance={distance}
                spring={spring}
                badgeCount={item.badgeCount}
                badgeColor={badgeColor}
                itemBackground={itemBackground}
                itemBorderColor={itemBorderColor}
                borderRadius={borderRadius}
                hideLabels={hideLabels}
                labelPosition={labelPosition}
                labelBackground={labelBackground}
                labelTextColor={labelTextColor}
              />

              {showSeparator && separatorIndex === index && (
                <div
                  className={cn(
                    "self-center h-8 w-px mx-1 shrink-0",
                    isDark ? "bg-zinc-700" : "bg-zinc-200",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
