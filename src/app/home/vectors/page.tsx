/* eslint-disable @typescript-eslint/no-unused-vars */
import CombineFilters from "./_components/CombineFilters";
import MainNestedLayout from "../_components/MainNestedLayout";
import Tabs from "../_components/Tabs";
import VectorsGrid from "./_components/VectorsGrid";
import PaginateVectorGrid from "./_components/PaginateVectorGrid";
import { createClient } from "@/utils/supabase/server";
import { SearchParams } from "@/utils/types";

export async function generateMetadata(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = searchParams.page;
}

export default async function VectorsPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const page = searchParams.page;
  const supabase = await createClient();
  const { data, error } = await supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .list(`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_VECTORS_FOLDER}`);
  if (error) throw new Error(error.message);
  const totalPages: number = Math.ceil(data?.length / 10);
  const currentPage: number = Number(page) || 1;
  return (
    <MainNestedLayout>
      <Tabs />
      <CombineFilters />
      <VectorsGrid />
      <PaginateVectorGrid pages={{ currentPage, totalPages }} />
    </MainNestedLayout>
  );
}
