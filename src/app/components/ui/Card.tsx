"use client";

import classNames from "classnames";
import { VariantProps, cva } from "cva";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface CardProps
  extends VariantProps<typeof cardClasses>,
    PropsWithChildren {
  href: string;
  title: string;
}

const cardClasses = cva(
  [
    "h-48",
    "bg-gray-1",
    "w-[22rem]",
    "border-gray-2",
    "border",
    "rounded-lg",
    "relative",
    "after:absolute",
    "after:w-full",
    "after:h-full",
    "after:left-0",
    "after:top-0",
    "after:bg-noise",
    "transition-colors",
    "duration-300",
    "ease-in-out",
    // "hover:before:w-6",
    // "hover:before:h-6",
    // "hover:before:rounded-full",
    // "hover:before:blur-lg",
    // "overflow-hidden",
    // "hover:before:bg-gray-11/50",
    // "hover:before:absolute",
  ],
  {
    variants: {
      size: {
        large: ["w-[26rem]"],
        small: [],
      },
      defaultVariants: { size: "small" },
    },
  }
);

export const Card = ({ href, children, title, size }: CardProps) => {
  //   const [position, setPosition] = useState({ x: 0, y: 0 });
  //   let positions = [`before:top-${position.x}`, `before:left-${position.y}`];

  return (
    <Link
      href={href}
      //   onMouseMove={(event) => {
      //     event.preventDefault();
      //     setPosition({ x: event.clientX, y: event.clientY });
      //     positions = [`before:top-${position.y}`, `before:left-${position.x}`];
      //   }}
      className={classNames(
        cardClasses({ size })
        // `${positions[0]} ${positions[1]}`
      )}
    >
      <div className="flex flex-col p-4">
        <h1 className="font-mono">{title}</h1>
      </div>
    </Link>
  );
};
