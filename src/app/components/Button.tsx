import { VariantProps, cva } from "cva";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: ReactNode;
  href: string;
  icon?: JSX.Element;
}

const buttonClasses = cva(
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "border",
    "font-light",
    "transition-colors",
    "duration-200",
    "ease-in",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-white",
          "text-gray-11",
          "hover:border-black",
          "border-gray-2",
        ],
        secondary: [
          "bg-black",
          "hover:bg-white",
          "text-white",
          "hover:text-black",
          "hover:border-black",
          "border-transparent",
        ],
      },
      size: {
        small: ["h-9", "px-4", "text-sm"],
        large: ["h-12", "px-3"],
      },
    },
    defaultVariants: { variant: "primary", size: "large" },
  }
);

export const Button = ({
  href,
  icon,
  children,
  variant,
  size,
}: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant, size })}>
      {icon ? <span className="mr-2">{icon}</span> : <></>}
      {children}
    </Link>
  );
};
