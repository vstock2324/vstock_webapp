import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const VectorCard = async ({ card }) => {
  const supabase = await createClient();
  const { data } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(`admin_vectors/${card.name}`);
  return (
    <div>
      
      <Link href={"/"} className="flex-shrink flex flex-col items-center justify-start  border hover:border-gray-200  hover:shadow-xl rounded mx-auto">
        <Image
          className="rounded object-fill cursor-pointer w-auto h-auto"
          loading="lazy"
          alt=""
          src={data.publicUrl}
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default memo(VectorCard);
