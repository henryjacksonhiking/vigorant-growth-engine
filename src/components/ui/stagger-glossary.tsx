import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GlossaryItem {
  tempId: number;
  term: string;
  body: string;
}

interface CardProps {
  position: number;
  item: GlossaryItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const GlossaryCard: React.FC<CardProps> = ({ position, item, handleMove, cardSize }) => {
  const isCenter = position === 0;
  return (
    <div
      onClick={() => handleMove(position)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleMove(position);
      }}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-7 sm:p-8 transition-all duration-500 ease-in-out rounded-2xl flex flex-col",
        isCenter
          ? "z-10 bg-[hsl(var(--brand-deep))] text-white border-2 border-[hsl(var(--brand-purple))]"
          : "z-0 bg-white text-[hsl(var(--brand-deep))] border border-[hsl(var(--brand-purple)/0.18)] hover:border-[hsl(var(--brand-purple)/0.5)]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.55) * position}px) translateY(${
          isCenter ? -60 : position % 2 ? 18 : -18
        }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter
          ? "0 24px 60px -20px hsl(var(--brand-purple) / 0.55)"
          : "var(--shadow-card)",
      }}
      aria-label={item.term}
    >
      <h3
        className={cn(
          "font-extrabold leading-snug text-[16px] sm:text-[18px]",
          isCenter ? "text-white" : "text-brand-deep"
        )}
      >
        {item.term}
      </h3>
      <p
        className={cn(
          "mt-3 text-[13px] sm:text-[14px] leading-relaxed overflow-hidden",
          isCenter ? "text-white/85" : "text-ink-secondary"
        )}
      >
        {item.body}
      </p>
    </div>
  );
};

export const StaggerGlossary: React.FC<{ items: Omit<GlossaryItem, "tempId">[] }> = ({
  items,
}) => {
  const [cardSize, setCardSize] = useState(340);
  const [list, setList] = useState<GlossaryItem[]>(
    items.map((it, i) => ({ ...it, tempId: i }))
  );

  const handleMove = (steps: number) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const update = () => {
      const sm = window.matchMedia("(min-width: 640px)").matches;
      setCardSize(sm ? 340 : 270);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize + 140 }}
    >
      {list.map((it, index) => {
        const position =
          list.length % 2 ? index - (list.length + 1) / 2 : index - list.length / 2;
        return (
          <GlossaryCard
            key={it.tempId}
            position={position}
            item={it}
            handleMove={handleMove}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          aria-label="Previous"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[hsl(var(--brand-purple)/0.25)] text-brand-deep hover:bg-[hsl(var(--brand-purple))] hover:text-white transition-colors shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          aria-label="Next"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[hsl(var(--brand-purple)/0.25)] text-brand-deep hover:bg-[hsl(var(--brand-purple))] hover:text-white transition-colors shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
