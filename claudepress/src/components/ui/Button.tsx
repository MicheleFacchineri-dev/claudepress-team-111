import type { ButtonProps } from "@/contracts/blog";

const VARIANT_CLASSES = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-ink text-ink hover:bg-ink/5",
  danger: "bg-stamp text-paper hover:bg-stamp/85",
} as const;

export function Button({
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:cursor-not-allowed disabled:opacity-40 ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </button>
  );
}
