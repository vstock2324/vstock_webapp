import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { memo } from "react";
import BreadCrumbsPath from "./BreadCrumbsPath";

const BeardCrumbsHomeNested = () => {
  return (
    <>
    <div className="hidden lg:flex w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadCrumbsPath />
        </BreadcrumbList>
      </Breadcrumb>
      </div>
    </>
  );
};

export default memo(BeardCrumbsHomeNested);
