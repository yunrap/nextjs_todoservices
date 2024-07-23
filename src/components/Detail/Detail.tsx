"use client";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const detail = () => {
  const params = useParams();
  const router = useRouter();
  const { isLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ["detail"],
    queryFn: async () => {
      const response = await fetch(
        `https://assignment-todolist-api.vercel.app/api/yunyeji/items/${params.idx}`
      );
      const data = await response.json();
      return data;
    },
  });

  // 수정
  const onClickModify = () => {
    console.log(22);
  };

  // 등록
  const onClickDelete = async () => {
    try {
      await axios.delete(`/api/yunyeji/items/${params.idx}`);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-[1024px] m-auto p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto pt-[16px] lg:pt-[24px] justify-center h-full">
        <CheckBox variant={"default"} label={data?.name} />
      </div>
      <div className=" w-full h-[311px] rounded-3xl bg-slate-50 border-2 border-slate-300 border-dashed"></div>
      <Image src="/images/img.svg" alt="home" width={64} height={64} />
      <div>
        <circle cx="32" cy="32" r="32" fill="#E2E8F0"></circle>
      </div>
      <textarea className="w-full h-[311px] rounded-3xl bg-yellow-50"></textarea>
      <div>
        <Button
          onClick={onClickModify}
          variant={"default"}
          size={"md"}
          label="수정 완료"
        />
        <Button
          onClick={onClickDelete}
          variant={"red"}
          size={"md"}
          label="삭제하기"
        />
      </div>
    </div>
  );
};

export default detail;
