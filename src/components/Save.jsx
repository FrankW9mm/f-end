import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DotWave } from "@uiball/loaders";

const Save = ({ closeSave, show }) => {
  return (
    <div
      className={` ${
        show ? "translate-x-[0%]" : "translate-x-[-200%]"
      } absolute z-[1] lg:w-[60%] w-full h-[500px] rounded-2xl flex flex-col gap-[20px] justify-center items-center bg-[#0E0E0E] duration-1000 ease-in-out glassmorphism-outer`}
    >
      <h1 className="text-white">IN DEVELOPMENT</h1>
      <DotWave size={47} speed={1} color="white" />;
      <AiOutlineCloseCircle
        size={32}
        onClick={() => closeSave()}
        color="white"
      />
    </div>
  );
};

export default Save;
