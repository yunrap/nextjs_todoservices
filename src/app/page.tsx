import type { NextPage } from "next";
import Search from "@/components/Search";
import Image from "next/image";
import CheckBox from "@/components/CheckBox";
const Page: NextPage = () => {
  return (
    <>
      <div className="max-w-[1024px] m-auto p-4 lg:p-0">
        <div className="max-w-[1024px] mx-auto pt-[16px] lg:pt-[24px] flex justify-center h-full">
          <Search />
          <div>
            <button className="rounded-3xl bg-slate-200 border-2 border-slate-900">
              버튼
            </button>
          </div>
        </div>
        <div>
          <Image src="/images/todo.svg" alt="todo" width={71} height={40} />
        </div>
        <CheckBox variant={'default'} />
        <CheckBox variant={'default'} />
        <CheckBox variant={'default'} />
        <div>
          <Image src="/images/done.svg" alt="done" width={71} height={40} />
        </div>
        <CheckBox variant={'violet'} />
        <CheckBox variant={'violet'} />
        <CheckBox variant={'violet'} />
      </div>
    </>
  );
};

export default Page;
