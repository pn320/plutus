import { cva } from "cva";

const cardStyles = cva([], {
  variants: {
    size: {
      large: [],
      small: [],
    },
  },
});

export const Card = () => {
  return <button></button>;
};
