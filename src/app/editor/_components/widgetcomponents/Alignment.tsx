import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MdAlignHorizontalCenter,
  MdAlignHorizontalLeft,
  MdAlignHorizontalRight,
  MdAlignVerticalBottom,
  MdAlignVerticalCenter,
  MdAlignVerticalTop,
  MdHorizontalDistribute,
  MdVerticalDistribute,
} from "react-icons/md";
import { observer } from "mobx-react";

export const Alignment = observer(() => {
  const handleAlignHorizontalLeft = () => {};
  const handleAlignHorizontalCenter = () => {};
  const handleAlignHorizontalRight = () => {};
  const handleHorizontalDistribute = () => {};
  const handleAlignVerticalTop = () => {};
  const handleAlignVerticalCenter = () => {};
  const handleAlignVerticalBottom = () => {};
  return (
    <>
      <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-1 hover:no-underline">
            <span className="px-1 text-[12px] font-geistmono">Alignment</span>
          </AccordionTrigger>
          <AccordionContent className="pb-1">
            <div className="flex flex-col items-start justify-between  gap-y-1  py-2 px-3">
              <div className="m-0.5 p-0.5 inline-flex flex-row  items-center justify-start space-x-3">
                <button
                  className="cursor-pointer"
                  type="button"
                  onClick={handleAlignHorizontalLeft}
                >
                  <MdAlignHorizontalLeft size={24} />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={handleAlignHorizontalCenter}
                  type="button"
                >
                  <MdAlignHorizontalCenter size={24} />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={handleAlignHorizontalRight}
                  type="button"
                >
                  <MdAlignHorizontalRight size={24} />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={handleHorizontalDistribute}
                  type="button"
                >
                  <MdHorizontalDistribute size={24} />
                </button>
              </div>
              <div className="m-0.5 p-0.5 inline-flex flex-row  items-center justify-start space-x-3">
                <button
                  className=""
                  onClick={handleAlignVerticalTop}
                  type="button"
                >
                  <span>
                    <MdAlignVerticalTop size={24} />
                  </span>
                </button>
                <button className="" type="button">
                  <span>
                    <MdAlignVerticalCenter
                      onClick={handleAlignVerticalCenter}
                      size={24}
                    />
                  </span>
                </button>
                <button
                  className=""
                  onClick={handleAlignVerticalBottom}
                  type="button"
                >
                  <span>
                    <MdAlignVerticalBottom size={24} />
                  </span>
                </button>
                <button
                  className=""
                  onClick={handleHorizontalDistribute}
                  type="button"
                >
                  <span>
                    <MdVerticalDistribute size={24} />
                  </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
});
