import React from "react";
import Card from "../components/Card";
import { data } from "../Data/allProduct";

const Product = () => {
  return (
    <div className="flex flex-col gap-7 m-auto flex-wrap w-[90vw] mt-20 justify-center items-center mb-50">
      <h1 className="text-2xl font-(family-name:--font-poppin-extrabold) md:text-3xl lg:text-4xl">
        All Product
      </h1>
      <div className="flex gap-7 flex-wrap justify-center items-center">
        {data.map((props) => (
          <Card key={props.id} {...props} />
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Product;
