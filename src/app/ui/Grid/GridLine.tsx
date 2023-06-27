import classNames from "classnames";
import { VariantProps, cva } from "cva";

interface GridLineProps extends VariantProps<typeof gridClasses> {}

const gridClasses = cva(["absolute", "bg-[length:5px_1px]"], {
  variants: {
    orientation: {
      vertical: [],
      horizontal: [],
    },
    size: {
      large: [],
      small: [],
    },
    position: {
      left: [],
      top: [],
      bottom: [],
      right: [],
    },
  },
});

export const GridLine = ({ orientation, size, position }: GridLineProps) => {
  return <div className={classNames(orientation, size, position)} />;
};
