/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useEffect, useState } from "react";
import { StoreContext } from "../../../../store";
import { observer } from "mobx-react";
import { VideoResource } from "../entity/VideoResource";
import { nanoid } from "nanoid";
import { createClient } from "@/utils/supabase/client";

export const VideoResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const supabase = createClient();
  async function init(){
    try{
      store.setVideos([]);
    const { data, error } = await supabase
  .storage
  .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
  .list('admin_videos', {
    limit: 100,
    offset: 0,
  })
  if(error)  throw new Error("Error Occured",error);
      if(!data) return;
      data.forEach((file)=>{
      store.addVideoResource(file.name);
      })
    
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
    return ()=>{
      store.setVideos([]);
    }
  }, []);

  return (
    <div className="items-center font-geistmono overflow-x-hidden overflow-y-auto justify-start flex flex-col py-2  px-0.5 w-[250px] h-[510px]">
   {
    store.videos.map((video)=>{
      return <><VideoResource key={nanoid()} filename={video}/></>
    })
  }
  </div>
  );
})