import type { EmptyStateProps } from "@/contracts/blog";

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border-y border-rule py-10 text-center">
      <h3 className="font-display text-lg text-ink">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
