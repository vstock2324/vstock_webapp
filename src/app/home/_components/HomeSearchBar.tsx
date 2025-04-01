import React, { memo } from "react";
import HomeSearchInput from "./HomeSearchInput";
import SearchTags from "./SearchTags";

const HomeSearchBar = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center p-1 ">
        <HomeSearchInput />
        <SearchTags/>
      </div>
    </>
  );
};

export default memo(HomeSearchBar);
