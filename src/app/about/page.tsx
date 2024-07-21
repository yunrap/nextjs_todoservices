import type { NextPage } from "next";
import CheckBox from "@/components/CheckBox";
import Image from "next/image";
import Button from "@/components/Button";

const About: NextPage = () => {
  return (
    <div className="max-w-[1024px] m-auto p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto pt-[16px] lg:pt-[24px] justify-center h-full">
        <CheckBox variant={"default"} />
      </div>
      <div className=" w-full h-[311px] rounded-3xl bg-slate-50 border-2 border-slate-300 border-dashed"></div>
      <Image src="/images/img.svg" alt="home" width={64} height={64} />
      <div>
        <circle cx="32" cy="32" r="32" fill="#E2E8F0"></circle>
      </div>
      <textarea className="w-full h-[311px] rounded-3xl bg-yellow-50"></textarea>
      <div>
        <Button variant={"default"} size={"md"} label="수정 완료" />
        <Button variant={"red"} size={"md"} label="삭제하기" />
      </div>
    </div>
  );
};

export default About;
