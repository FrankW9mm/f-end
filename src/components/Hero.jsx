import React from "react";
import Bg from "../components/img/bg.gif";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#0E0E0E] p-[3rem] gap-[20px]">
        <div className="w-full flex flex-row items-center justify-evenly">
          <div>
            <h1 className="text-[35px] text-white font-semibold">
              LOOKING FOR TEST DATA?
            </h1>
            <p className="text-white text-[30px]">WE GOT EVERYTHING YOU NEED</p>
          </div>
          <div className="text-white">
            <p className="text-[23px]">FROM GENERATING TEXT,IMAGES</p>
            <p className="text-[21px]">COLOR SHADE PICKER TO</p>
            <p className="text-[20px]">RANDOM ACCESS NOTE</p>
            <p className="text-[18px] text-white">WE GOT ALL U NEED </p>
          </div>
          <div>
            <button className="text-white bg-white/30 backdrop-blur-sm p-[1rem] rounded-[20px]">
              START NOW
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <div className="absolute w-full h-[600px] flex justify-center items-center bg-black/60">
          <h1 className="text-white text-[100px] font-bold translate-x-10">
            F-ENDZ
          </h1>
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
