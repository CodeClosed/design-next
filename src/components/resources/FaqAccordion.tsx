"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/content";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#DCE2E6] rounded-sm border border-[#DCE2E6] bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-btn-${item.id}`;

        return (
          <div key={item.id} className="px-5 py-4 sm:px-6">
            <h3 className="text-base font-bold text-[#142B3A]">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 py-1 text-left"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#31566D] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="mt-3 border-t border-[#F0F2F4] pt-3 text-sm leading-relaxed text-[#546470]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
