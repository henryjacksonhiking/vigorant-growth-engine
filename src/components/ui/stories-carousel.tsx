"use client";

import type {
  ComponentProps,
  HTMLAttributes,
  VideoHTMLAttributes,
} from "react";
import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type StoriesProps = ComponentProps<typeof Carousel>;

export const Stories = ({ className, opts, ...props }: StoriesProps) => (
  <Carousel
    className={cn("w-full", className)}
    opts={{ align: "start", dragFree: true, ...opts }}
    {...props}
  />
);

export type StoriesContentProps = ComponentProps<typeof CarouselContent>;

export const StoriesContent = ({ className, ...props }: StoriesContentProps) => (
  <CarouselContent className={cn("-ml-3 pr-3 sm:pr-0", className)} {...props} />
);

export type StoryProps = HTMLAttributes<HTMLDivElement>;

export const Story = ({ className, children, ...props }: StoryProps) => (
  <CarouselItem className="basis-auto pl-3">
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-brand-deep shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  </CarouselItem>
);

const tRegex = /t=(\d+(?:\.\d+)?)/;

export type StoryVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export const StoryVideo = ({ className, ...props }: StoryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const initialTimeRef = useRef(0);

  useEffect(() => {
    const src = (props.src ?? "") as string;
    let initialTime = 0;
    if (typeof src === "string") {
      const hashIndex = src.indexOf("#");
      if (hashIndex !== -1) {
        const tMatch = src.slice(hashIndex + 1).match(tRegex);
        if (tMatch) initialTime = Number.parseFloat(tMatch[1]);
      }
    }
    initialTimeRef.current = initialTime;
  }, [props.src]);

  const play = () => videoRef.current?.play();
  const reset = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = initialTimeRef.current;
  };

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseOver={play}
      onMouseOut={reset}
      onFocus={play}
      onBlur={reset}
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  );
};

export type StoryImageProps = ComponentProps<"img"> & { alt: string };

export const StoryImage = ({ className, alt, ...props }: StoryImageProps) => (
  <img
    alt={alt}
    loading="lazy"
    className={cn(
      "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
      className,
    )}
    {...props}
  />
);

export type StoryOverlayProps = HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "bottom";
};

export const StoryOverlay = ({
  className,
  side = "bottom",
  ...props
}: StoryOverlayProps) => {
  const pos =
    side === "top"
      ? "top-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/35 to-transparent"
      : "bottom-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/55 to-transparent";
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-x-0 h-2/3", pos, className)}
      {...props}
    />
  );
};

export type StoryAuthorProps = HTMLAttributes<HTMLDivElement>;

export const StoryAuthor = ({ className, children, ...props }: StoryAuthorProps) => (
  <div
    className={cn(
      "absolute left-4 right-4 top-4 z-10 flex items-center gap-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export type StoryAuthorImageProps = ComponentProps<typeof Avatar> & {
  src?: string;
  name?: string;
  fallback?: string;
};

export const StoryAuthorImage = ({
  src,
  fallback,
  name,
  className,
  ...props
}: StoryAuthorImageProps) => (
  <Avatar className={cn("h-8 w-8 ring-2 ring-white/80", className)} {...props}>
    {src && <AvatarImage src={src} alt={name ?? ""} />}
    <AvatarFallback className="bg-brand-purple text-white text-[11px] font-semibold">
      {fallback || name?.charAt(0)?.toUpperCase()}
    </AvatarFallback>
  </Avatar>
);

export type StoryAuthorNameProps = HTMLAttributes<HTMLParagraphElement>;

export const StoryAuthorName = ({ className, ...props }: StoryAuthorNameProps) => (
  <p
    className={cn(
      "font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white drop-shadow",
      className,
    )}
    {...props}
  />
);

export type StoryTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const StoryTitle = ({ className, ...props }: StoryTitleProps) => (
  <h3
    className={cn(
      "absolute inset-x-4 bottom-12 z-10 font-bold text-white text-[18px] leading-tight drop-shadow",
      className,
    )}
    {...props}
  />
);

export type StoryDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const StoryDescription = ({ className, ...props }: StoryDescriptionProps) => (
  <p
    className={cn(
      "absolute inset-x-4 bottom-4 z-10 text-[12px] leading-snug text-white/85 line-clamp-2",
      className,
    )}
    {...props}
  />
);
