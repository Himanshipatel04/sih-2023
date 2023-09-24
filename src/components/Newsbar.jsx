import React from "react";
import i1 from "../assets/law and justice.jpg";
import i2 from "../assets/datascience.jpg";
import trending from "../assets/trending.png";
import infy from "../assets/infy.png";

const Newsbar = () => {
  return (
    <div className=" h-[85vh] w-[30%] bg-[#2dc4c7] rounded-xl p-4 flex justify-center items-center sticky top-24 flex-col gap-8">
      <div className="cursor-pointer h-32 w-full rounded-md p-4 flex gap-2 hover:outline outline-1 duration-200">
        <img className="w-28 rounded-xl" src={i1} alt="" />
        <div>
          <h1 className=" text-black-100 text-md font-bold">
            Sheetal's Project is the most viewed project this week.
          </h1>
          <p className=" text-white text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            beatae modi, natus
          </p>
          <button className=" text-sm text-blue-800 underline">
            see project
          </button>
        </div>
      </div>
      <div className=" cursor-pointer h-32 w-full rounded-md p-4 flex gap-2 hover:outline outline-1 duration-200">
        <img className="w-28 rounded-xl" src={i2} alt="" />
        <div>
          <h1 className=" text-black-100 text-md font-bold">
            Himanshi's data science project is taken up by IBM.
          </h1>
          <p className=" text-white text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            beatae modi, natus
          </p>
          <button className=" text-sm text-blue-800 underline">
            see project
          </button>
        </div>
      </div>
      <div className=" cursor-pointer h-32 w-full rounded-md p-4 flex gap-2 hover:outline outline-1 duration-200">
        <img className="w-28 rounded-xl" src={trending} alt="" />
        <div>
          <h1 className=" text-black-100 text-md font-bold">
            These are the trending projects this month.
          </h1>
          <p className=" text-white text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            beatae modi, natus
          </p>
          <button className=" text-sm text-blue-800 underline">
            see projects
          </button>
        </div>
      </div>
      <div className="cursor-pointer h-32 w-full rounded-md p-4 flex gap-4 hover:outline outline-1 duration-200">
        <img className="w-28 rounded-xl" src={infy} alt="" />
        <div>
          <h1 className=" text-black-100 text-md font-bold">
            Infosys is organizing a contest for AI/ML field.
          </h1>
          <p className=" text-white text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            beatae modi, natus
          </p>
          <button className=" text-sm text-blue-800 underline">see more</button>
        </div>
      </div>
    </div>
  );
};

export default Newsbar;
