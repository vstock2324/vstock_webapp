/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { StoreContext } from "@/store";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { MdColorLens } from 'react-icons/md';
export const CanvasBackground=observer(()=>{
  const [disable,setDisable]=React.useState<boolean>(false);
  const store = React.useContext(StoreContext);
  const refBgColor=React.useRef<HTMLInputElement>(null);
  const handleCanvasBackgroundColor=(event: React.ChangeEvent<HTMLInputElement>)=>
  {
    if(!store.canvas) return ;
    if(!refBgColor.current) return ;
    if(!refBgColor.current.checked) return;
    store.setCanvasBackgroundColor(store.canvas,event.target.value);
  }
    return (<>
       <Accordion type="single" collapsible className="w-full cursor-pointer">
            <AccordionItem value="item-1">
              <AccordionTrigger className='p-1 hover:no-underline'><span className='px-1 text-[12px] font-geistmono'>Background</span></AccordionTrigger>
              <AccordionContent className='pb-1'>
              <div className='flex flex-row items-center justify-between px-3 py-2'>
        <div className='inline-flex flex-row items-center justify-start space-x-0.5 m-0.5 p-0.5'>
        <input  type='checkbox' ref={refBgColor}  className='h-6 w-6 cursor-pointer'/>
          <input type='color' disabled={disable} onChange={handleCanvasBackgroundColor} className='h-6 w-6 cursor-pointer'/>
          <label  htmlFor='Background Color' className='text-[10px]'>Background Color</label>
          </div>
          <div><button className='m-0.5 p-0.5 w-6 h-6 cursor-pointer'><MdColorLens size={24}/></button></div>
      </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion></>);
});