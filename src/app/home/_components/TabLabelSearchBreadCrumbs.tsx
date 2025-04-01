import { memo } from "react"
import SearchLabel from "./SearchLabel";
import HomeNestedSearchInput from "./HomeNestedSearchInput";
import SearchNestedTags from "./SearchNestedTags";
import BreadCrumbsHomeNested from "./BreadCrumbsHomeNested";

const TabLabelSearchBreadCrumbs=()=>{
   return (<div className="flex flex-col">
    <div className=" flex flex-col items-center justify-center p-1 ">
      <SearchLabel />
      <HomeNestedSearchInput/>
      <SearchNestedTags/>
    </div>
    <BreadCrumbsHomeNested/>
  </div>);

}


export default memo(TabLabelSearchBreadCrumbs);