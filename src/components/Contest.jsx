import React from "react";
import edtech from '../assets/edtech.png'
import healthcare from '../assets/health contest.jpg'
import techtitans from '../assets/techtitans.png'

const Contest = () => {
  return (
    <div className="h-[30vh] w-full rounded-xl flex flex-col gap-6">
      <h1 className=" text-center text-gray-600 uppercase text-2xl font-bold underline ">Upcoming Contests</h1>
      <div className=" flex justify-around">
        <div className=" h-48 w-64 bg-[#58598d] rounded-xl p-4 flex flex-col justify-center">
          <img className=" h-36 rounded-md mt-4" src={edtech} alt="" />
          <h1 className=" text-center text-white font-bold uppercase">EdTech Explorers</h1>
        </div>
        <div className=" h-48 w-64 bg-[rgb(33,133,125)] rounded-xl p-4 flex flex-col justify-center">
        <img className=" h-36 rounded-md mt-4" src={healthcare} alt="" />
          <h1 className=" text-center text-white font-bold uppercase">Health-Care Heroes</h1>
        </div>
        <div className=" h-48 w-64 bg-[#6d6c6c] rounded-xl p-4 flex flex-col justify-center">
        <img className=" h-36 rounded-md mt-4" src={techtitans} alt="" />
          <h1 className=" text-center text-white font-bold uppercase">Tech Titans</h1>
        </div>
      </div>
    </div>
  );
};

export default Contest;
