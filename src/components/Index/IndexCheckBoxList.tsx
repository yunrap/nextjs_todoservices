"use client";
import { CheckBoxProps } from "@/types/ResultDataType";
import CheckBox from "../CheckBox";
import { useRouter } from "next/navigation";
import { InputChangeEvent } from "../SearchBox";
import axios from "axios";

const IndexCheckBoxList = (props: { checkBoxList?: CheckBoxProps[] }) => {
  const { checkBoxList } = props;

  const router = useRouter();

  // 상세보기
  const handleClickDetail = (obj: CheckBoxProps) => {
    router.push(`/detail/${obj.id}`);
  };

  // 체크
  const handleChangeCheck = async (e: InputChangeEvent) => {
    const formData = {
      isCompleted: true,
    };

    if (e.target.checked) {
      try {
        await axios.patch(`/api/yunyeji/items/${e.target.id}`, formData);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      {checkBoxList?.map((obj: CheckBoxProps) => (
        <div
          key={obj.id}
          className="pb-[1rem]"
          onClick={() => handleClickDetail(obj)}
        >
          <CheckBox
            onChange={(e) => {
              handleChangeCheck(e);
            }}
            // checked={checked}
            variant={"default"}
            label={obj.name}
            id={obj.id}
          />
        </div>
      ))}
    </div>
  );
};

export default IndexCheckBoxList;
