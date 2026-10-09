import type { EmptyStateProps } from "@/contracts/blog";

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      ) : null}
    </div>
  );
}
