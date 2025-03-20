import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { observer } from 'mobx-react';
  
export const TextAlignment=observer(()=>{
   return (<>
          <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className='p-1 hover:no-underline'><span className='px-1 text-[12px] font-geistmono'>TextAlignment</span></AccordionTrigger>
          <AccordionContent className='pb-1'>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion></>);
});