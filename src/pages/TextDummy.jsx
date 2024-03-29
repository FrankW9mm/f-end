import React from "react";
import { RaceBy } from "@uiball/loaders";
const TextDummy = () => {
  return (
    <div
      className="w-full h-[100vh] bg-[#0c0b0b] flex justify-center flex-col gap-[30px] items-center"
      id="text"
    >
      <p className=" uppercase text-white text-[32px]">text generator</p>
      <RaceBy size={200} lineWeight={5} speed={1.4} color="white" />
      <h1 className="text-white">IN DEVELOPMENT</h1>
    </div>
  );
};

export default TextDummy;
