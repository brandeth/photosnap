import type { ComponentProps } from "react";

export type ArrowIconProps = ComponentProps<"svg"> & {
  color?: string;
};

export function ArrowIcon({
  color = "currentColor",
  ...props
}: ArrowIconProps) {
  return (
    <svg
      width="43"
      height="13"
      viewBox="0 0 43 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 6.35355H41.864" stroke={color} />
      <path
        d="M35.4282 0.353554L41.4282 6.35355L35.4282 12.3536"
        stroke={color}
      />
    </svg>
  );
}
