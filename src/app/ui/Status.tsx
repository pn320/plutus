import { VariantProps, cva } from "cva";

interface StatusProps extends VariantProps<typeof statusClasses> {}

const statusClasses = cva(["w-2", "h-2", "rounded-full"], {
  variants: {
    status: {
      beta: ["bg-orange-5"],
      stable: ["bg-blue-5"],
    },
    defaultVariants: { status: "beta" },
  },
});

export const Status = ({ status }: StatusProps) => {
  return <div className={statusClasses({ status })} />;
};
