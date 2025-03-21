/* eslint-disable @typescript-eslint/no-unused-vars */
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../../store";
import * as fabric from "fabric";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Alignment } from "./widgetcomponents/Alignment";
import { Layers } from "./widgetcomponents/Layers";
import { Arrange } from "./widgetcomponents/Arrange";
import { Flip } from "./widgetcomponents/Flip";
import { Transform } from "./widgetcomponents/Transform";
import { TextAlignment } from "./widgetcomponents/TextAlignment";
import { Font } from "./widgetcomponents/Font";
import { ObjectBackground } from "./widgetcomponents/ObjectBackground";
import { Opacity } from "./widgetcomponents/Opacity";
import { Stroke } from "./widgetcomponents/Stroke";
import { TextShadow } from "./widgetcomponents/TextShadow";
import { Dimension } from "./widgetcomponents/Dimension";
import { CanvasBackground } from "./widgetcomponents/CanvasBackground";



export const Properties=observer(() => {
    const store = useContext(StoreContext);

  return (<>
  <div className="flex flex-col justify-start w-[19.8%] min-w-[250px]">
    <div className="flex flex-row justify-between  bg-[#202020]">
     <span className="px-2 font-geistsans text-white">Canvas Properties</span>
     <span className="flex flex-row justify-between space-x-3 px-2"><AiOutlinePlusCircle fill="white" size={24}/> <AiOutlineMinusCircle fill="white" size={24}/></span>
      </div>
      <div className="py-1 w-full bg-[#151515]"/>
      <div className="flex flex-col cursor-pointer bg-[#151515] justify-start items-center overflow-y-auto overscroll-x-none">
        <Layers/>
        <Alignment/>
        <Arrange/>
        <Flip/>
        <Transform/>
        <TextAlignment/>
        <Font/>
        <ObjectBackground/>
        <Opacity/>
        <Stroke/>
        <TextShadow/>
        <Dimension/>
        <CanvasBackground/>
      </div>
      </div>
      </>
  )
});

