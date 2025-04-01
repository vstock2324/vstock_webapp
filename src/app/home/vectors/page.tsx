import CombineFilters from "./_components/CombineFilters";
import MainNestedLayout from "../_components/MainNestedLayout";
import Tabs from "../_components/Tabs";
import VectorsGrid from "./_components/VectorsGrid";

export default function VectorsPage(){
    return (<MainNestedLayout>
        <Tabs/>
        <CombineFilters/>
        <VectorsGrid/>
    </MainNestedLayout>)
}