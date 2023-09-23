import React from "react";
import i1 from "../assets/blackLogo.png"

const Login = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center p-24 bg-[#abdbdf]">
    <img src={i1} alt="" className="h-24"/>
      <form
        action=""
        className="h-full w-full flex justify-center items-center"
      >
        <div className="h-full w-[50%] flex flex-col gap-12 justify-center items-center">
          <h1 className="uppercase text-[#000] font-semibold  text-3xl">Login / Signup</h1>
          <input
            type="text"
            placeholder="Full Name"
            className=" w-[60%] outline outline-2 rounded-md capitalize outline-[#000] h-10 p-2 border-none bg-transparent text-[#000] font-semibold text-xl border"
          />
          <input
            type="email"
            placeholder="Email"
            className=" w-[60%] outline outline-2 rounded-md outline-[#000] h-10 p-2 border-none bg-transparent text-[#000] font-semibold text-xl border"
          />
          <input
            type="phone"
            placeholder="Mobile Number"
            className=" w-[60%] outline outline-2 rounded-md outline-[#000] h-10 p-2 border-none bg-transparent text-[#000] font-semibold text-xl border"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className=" w-[60%] outline outline-2 rounded-md outline-[#000] h-10 p-2 border-none bg-transparent text-[#000] font-semibold text-xl border"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className=" w-[60%] outline outline-2 rounded-md outline-[#000] h-10 p-2 border-none bg-transparent text-[#000] font-semibold text-xl border"
          />
          <button
            type="submit"
            className=" h-10 w-40 bg-white rounded-md uppercase hover:bg-[#000] duration-300"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
