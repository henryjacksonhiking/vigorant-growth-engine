"use client";

import * as React from "react";
import { HTMLMotionProps, MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextStaggerHoverProps {
  text: string;
  index: number;
}
interface HoverSliderImageProps {
  index: number;
  imageUrl: string;
}

interface HoverSliderContextValue {
  activeSlide: number;
  changeSlide: (index: number) => void;
}

function splitText(text: string) {
  const words = text.split(" ").map((word) => word.concat(" "));
  const characters = words.map((word) => word.split("")).flat(1);
  return { words, characters };
}

const HoverSliderContext = React.createContext<HoverSliderContextValue | undefined>(undefined);

function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext);
  if (context === undefined) {
    throw new Error("useHoverSliderContext must be used within a HoverSliderProvider");
  }
  return context;
}

export const HoverSlider = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const changeSlide = React.useCallback((index: number) => setActiveSlide(index), []);
    return (
      <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
        <section ref={ref} className={cn(className)} {...props}>
          {children}
        </section>
      </HoverSliderContext.Provider>
    );
  }
);
HoverSlider.displayName = "HoverSlider";

export const TextStaggerHover = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TextStaggerHoverProps
>(({ text, index, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const { characters } = splitText(text);
  const isActive = activeSlide === index;
  const handleMouse = () => changeSlide(index);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.3 }}>
      <div
        ref={ref}
        className={cn("relative overflow-hidden text-left cursor-pointer", className)}
        onMouseEnter={handleMouse}
        {...props}
      >
        <span className="sr-only">{text}</span>
        <span aria-hidden className="inline-block">
          {characters.map((char, i) => (
            <span key={`bottom-${i}`} className="relative inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "0%" }}
                animate={{ y: isActive ? "-110%" : "0%" }}
                transition={{ duration: 0.4, delay: i * 0.015, ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
              <motion.span
                className="absolute left-0 top-0 inline-block text-brand-purple"
                initial={{ y: "110%" }}
                animate={{ y: isActive ? "0%" : "110%" }}
                transition={{ duration: 0.4, delay: i * 0.015, ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>
      </div>
    </MotionConfig>
  );
});
TextStaggerHover.displayName = "TextStaggerHover";

export const clipPathVariants = {
  visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  hidden: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)" },
};

export const HoverSliderImageWrap = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
          className
        )}
        {...props}
      />
    );
  }
);
HoverSliderImageWrap.displayName = "HoverSliderImageWrap";

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & HoverSliderImageProps
>(({ index, imageUrl, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext();
  return (
    <motion.img
      ref={ref}
      src={imageUrl}
      variants={clipPathVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  );
});
HoverSliderImage.displayName = "HoverSliderImage";
