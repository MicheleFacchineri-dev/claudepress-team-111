import type { FieldProps } from "@/contracts/blog";

export function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm text-ink-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-sm text-stamp">
          {error}
        </p>
      ) : null}
    </div>
  );
}
