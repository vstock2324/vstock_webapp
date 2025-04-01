import { memo } from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  return (
    <>
      <div className="flex mx-20 py-[50px] flex-col gap-y-5  md:gap-y-0 md:gap-x-10 md:flex-row  justify-center items-center">
        <TabButton newtab={"Vectors"} />
        <TabButton newtab={"Animations"} />
        <TabButton newtab={"Posters"} />
        <TabButton newtab={"Brochures"} />
      </div>
    </>
  );
};

export default memo(Tabs);
