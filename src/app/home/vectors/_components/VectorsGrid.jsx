import { createClient } from "@/utils/supabase/server";
import VectorCard from "./VectorCard";
import LoadingVector from "./LoadingVector";
import { memo, Suspense } from "react";
import { nanoid } from "nanoid";
import VectorFilters from "./VectorFilters";
import VectorGridDataWrapper from "./VectorGridDataWrapper";

const VectorsGrid = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .list(`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_VECTORS_FOLDER}`,{
      limit:10,
      offset:0,
      sortBy: { column: 'name', order: 'asc' }
    });
  if (error) throw new Error(error.message);

  return (
    <div className="items-start justify-between flex flex-row relative mx-[120px]">
      <VectorFilters />
      <VectorGridDataWrapper>
        {data &&
          data.map((item) => {
            return (
              <Suspense key={nanoid()} fallback={<LoadingVector />}>
                <VectorCard key={item.id} card={item} />
              </Suspense>
            );
          })}
      </VectorGridDataWrapper>
    </div>
  );
};

export default memo(VectorsGrid);
