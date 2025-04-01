import {
  Breadcrumb,
   BreadcrumbList
  } from "@/components/ui/breadcrumb"
import { memo } from "react"
import BreadCrumbsPath from "./BreadCrumbsPath";

const BeardCrumbsHomeNested=()=>{
  return (
    <Breadcrumb>
      <BreadcrumbList>
       <BreadCrumbsPath/>
      </BreadcrumbList>
    </Breadcrumb>
  )
}


export default memo(BeardCrumbsHomeNested);