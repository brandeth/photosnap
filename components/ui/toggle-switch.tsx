"use client";

import type { ChangeEvent, ComponentPropsWithoutRef } from "react";

type ClassValue = string | false | null | undefined;

export type ToggleSwitchProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "className" | "size" | "type"
> & {
  className?: string;
  onCheckedChange?: (
    checked: boolean,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

function joinClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

export function ToggleSwitch({
  className,
  disabled,
  onChange,
  onCheckedChange,
  ...props
}: ToggleSwitchProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event);
    onCheckedChange?.(event.currentTarget.checked, event);
  }

  return (
    <label
      data-slot="toggle-switch"
      className={joinClassNames(
        "inline-flex w-fit items-center",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />

      <span
        aria-hidden="true"
        className="relative inline-flex h-8 w-16 rounded-full bg-neutral-300 transition-[background-color,opacity] duration-200 before:absolute before:left-1 before:top-1 before:h-6 before:w-6 before:rounded-full before:bg-neutral-950 before:transition-transform before:duration-200 peer-checked:before:translate-x-8 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-neutral-950 peer-disabled:opacity-50"
      />
    </label>
  );
}
