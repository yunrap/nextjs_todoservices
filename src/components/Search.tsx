"use client";
import { useCallback, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChangeValue = () => {};
  return (
    <div className="">
      <input
        className="rounded-3xl bg-slate-100 border-2 border-slate-900 w-full"
        type="text"
        placeholder="할 일을 입력해주세요."
        onChange={handleChangeValue}
      ></input>
    </div>
  );
};

export default Search;
