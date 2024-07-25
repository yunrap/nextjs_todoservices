/*
 * <pre>
 * @title SearchBox.tsx
 * @desc 검색박스 공통컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.07.22
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.07.22.  윤예지  최초작성
 */
"use client";
import { FC, ChangeEvent, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

export const SearchBoxVariants = cva(
  //공통 CSS
  `rounded-3xl bg-slate-100 border-2 border-slate-900 items-center pl-[24px] pr-[24px] `,
  {
    //variant,size 개별설정
    variants: {
      variant: {
        default: "bg-slate-100",
        grey: "bg-slate-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

interface SearchBoxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof SearchBoxVariants> {
  inputRef?: any;
  children?: React.ReactElement;
  additionalClass?: string;
}

/**
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘 등 추가
 * @additionalClass 추가할 클래스 속성
 * @props 추가할 input 속성
 */
const SearchBox: FC<SearchBoxProps> = ({
  variant,
  inputRef,
  children,
  additionalClass,
  ...props
}) => {
  return (
    <div className="flex h-full">
      <input
        className={cn(SearchBoxVariants({ variant }), additionalClass)}
        ref={inputRef}
        type="text"
        {...props}
      >
        {children && children}
      </input>
    </div>
  );
};

export default SearchBox;
