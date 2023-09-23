import React from "react";
import i1 from "../assets/qzyi_g6i7_160725.jpg";
import i2 from "../assets/automobile.jpg"
import i3 from "../assets/healthcare.jpg"
import i4 from "../assets/aerospace.jpg"
import i5 from "../assets/law and justice.jpg"
import i6 from "../assets/more.jpg"
import Newsbar from "./Newsbar";
import Contest from "./Contest";

const Home = () => {
  return (
    <div className=" bg-[#abdbdf] h-[150vh] w-full flex p-4 gap-4 ">
      <Newsbar />
      <div className=" w-[70%] h-[150vh] flex flex-col gap-8">
        <div className=" w-full h-[25%] flex justify-around items-center">
          <div className=" h-64 w-56 outline outline-2 outline-white bg-[#f0efb9] rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i1} alt="" />
            </div>
            <div className="p-4">
              <a href="https://www.sanfoundry.com/cplusplus-interview-questions-answers/">
                <h1 className="  text-center uppercase font-bold text-black">
                  Computer Science
                </h1>
              </a>
              <p className=" text-left font-medium text-black">
                Projects related to all the branches of Computer Science and
                Engineering.
              </p>
            </div>
          </div>
          <div className=" h-64 w-56 outline outline-2 outline-white bg-[#f0efb9] rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i2} alt="" />
            </div>
            <div className=" p-4">
              <h1 className=" text-black text-center uppercase font-bold">
                Automobile
              </h1>
              <p className=" text-left text-black font-medium">
                Explore case studies and projects in automobile industry.
              </p>
            </div>
          </div>
          <div className=" h-64 w-56 outline outline-2 outline-white bg-[#f0efb9] rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i3} alt="" />
            </div>
            <div className=" p-4">
              <h1 className=" text-black text-center uppercase font-bold">
                Health Care
              </h1>
              <p className=" text-left text-black font-medium">
                {" "}
                Projects on well-being through medical expertise, prevention.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full h-[25%] flex justify-around items-center">
          <div className=" h-64 w-56 outline outline-2 bg-[#f0efb9] outline-white rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i5} alt="" />
            </div>
            <div className=" p-4">
              <h1 className=" text-black text-center uppercase font-bold">
                law and Justice
              </h1>
              <p className=" text-left text-black font-medium">
                Explore more about laws and justice that you are unaware of.
              </p>
            </div>
          </div>
          <div className=" h-64 w-56 outline outline-2 bg-[#f0efb9] outline-white rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i4} alt="" />
            </div>
            <div className=" p-4">
              <h1 className=" text-black text-center uppercase font-bold">
                Aerospace
              </h1>
              <p className=" text-left text-black font-medium">
                Projects and case studies on Aerospace Engineering.
              </p>
            </div>
          </div>
          <div className=" h-64 w-56 outline outline-2 bg-[#f0efb9] outline-white rounded-xl">
            <div className=" w-full overflow-hidden">
              <img className=" w-full h-32 rounded-xl " src={i6} alt="" />
            </div>
            <div className=" p-4">
              <h1 className=" text-black text-center uppercase font-bold">
                Many more
              </h1>
              <p className=" text-left text-black font-medium">
                Explore hundreds of projects related to every field of study.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[50vh] flex  p-8 justify-around">
          <Contest />
        </div>
      </div>
    </div>
  );
};

export default Home;
