import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";

export const checkboxVariants = cva(
  `rounded-[27px] bg-white border-slate-900 border-2`,
  {
    variants: {
      variant: {
        default: "bg-white",
        violet: "bg-violet-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CheckBoxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  id?: string;
  children?: React.ReactElement;
  additionalClass?: string;
  checked?: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({
  variant,
  children,
  label,
  id,
  additionalClass,
  checked,
  ...props
}) => {
  return (
    <div className={cn(checkboxVariants({ variant }))}>
      <div className="flex">
        <label
          className={`bg-[url('/images/checkbox.svg')] bg-no-repeat w-8 h-8 checked:bg-[url('/images/checkbox_ck.svg')]`}
          htmlFor="horns"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            className={`w-8 h-8  ${additionalClass}`}
            id={id}
            name="horns"
            checked={checked}
            {...props}
          />
        </label>
        {children && children}
        {label && label}
      </div>
    </div>
  );
};
export default CheckBox;
