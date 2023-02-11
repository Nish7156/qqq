import React from "react";
//@ts-ignore


function Search({ placeholder }: any) {
  return (
      <div className="relative ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-black-500">
          <button type="submit" className="p-1 ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input type="search" name="q" className="py-2 w-full text-black-400 text-lg bg-gray-100 rounded-md pl-10 0" placeholder={placeholder} autoComplete="off" />
      </div>
   
  );
}

export default Search;
