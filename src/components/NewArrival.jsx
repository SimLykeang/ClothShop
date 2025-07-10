import React from "react";
import Card from "./Card";
import { newArrival } from "../Data/newArrival";

const NewArrival = () => {
  return (
    <div className="py-7 px-5 text-center flex flex-col justify-center items-center w-[100%] overflow-hidden">
      <h1 className="my-9 font-(family-name:--font-poppin-extrabold) lg:text-4xl text-2xl">
        New Arrival
      </h1>
      <div>
        <div className="flex gap-7 max-w-[90vw] overflow-auto rounded-2xl p-2">
          {newArrival.map((props) => (
            <Card key={props.id} {...props} />
          ))}
        </div>
        <button className="mt-9 text-2xl bg-white text-black border-2 py-3 px-7 rounded-2xl hover:bg-black hover:text-white transition-all duration-150">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
