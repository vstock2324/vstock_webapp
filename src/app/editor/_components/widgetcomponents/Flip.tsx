import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { observer } from "mobx-react";
import { LuFlipHorizontal2, LuFlipVertical2 } from "react-icons/lu";

export const Flip = observer(() => {
  const handleFlipHorizontal = () => {};
  const handleFlipVertical = () => {};
  return (
    <>
      <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-1 hover:no-underline">
            <span className="px-1 text-[12px] font-geistmono">Flip</span>
          </AccordionTrigger>
          <AccordionContent className="pb-1">
            <div className="inline-flex flex-row items-center justify-start space-x-3  px-3 py-2">
              <button
                onClick={handleFlipHorizontal}
                className={`cursor-pointer`}
              >
                <LuFlipHorizontal2 size={24} />
              </button>
              <button onClick={handleFlipVertical} className={`cursor-pointer`}>
                <LuFlipVertical2 size={24} />
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
});
