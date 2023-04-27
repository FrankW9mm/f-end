import React from "react";
import rgbToHex from "../utilities/utils";
const ColorSheet = ({ rgb, type }) => {
  const bg_color = rgb.join(",");
  const hex_color = rgbToHex(...rgb);
  return (
    <div
      style={{ backgroundColor: `rgb(${bg_color})` }}
      className={`lg:w-[150px] md:w-[100px] w-[80px] text-black lg:h-[150px] md:h-[100px] h-[80px] p-[10px] ${
        type === "shade" && "text-white"
      }`}
    >
      <p>{hex_color}</p>
    </div>
  );
};

export default ColorSheet;
