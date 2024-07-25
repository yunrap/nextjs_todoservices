/*
 * <pre>
 * @title CheckBox.tsx
 * @desc 체크리스트 컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.07.25
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.07.25.  윤예지  최초작성
 */

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";

export const checkboxVariants = cva(
  `rounded-[27px] bg-white border-slate-900 border-2 h-[50px]`,
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

/**
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘 등 추가
 * @additionalClass 추가할 클래스 속성
 * @props 추가할 input 속성
 */
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
      <div className="flex h-full items-center pl-[12px]">
        <div className="flex">
          <input
            type="checkbox"
            className={`opacity-0 absolute w-8 h-8 show show peer ${additionalClass}`}
            id={id}
            name="horns"
            checked={checked}
            {...props}
            onClick={(e) => e.stopPropagation()}
          />
          <label
            className={`bg-[url('/images/checkbox.svg')] w-8 h-8 bg-no-repeat peer-checked:bg-[url('/images/checkbox_ck.svg')]`}
            htmlFor={id}
          ></label>
        </div>
        {children && children}
        <p className={`pl-[4.5px] ${checked && "line-through"}`}>{label && label}</p>
      </div>
    </div>
  );
};
export default CheckBox;
