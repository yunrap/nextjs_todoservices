/*
 * <pre>
 * @title Gnb.tsx
 * @desc 내비게이션바 공통컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.07.22
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.07.22.  윤예지  최초작성
 */
import Image from "next/image";
import Link from "next/link";
import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

export const GnbVariants = cva(
  //공통 CSS
  ``,
  {
    variants: {
      img: {
        default: "/images/gnb_small.svg",
        md: "/images/gnb_md_lg.svg",
      },
    },
    defaultVariants: {
      img: "default",
    },
  }
);

interface GnbProps extends VariantProps<typeof GnbVariants> {
  width: number;
  height: number;
  children?: React.ReactElement;
  additionalClass?: string;
}

const Gnb: FC<GnbProps> = ({
  img,
  width,
  height,
  children,
  additionalClass,
}) => {
  return (
    <>
      <Link href="/">
        <Image
          src={cn(GnbVariants({ img }))}
          alt="home"
          width={width}
          height={height}
        />
      </Link>
    </>
  );
};

export default Gnb;
