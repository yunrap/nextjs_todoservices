"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import axios from "axios";
import IndexCheckBoxList from "./IndexCheckBoxList";
import useGetListTodo from "@/react-query/useGetListTodo";

const Index: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { refetch, todoList, todoListY } = useGetListTodo();

  // 등록
  const onClickEvent = async () => {
    const formData = {
      name: searchValue,
    };

    try {
      await axios.post("/api/yunyeji/items", formData);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-[1024px] m-auto p-4 lg:p-0">
      <div className="max-w-[1024px] mx-auto pt-[16px] lg:pt-[24px] flex justify-center h-full">
        <div className="flex md:hidden h-full items-center">
          <SearchBox onChange={(ev) => setSearchValue(ev.target.value)} />
        </div>
        <div className="hidden md:flex lg:hidden h-full items-center">
          <SearchBox size={"lg"} />
        </div>
        <div className="hidden lg:flex h-full items-center">
          <SearchBox size={"wlg"} />
        </div>
        <div className="pl-4 flex">
          <Button
            onClick={onClickEvent}
            variant={"default"}
            size={"md"}
            label="+"
          />
        </div>
      </div>
      <div>
        <Image src="/images/todo.svg" alt="todo" width={71} height={40} />
      </div>
      <IndexCheckBoxList checkBoxList={todoList} />
      <div>
        <Image src="/images/done.svg" alt="done" width={71} height={40} />
      </div>
      <IndexCheckBoxList checkBoxList={todoListY} />
    </div>
  );
};

export default Index;
