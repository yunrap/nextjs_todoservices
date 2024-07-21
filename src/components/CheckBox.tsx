import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

export const checkboxVariants = cva(
  `rounded-[27px] border-slate-900 border-2`,
  {
    variants: {
      variant: {
        default: "bg-white",
        violet: "bg-violet-100",
      },
      size: {
        default: "",
        md: " w-[6rem] h-[2rem] text-[1rem] rounded-md",
        lg: "w-[21rem] h-[7rem] text-[2rem] rounded-3xl",
        wlg: "w-[24rem] h-[5rem] text-[2rem]",
        rounded: "w-[6rem] h-[6rem] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface CheckBoxProps extends VariantProps<typeof checkboxVariants> {
  label?: string;
  children?: React.ReactElement;
  additionalClass?: string;
}

const CheckBox: FC<CheckBoxProps> = ({
  variant,
  size,
  children,
  label,
  additionalClass,
  ...props
}) => {
  return (
    <div className={cn(checkboxVariants({ variant }))}>
      <input type="checkbox" id="horns" name="horns" />
      <label htmlFor="horns">Horns</label>
    </div>
  );
};
export default CheckBox;
