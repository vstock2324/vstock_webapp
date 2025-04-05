"use client";
import React, { memo } from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { BiHome } from "react-icons/bi";
import { nanoid } from "nanoid";

const BreadCrumbsPath = () => {
  const pathname = usePathname();
  const nestedpath = pathname.split("/");
  const crumbspath = nestedpath.slice(1, nestedpath.length - 1);
  return (
    <div className="flex flex-row items-center justify-start space-x-2">
      <BiHome className="font-medium" fill="white" size={18} />
      {crumbspath.map((item: string) => {
        return (
          <React.Fragment key={nanoid()}>
            <BreadcrumbItem className="text-white ">
              <BreadcrumbLink
                href={`/home/${item}`}
                className="text-white text-[16px] font-medium hover:text-[#EEEEEE]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
          </React.Fragment>
        );
      })}
      <BreadcrumbItem className="text-white">
        <BreadcrumbPage className="text-white text-[16px] font-medium hover:text-[#EEEEEE]">
          {nestedpath[nestedpath.length - 1].charAt(0).toUpperCase() +
            nestedpath[nestedpath.length - 1].slice(1).toLowerCase()}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </div>
  );
};

export default memo(BreadCrumbsPath);
