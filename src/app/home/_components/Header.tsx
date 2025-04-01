import { memo } from "react";
import NavBar2  from "./NavBar2";
import HomeSearchBar from "./HomeSearchBar";

const Header = () => {
  return (
    <>
      <div className={`bg-[#2E67DD] shadow-headershadow `}>
        <header className="mx-[120px] pt-[60px] pb-[100px]">
          <NavBar2 />
          <HomeSearchBar/>
        </header>
      </div>
    </>
  );
};

export default memo(Header);
