import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { observer } from 'mobx-react';
  
export const Dimension=observer(()=>{
    return (<>
          <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className='p-1 hover:no-underline'><span className='px-1 text-[12px] font-geistmono'>Dimension</span></AccordionTrigger>
          <AccordionContent className='pb-1'>
          <div className="flex flex-row  gap-2 py-2 px-3 text-gray-500 font-semibold">
      <div className='flex flex-col'>
        <label className='w-[48px] text-center text-[10px] ' htmlFor='width'>Width</label>
        <input readOnly value={1920} disabled className='bg-transparent text-[12px] border-none text-center w-[48px]'/>
      </div>
      <div className=' flex flex-col'>
        <label className='w-[48px] text-center text-[10px]' htmlFor="height">Height</label>
        <input readOnly value={1080} disabled className='bg-transparent text-[12px] border-none text-center w-[48px]'/>
      </div>
    </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion></>);

});
