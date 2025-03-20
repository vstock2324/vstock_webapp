/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { observer } from 'mobx-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StoreContext } from '@/store';



export const Layers=observer(()=>{
  const store = React.useContext(StoreContext);
  const [arrlayers,setArrLayers]=useState([]);

  useEffect(()=>{
  console.log(store.canvas);
  },[])
    
    return (<>
          <Accordion type="single" collapsible className="w-full cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger className='p-1 hover:no-underline'><span className='px-1 text-[12px] font-geistmono'>Layers</span></AccordionTrigger>
          <AccordionContent className='pb-1'>
          <Tabs defaultValue="objects" className="flex flex-col justify-start items-start w-full">
  <TabsList>
    <TabsTrigger className='text-[12px] data-[state=active]:border-b-4 data-[state=active]:border-white font-geistmono'  value="objects">Objects</TabsTrigger>
    <TabsTrigger className='text-[12px] data-[state=active]:border-b-4 data-[state=active]:border-white font-geistmono'  value="audio">Audio</TabsTrigger>
  </TabsList>
  <TabsContent className='w-full' value="objects"><div className=''>
    {

    }</div></TabsContent>
  <TabsContent className='w-full' value="audio">Audio Tab</TabsContent>
</Tabs>

          </AccordionContent>
        </AccordionItem>
      </Accordion></>);

})

