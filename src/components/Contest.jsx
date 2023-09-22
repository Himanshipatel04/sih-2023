import React from "react";

const Contest = () => {
  return (
    <div className="h-[30vh] w-full rounded-xl flex flex-col gap-6">
      <h1 className=" text-center text-gray-600 uppercase text-2xl font-bold underline ">Upcoming Contests</h1>
      <div className=" flex justify-around">
        <div className=" h-44 w-64 bg-[#58598d] rounded-xl p-4">
          <h1 className=" text-center text-white font-bold uppercase">EdTech Explorers</h1>
        </div>
        <div className=" h-44 w-64 bg-[rgb(33,133,125)] rounded-xl p-4">
          <h1 className=" text-center text-white font-bold uppercase">Health-Care Heroes</h1>
        </div>
        <div className=" h-44 w-64 bg-[#6d6c6c] rounded-xl p-4">
          <h1 className=" text-center text-white font-bold uppercase">Tech Titans</h1>
        </div>
      </div>
    </div>
  );
};

export default Contest;
