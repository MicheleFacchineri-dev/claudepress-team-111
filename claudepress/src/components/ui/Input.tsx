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
  const className = `w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
    invalid ? "border-red-500" : "border-gray-300"
  }`;

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
        className={className}
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
      className={className}
    />
  );
}
