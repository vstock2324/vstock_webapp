"use client"
import React, { useEffect } from "react";
import { StoreContext } from "../../../../store";
import { observer } from "mobx-react";
import { nanoid } from "nanoid";
import { createClient } from "@/utils/supabase/client";
import { AssetResource } from "../entity/AssetResource";

export const AssetsResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  console.log(store);
  const supabase = createClient();
  
  async function init(){
    try{
      store.setVideos([]);
    const { data, error } = await supabase
  .storage
  .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
  .list('admin_assets', {
    limit: 100,
    offset: 0,
  })
  if(error)  throw error;
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
    <div className="items-center overflow-x-hidden overflow-y-auto justify-start flex flex-col py-2  px-0.5 w-[250px] h-[510px] font-geistmono">
   {
    store.videos.map((video)=>{
      return <><AssetResource key={nanoid()} filename={video}/></>
    })
  }
  </div>
  );
})