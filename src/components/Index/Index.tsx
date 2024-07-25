"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import SearchBox, { InputChangeEvent } from "@/components/SearchBox";
import { RefObject, useEffect, useRef, useState } from "react";
import axios from "axios";
import IndexCheckBoxList from "./IndexCheckBoxList";
import { CheckBoxProps } from "@/types/ResultDataType";

const Index: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<CheckBoxProps[]>([]);
  const [todoDoneList, setTodoDoneList] = useState<CheckBoxProps[]>([]);

  useEffect(() => {
    console.log("index 화면");
    getListCheckbox();
  }, []);

  const getListCheckbox = async () => {
    try {
      const response = await axios.get("/api/yunyeji/items");
      const data = response.data.filter(
        (data: CheckBoxProps) => data.isCompleted == false
      );
      setTodoList(data);
      const data2 = response.data.filter(
        (data: CheckBoxProps) => data.isCompleted === true
      );
      setTodoDoneList(data2);
    } catch (e) {
      console.log(e);
    }
  };

  // 등록
  const onClickEvent = async () => {
    console.log(inputRef.current?.value);
    const searchValue = inputRef.current?.value;

    if (searchValue == "") return;

    const formData = {
      name: searchValue,
    };

    try {
      await axios.post("/api/yunyeji/items", formData);
      getListCheckbox();
    } catch (e) {
      console.log(e);
    }

    if (inputRef.current) inputRef.current.value = "";
  };

  // 엔터
  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      onClickEvent();
    }
  };

  // 체크
  const handleChangeCheck = async (e: InputChangeEvent) => {
    const formData = {
      isCompleted: true,
    };

    if (e.target.checked) {
      try {
        await axios.patch(`/api/yunyeji/items/${e.target.id}`, formData);
        getListCheckbox();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: RefObject<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (type.current) {
      type.current.value = value;
    }
  };

  return (
    <div className="max-w-[1024px] m-auto p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto pt-[16px] lg:pt-[24px] flex justify-center h-full">
        <div className="flex h-full items-center">
          <SearchBox
            placeholder="할 일을 입력해주세요"
            inputRef={inputRef}
            onChange={(ev) => onChangeInput(ev, inputRef)}
            onKeyDown={handleEnter}
            additionalClass="w-[17.5rem] md:w-[32.3rem] lg:[63.5rem] h-[56px]"
          />
        </div>
        <div className="pl-2 flex">
          <Button onClick={onClickEvent} size={"default"} label="+" />
        </div>
      </div>
      <div className="pt-6 md:pt-10 flex">
        <Image src="/images/todo.svg" alt="todo" width={71} height={40} />
      </div>
      <IndexCheckBoxList
        type="TODO"
        checkBoxList={todoList}
        handleChangeCheck={handleChangeCheck}
        color="default"
      />
      <div className="pt-6 md:pt-10">
        <Image src="/images/done.svg" alt="done" width={71} height={40} />
      </div>
      <IndexCheckBoxList
        type="DONE"
        checkBoxList={todoDoneList}
        color="violet"
      />
    </div>
  );
};

export default Index;
