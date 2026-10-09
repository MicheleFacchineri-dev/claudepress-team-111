"use client"; // serve onChange su un controllo DOM, non esprimibile in un server component

import type { InputProps } from "@/contracts/blog";

export function Input({
  id,
  name,
  value,
  onChange,
  multiline,
  placeholder,
  invalid,
}: InputProps) {
  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={invalid}
        rows={6}
        className={`w-full rounded-sm border px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-ink/30 ${
          invalid ? "border-stamp" : "border-rule"
        }`}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-invalid={invalid}
      className={`w-full border-0 border-b bg-transparent px-0.5 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink ${
        invalid ? "border-stamp" : "border-rule"
      }`}
    />
  );
}
