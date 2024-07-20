import Image from "next/image";

const Search = () => {
  return (
    <div className="w-[280px] md:w-[519px] lg:w-[1016px] h-14 relative ">
      <div className="w-[280px] md:w-[519px] lg:w-[1016px]  h-14">
        <div className="w-[278.88px] md:w-[519px] lg:w-[1016px]  h-[52.5px] absolute left-[0.12px] top-[2.5px] rounded-3xl bg-slate-900 border-2 border-slate-900" />
        <div className="w-[278.88px] md:w-[519px] lg:w-[1016px]  h-[52.5px] absolute left-[-1px] top-[-1px] rounded-3xl bg-slate-100 border-2 border-slate-900" />
      </div>
      <p className="absolute left-6 top-[17px] text-base text-center text-slate-500">
        할 일을 입력해주세요
      </p>
    </div>
  );
};

export default Search;
