import React from "react";
import { useReducer } from "react";
import { SketchPicker } from "react-color";
import { reducer } from "../utilities/Reducer";
import { getLocalData, saveColor } from "../utilities/LocalData";
import { BsFillBookmarksFill } from "react-icons/bs";
import Modal from "../components/Modal";
import Save from "../components/Save";
const initialState = {
  color: "",
  hex: "",
  showModal: false,
  showSave: false,
  colorList: getLocalData(),
};

const ColorPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeFailMsg = () => {
    dispatch({ type: "SAVE_FAIL_OVER", data: false });
  };
  const openSave = () => {
    dispatch({ type: "OPEN_SAVE", data: true });
  };
  const closeSave = () => {
    dispatch({ type: "CLOSE_SAVE", data: false });
  };

  const handleOnChnage = (color) => {
    dispatch({
      type: "COLOR_CHANGE",
      data: color.rgb,
      hex_data: color.hex,
    }); // for a in rgba" value
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(state.hex);
    // console.log(state.hex);
  };
  const handleSaveProcess = (color) => {
    let ProcessFail = saveColor(color);
    // if (ProcessFail) {
    //   console.log("save Fail");
    // }
    ProcessFail && dispatch({ type: "SAVE_FAIL", data: true });
  };

  // console.log(state.colorList);

  const handleChangeComplete = (color) => {
    dispatch({
      type: "CHANGE_COMPELETE",
      data: color.rgb,
      //   hex_data: color.hex,
    });
  };

  const { r, g, b, a } = state.color;
  return (
    <div>
      <div className="bg-[#0c0b0b] md:p-[3rem] p-[1rem] " id="color">
        <p className="text-white text-[32px] ">LET'S DEAL WITH COLORS</p>

        <div className="relative flex lg:flex-row flex-col gap-[30px] justify-evenly items-center mt-[50px] ">
          {/* {state.showSave && (
            <Save closeSave={closeSave} show={state.showSave} />
          )} */}
          <Save closeSave={closeSave} show={state.showSave} />
          <SketchPicker
            width="290px"
            onChangeComplete={handleChangeComplete}
            onChange={handleOnChnage}
            color={state.color}
          />
          <div className="md:p-[3rem] rounded-2xl h-[450px] p-[1rem] glassmorphism-inner flex flex-col justify-between gap-[30px] items-center">
            <p className="text-white text-[22px] relative  ">
              YOUR CURRENT COLOR
            </p>
            {state.showModal && (
              <Modal
                removeModal={removeFailMsg}
                msg="Too Much Item in Storage"
              />
            )}
            <div className="flex flex-row gap-1 items-center">
              <BsFillBookmarksFill
                size={32}
                color="white"
                className=" cursor-pointer hover:rotate-12 duration-500"
                onClick={() => openSave()}
              />
              <p className="text-white font-thin">OPEN YOUR SAVED COLORS</p>
            </div>
            <div
              style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
              className={` w-[200px] rounded-[20px] h-[100px] `}
            ></div>
            <div className="h-[30px]">
              <p className="text-white">{state.hex}</p>
            </div>
            <div className="flex flex-row justify-evenly gap-6">
              <button
                className="text-white px-[10px] py-[10px] rounded-[10px] bg-white/10 backdrop-blur-3xl"
                onClick={() => handleSaveProcess(state.hex)}
              >
                SAVE
              </button>
              <button
                className="text-white px-[10px] py-[10px] rounded-[10px] bg-white/10 backdrop-blur-3xl "
                onClick={() => handleCopy()}
                onPointerUp={() => handleCopy()}
              >
                COPY
              </button>
              <button className="text-white px-[10px] py-[10px] rounded-[10px] bg-white/10 backdrop-blur-3xl">
                Pass to Shades
              </button>
            </div>
          </div>
          {/* {for color storage} */}

          {/* <ChromePicker onChangeComplete={handleChangeComplete} color={color} /> */}
          {/* React Color */}
          {/* <input
          className="today_color"
          onChange={handleChangeComplete}
          type="color"
          defaultValue={"#1f1f1f1"}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
