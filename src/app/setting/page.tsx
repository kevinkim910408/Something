import MainCard from "./_components/MainCard";
import React from "react";

export default function Setting() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-4/5 mx-auto">
      <MainCard
        title="1"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-indigo-100 row-span-1 md:row-span-2 flex items-center justify-center"
      />
      {/* <MainCard
        title="2"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-red-100 col-span-1 md:col-span-2 flex items-center justify-center"
      />
      <MainCard
        title="3"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-purple-100 flex items-center justify-center"
      />
      <MainCard
        title="4"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-violet-100 row-span-1 md:row-span-2 flex items-center justify-center"
      />
      <MainCard
        title="5"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-sky-100 row-span-1 md:row-span-2 col-span-1 md:col-span-2 flex items-center justify-center"
      />
      <MainCard
        title="6"
        link="/"
        desc="test"
        icon={<></>}
        className="bg-emerald-100 flex items-center justify-center"
      /> */}
    </div>
  );
}
