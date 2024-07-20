import type { NextPage } from "next";
import Search from "@/components/Search";
import Image from "next/image";
import CheckList from "@/components/CheckList";
const Page: NextPage = () => {
  return (
    <>
      <div className="flex items-center w-full h-full">
        <Search />
        <Image src="/images/btn.svg" alt="home" width={56} height={56} />
      </div>
      <div className="pt-6 md:pt-10">
        <div className="flex justify-center items-center relative overflow-hidden gap-2.5 px-[27px] pt-1 rounded-[23px] bg-lime w-[101px] h-9">
          <p className="flex-grow-0 flex-shrink-0 text-lg text-center text-green-700">
            TO DO
          </p>
        </div>
      </div>
      <CheckList />
    </>
  );
};

export default Page;
