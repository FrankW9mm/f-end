import React, { useState } from "react";
import { useReducer } from "react";
import { reducer } from "../utilities/Reducer";
import Values from "values.js";
import ColorSheet from "./ColorSheet";
import ColorError from "./ColorError";
const Shade = ({ color }) => {
  // console.log(color);
  const [colorHex, setcolorHex] = useState(color);
  console.log(colorHex);
  const initialState = {
    color: "",
    option: 5,
    ShowModal: false,
    list: new Values("#f34fff").all(5),
  };

  const closeModal = () => {
    dispatch({ type: "SHADE_MODAL_CLOSE", data: false });
  };
  const ShowModal = () => {
    dispatch({ type: "SHADE_MODAL_OPEN", data: true });
  };

  const handleOptionChange = (e) => {
    const Tempvalue = e.target.value;
    let value = parseInt(Tempvalue);
    dispatch({ type: "SET_SHADE_OPTION", data: value });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleShadeSumbit = (colorEntry) => {
    try {
      const newColorList = new Values(state.color).all(state.option);
      dispatch({ type: "SHADE_ENTRY", data: newColorList });
    } catch {
      ShowModal();
      // window.alert("Invalid color");
    }
  };
  return (
    <div className="w-full relative text-white mt-[30px] flex flex-col">
      <div className=" h-[100px]">
        <h1 className="text-[32px] uppercase">Color Shade generator</h1>
      </div>

      {state.ShowModal && (
        <ColorError removeModal={closeModal} msg={"WRONG INPUT"} />
      )}
      <div className="  p-3 w-full bg-[#191919] flex flex-col justify-start items-start gap-[40px]">
        <div className="flex md:mt-0 mt-[20px] w-full md:flex-row lg:justify-start justify-center flex-col items-center lg:gap-[30px] gap-[15px]">
          <input
            type="text"
            value={state.color}
            onChange={(e) => {
              dispatch({ type: "SHADE", data: e.target.value });
              // setcolorHex(e.target.value);
            }}
            name=""
            id=""
            placeholder="Enter your color code "
            className="px-[15px] w-[200px] h-[50px]  py-[10px] text-black outline-none rounded-[20px]"
          />
          <label for="cars">SHADES:</label>
          <select
            className="text-black h-[50px]  rounded-xl"
            placeholder="SHADES"
            onChange={handleOptionChange}
            name=""
            id=""
          >
            <option value="5">41 COLORS</option>
            <option value="10">21 COLORS</option>
            <option value="20">11 COLORS</option>
            <option value="30">7 COLORS</option>
          </select>
          <button
            className="bg-white w-[100px] h-[50px] font-normal uppercase rounded-[20px] bg-white/10 text-white backdrop-blur-xl"
            type="submit"
            onClick={() => {
              handleShadeSumbit();
            }}
          >
            generate
          </button>
        </div>
      </div>
      <div className="w-full md:h-auto h-[500px] md:overflow-hidden overflow-scroll flex flex-row gap-[10px] flex-wrap justify-center mt-[20px] rounded-[20px] md:p-[20px] py-[10px] glassmorphism-outer">
        {state.list.map((color) => {
          // console.log(color);
          return <ColorSheet {...color} />;
        })}
      </div>
    </div>
  );
};

export default Shade;
