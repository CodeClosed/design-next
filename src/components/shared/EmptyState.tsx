import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EmptyState({
  title,
  description,
  actionLabel,
  onReset,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onReset?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-[#C5D0D8] bg-white px-6 py-14 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#EEF3F6] text-[#31566D]">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-[#142B3A]">{title}</h3>
      <p className="mt-1.5 max-w-md text-sm text-[#546470]">{description}</p>
      {actionLabel && onReset ? (
        <Button variant="outline" size="sm" onClick={onReset} className="mt-5">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
