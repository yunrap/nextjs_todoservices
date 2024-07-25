import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

export const ButtonVariants = cva(
  //공통 CSS
  `border-2 rounded-3xl border-slate-900 w-[3.5rem] md:w-[10rem]`,
  {
    //variant,size 개별설정
    variants: {
      variant: {
        default: "bg-slate-200",
        grey: "bg-slate-200",
        red: "bg-rose",
        violet: "bg-violet-600",
        lime: "bg-lime",
      },
      size: {
        default: "w-[3.5rem] h-[3.5rem]",
        md: "w-[164px] h-[52px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
1;

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
    <>
      <button
        className={cn(ButtonVariants({ variant, size }), additionalClass)}
        {...props}
      >
        {children && children}
        {label && label}
      </button>
    </>
  );
};

export default Button;
