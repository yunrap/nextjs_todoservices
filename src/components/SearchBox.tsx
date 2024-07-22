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
import { useState, FC, ChangeEvent } from "react";
import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

export const SearchBoxVariants = cva(
  //공통 CSS
  `rounded-3xl bg-slate-100 border-2 border-slate-900`,
  {
    //variant,size 개별설정
    variants: {
      variant: {
        default: "bg-slate-200",
        grey: "bg-slate-200",
        red: "bg-rose",
      },
      size: {
        default: "w-[17.5rem] h-[3.5rem]",
        md: "w-[17.5rem] h-[3.5rem]",
        lg: "w-[32.3rem] h-[3.5rem]",
        wlg: "w-[63.5rem] h-[3.5rem]",
        rounded: "w-[6rem] h-[6rem] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

interface SearchBoxProps extends VariantProps<typeof SearchBoxVariants> {
  value?: InputValue;
  onChange?: (ev: InputChangeEvent) => void;
  children?: React.ReactElement;
  additionalClass?: string;
}

/**
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘 등 추가
 * @additionalClass 추가할 클래스 속성
 * @props 추가할 버튼 속성
 */
const SearchBox: FC<SearchBoxProps> = ({
  value = "",
  onChange,
  variant,
  size,
  children,
  additionalClass,
}) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);

  const changeHandler = (ev: InputChangeEvent) => {
    setInputValue(ev.target.value);
    onChange && onChange(ev); // optional로 인한 코드
  };

  return (
    <div className="">
      <input
        className={cn(SearchBoxVariants({ size }), additionalClass)}
        type="text"
        placeholder="할 일을 입력해주세요."
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
