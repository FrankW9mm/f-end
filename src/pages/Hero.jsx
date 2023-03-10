import React from "react";
import Bg from "../components/img/bg.gif";
import { BsMouse } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col md:items-center items-start bg-[#0E0E0E] md:px-[2rem] px-[1rem] py-[3rem] gap-[30px]">
        <div className="relative w-full flex lg:flex-row flex-col gap-10 lg:items-center items-start justify-evenly">
          <div className=" absolute w-[100px] h-[100px] bottom-[-50%] right-[50%] gradient-01"></div>
          <div className="flex flex-col text-white gap-2">
            <h1 className="text-[30px] font-semibold">
              | LOOKING FOR TEST DATA?
            </h1>
            <p className="text-[21px] font-thin">FROM GENERATING TEXT,IMAGES</p>
            <p className="text-[21px] font-thin">& COLOR SHADES TO</p>
            <p className="text-[21px] font-thin">RANDOM ACCESS NOTE</p>
          </div>
          <div className=" flex flex-col gap-4">
            {/* <p className="text-[18px] text-white">WE GOT ALL U NEED </p> */}
            <p className="text-white text-[18px]">
              | WE GOT EVERYTHING YOU NEED !
            </p>
            <div>
              <button className="text-white bg-white/30 backdrop-blur-sm p-[1rem] rounded-[20px]">
                START NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[700px]">
        <div className="absolute w-full h-[700px] flex-col flex justify-center items-center bg-black/80">
          <p className="text-white md:translate-x-10 translate-x-0 uppercase">
            Introducing...
          </p>
          <h1 className="text-white lg:text-[100px] md:text-[70px] mb-[20px] text-[50px] font-bold md:translate-x-10 translate-x-0">
            | F-ENDZ |
          </h1>
          <BsMouse
            size={40}
            color={"white"}
            className=" md:translate-x-10 translate-x-0"
          />
        </div>
        <img
          className="w-full h-full object-top object-cover"
          src={Bg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
