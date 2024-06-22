import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/newsSlice";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.news);
  //   console.log(language)
  const handleSearch = (e) => {
    e.preventDefault();
    const lan = e.target.language.value;
    dispatch(setLanguage(lan));
  };
  return (
    <form onSubmit={handleSearch} className="join">
      <input
        className="input input-bordered join-item w-36 h-12 text-[#F56D04]"
        name="language"
        placeholder="language ex: en"
      />
      <button className="btn join-item rounded-r-full">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
