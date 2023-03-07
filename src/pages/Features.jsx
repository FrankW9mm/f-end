import React, { useState } from "react";
import FeatureBlock from "../components/FeatureBlock";
import Alert from "../components/Alert";
const Features = ({ data }) => {
  const [show, setShow] = useState({ show: "false", msg: "", type: "" });

  // abstract function for setshow
  const ShowAlert = (show = false, msg, type) => {
    setShow({ show: show, msg: msg, type: type });
  };
  console.log(data);
  return (
    <div className="flex lg:p-[2rem] p-[1rem] flex-col justify-center items-start bg-[#0E0E0E]">
      <h1 className="self-start relative lg:text-[32px] md:text-[24px] text-[20px] text-white font-semibold uppercase">
        the features we have to offer
        {show.show && <Alert removeAlert={ShowAlert} {...show} />}
      </h1>

      <div className="w-full lg:mt-[3rem] mt-[3rem] lg:gap-0 gap-[2rem] flex flex-wrap lg:flex-row flex-col items-center justify-evenly">
        <div className="flex lg:gap-[40px] gap-[20px] flex-row flex-wrap lg:p-[3rem] p-[1rem] lg:w-[800px]  items-center w-full lg:justify-start justify-center">
          {data.map((items, index) => {
            return (
              <FeatureBlock {...items} id={index} />
              // <div
              //   key={index}
              //   className="lg:w-[300px] w-[250px] flex flex-col justify-center items-center gap-[20px] rounded-[20px] glassmorphism border-white  bg-[#0c0b0b] lg:h-[300px] h-[250px]"
              // >
              //   <h1 className="text-white uppercase text-[18px]">
              //     {items.text}
              //   </h1>
              //   <div className="w-[50px]">
              //     <img
              //       className="hover:rotate-[-30deg] duration-700 "
              //       src={items.imgurl}
              //       alt=""
              //     />
              //   </div>
              // </div>
            );
          })}
        </div>
        <div className="text-white lg:text-left text-left  ">
          <h1 className="lg:text-[40px] text-[30px] font-semibold">
            SPEED UP!
          </h1>
          <p className="lg:text-[28px] text-[24px]">YOUR PROJECTS</p>
          <p className="lg:text-[20px] text-[18px]">WITH US</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
