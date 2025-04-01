import { memo } from "react";
import NavBar2 from "./NavBar2";
import TabLabelSearchBreadCrumbs from "./TabLabelSearchBreadCrumbs";

const HomeNestedHeader = () => {
  return (
    <div className={`bg-[#2E67DD] shadow-headershadow `}>
      <header className="mx-[120px] pt-[60px] pb-[10px]">
        <NavBar2 />
        <TabLabelSearchBreadCrumbs />
      </header>
    </div>
  );
};

export default memo(HomeNestedHeader);
