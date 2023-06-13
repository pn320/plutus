import { VariantProps, cva } from "cva";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: ReactNode;
  href: string;
}

const buttonClasses = cva(
  [
    "h-12",
    "px-4",
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
    },
    defaultVariants: { variant: "primary" },
  }
);

export const Button = ({ href, children, variant }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant })}>
      {children}
    </Link>
  );
};
