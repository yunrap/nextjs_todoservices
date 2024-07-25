"use client";
import { CheckBoxProps } from "@/types/ResultDataType";
import CheckBox from "../CheckBox";
import { useRouter } from "next/navigation";
import Image from "next/image";

const IndexCheckBoxList = (props: {
  type: "TODO" | "DONE"; // 두가지유형
  checkBoxList?: CheckBoxProps[];
  color?: "default" | "violet";
  handleChangeCheck?: any;
}) => {
  const { checkBoxList, color, type, handleChangeCheck } = props;
  const router = useRouter();

  // 상세보기
  const handleClickDetail = (obj: CheckBoxProps) => {
    router.push(`/detail/${obj.id}`);
  };

  return (
    <div>
      {checkBoxList?.length !== 0 ? (
        checkBoxList?.map((obj: CheckBoxProps) => (
          <div
            key={obj.id}
            className="pt-[1rem]"
            onClick={() => handleClickDetail(obj)}
          >
            <CheckBox
              onChange={(e) => {
                handleChangeCheck(e);
              }}
              variant={color}
              label={obj.name}
              id={obj.id}
              checked={obj.isCompleted}
            />
          </div>
        ))
      ) : (
        <>
          <div className="flex justify-center">
            <Image
              src={
                `${type}` == "TODO"
                  ? "/images/empty.svg"
                  : "/images/empty_lg.svg"
              }
              alt="done"
              width={120}
              height={120}
            />
          </div>
          <p className="text-center">
            <span className="text-slate-400">
              {type == "TODO" ? "할 일이 없어요." : "아직 다 한 일이 없어요"}
            </span>
            <br />
            <span className="text-slate-400">
              {type == "TODO"
                ? "TODO를 새롭게 추가해주세요!"
                : "해야 할 일을 체크해보세요!"}
            </span>
          </p>
        </>
      )}
      {}
    </div>
  );
};

export default IndexCheckBoxList;
