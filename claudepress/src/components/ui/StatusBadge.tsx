import type { PostStatus, StatusBadgeProps } from "@/contracts/blog";

const STATUS_STYLES: Record<PostStatus, { label: string; className: string }> = {
  draft: { label: "Bozza", className: "bg-stamp" },
  published: { label: "Pubblicato", className: "bg-moss" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = STATUS_STYLES[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${className}`} aria-hidden="true" />
      {label}
    </span>
  );
}
