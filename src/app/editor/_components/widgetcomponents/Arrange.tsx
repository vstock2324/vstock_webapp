import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  RiBringForward,
  RiBringToFront,
  RiSendBackward,
  RiSendToBack,
} from "react-icons/ri";
import { observer } from "mobx-react";

export const Arrange = observer(() => {
  const handleBringToFront = () => {};
  const handleBringForward = () => {};
  const handleSendBackward = () => {};
  const handleSendToBack = () => {};

  return (
    <>
      <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-1 hover:no-underline">
            <span className="px-1 text-[12px] font-geistmono">Arrange</span>
          </AccordionTrigger>
          <AccordionContent className="pb-1">
            <div className="space-x-3  px-3 py-2 inline-flex flex-row items-center justify-start">
              <button
                onClick={handleBringToFront}
                className="cursor-pointer"
                type="button"
              >
                <RiBringToFront fill="white" size={24} />
              </button>
              <button
                onClick={handleBringForward}
                className="cursor-pointer"
                type="button"
              >
                <RiBringForward fill="white" size={24} />
              </button>
              <button
                onClick={handleSendBackward}
                className="cursor-pointer"
                type="button"
              >
                <RiSendBackward fill="white" size={24} />
              </button>
              <button
                onClick={handleSendToBack}
                className="cursor-pointer"
                type="button"
              >
                <RiSendToBack fill="white" size={24} />
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
});
