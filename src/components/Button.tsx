import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

export const ButtonVariants = cva(
  //공통 CSS
  `border-2 rounded-3xl border-slate-900`,
  {
    //variant,size 개별설정
    variants: {
      variant: {
        default: "bg-slate-200",
        grey: "bg-slate-200",
        red: "bg-rose",
      },
      size: {
        default: "w-[164.35px] h-[52px]",
        md: "w-[164.35px] h-[52px]",
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

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  children?: React.ReactElement;
  additionalClass?: string;
}

/**
 * @variant 색상 지정 ex) gray, blue, red
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘 등 추가
 * @label String을 넣어 버튼 라벨지정
 * @additionalClass 추가할 클래스 속성
 * @props 추가할 버튼 속성
 */
const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  label,
  additionalClass,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), additionalClass)}
      {...props}
    >
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
