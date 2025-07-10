import React from "react";
import CasualImg from "../assets/Images/BrwoseByDressImg/Casaul.webp";
import FormalImg from "../assets/Images/BrwoseByDressImg/FormalImg.jpg";
import PartImg from "../assets/Images/BrwoseByDressImg/PartyImg.jpg";
import GymImg from "../assets/Images/BrwoseByDressImg/GymImg.jpg";

const BrowseByDress = () => {
  return (
    <div className="w-auto mx-7 mt-10 self-center rounded-2xl bg-gray-200 flex item-center justify-center flex-col text-center px-5 py-4 gap-9">
      <h1 className="font-(family-name:--font-poppin-extrabold) text-2xl lg:text-4xl my-5">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-y-5 lg:gap-0 flex flex-col gap-5">
        <div className=" lg:w-[40%] relative justify-between w-[90%] h-[200px] bg-white border-2 self-center overflow-hidden flex rounded-2xl">
          <div className="px-9 py-5 text-2xl font-(family-name:--font-poppin-semiBold)">
            <h1 className="">Casual</h1>
          </div>
          <img className="h-[300px] " src={CasualImg} alt="" />
        </div>
        <div className=" lg:w-[58%] relative justify-between w-[90%] h-[200px] bg-white border-2 self-center overflow-hidden flex rounded-2xl">
          <div className="px-9 py-5 text-2xl font-(family-name:--font-poppin-semiBold)">
            <h1 className="">Formal</h1>
          </div>
          <img className="h-[300px] " src={FormalImg} alt="" />
        </div>
        <div className="lg:w-[58%] relative justify-between w-[90%] h-[200px] bg-white border-2 self-center overflow-hidden flex rounded-2xl">
          <div className="px-9 py-5 text-2xl font-(family-name:--font-poppin-semiBold)">
            <h1 className="">Party</h1>
          </div>
          <img className="h-[300px] " src={PartImg} alt="" />
        </div>
        <div className="lg:w-[40%] relative justify-between w-[90%] h-[200px] bg-white border-2 self-center overflow-hidden flex rounded-2xl">
          <div className="px-9 py-5 text-2xl font-(family-name:--font-poppin-semiBold)">
            <h1 className="">Gym</h1>
          </div>
          <img className="h-[300px] " src={GymImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrowseByDress;
