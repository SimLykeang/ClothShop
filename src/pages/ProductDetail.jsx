import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Review from "../components/Review";
import { data } from "../Data/allProduct";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  // const detailPro = data.find((d) => d.id == id);
  // console.log(detailPro);
  const { name, img, price, detail, category, discount } = data.find(
    (d) => d.id == id
  );
  return (
    <div className=" w-[100%] mb-50">
      <div className="max-w-[90%] lg:max-w-5xl ml-10 flex items-center gap-1 text-sm text-gray-600 mt-4">
        <Link to={"/"}>Home</Link>
        <MdNavigateNext />
        <Link to={"/product"}>Product</Link>
        <MdNavigateNext />
        <Link to={""}>{category}</Link>
      </div>
      <div className="flex flex-col md:flex-row max-w-[90%] md:max-w-5xl mx-auto mt-10 items-center md:items-start">
        <div className="w-[100%] mt-5 flex justify-center items-center">
          <img className=" rounded-2xl" src={img} alt="" />
        </div>
        <div className="px-5 py-5 flex flex-col w-[90%]">
          <h1 className="font-(family-name:--font-poppin-extrabold) text-2xl md:text-3xl lg:text-4xl">
            {name}
          </h1>
          <div className="flex gap-1 text-yellow-400 mt-3 lg:mt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex mt-5 items-center gap-3">
            <h2 className=" text-xl md:text-2xl">
              ${Number((price * (100 - discount)) / 100)}
            </h2>
            <h2 className="text-xl md:text-2xl text-gray-500 line-through">
              ${price}
            </h2>
            <div className="bg-red-200 text-red-600 px-3 py-1 rounded-2xl text-[10px] md:text-sm">
              -{discount}%
            </div>
          </div>
          <p className="text-sm mt-5 w-[100%] lg:text-xl">{detail}</p>
          <div className="flex w-[100%] justify-between mx-auto mt-10 text-sm lg:text-xl">
            <div className="bg-gray-200 w-[40%] flex justify-evenly items-center lg:px-5 lg:py-2 rounded-3xl py-2 px-3">
              <div onClick={() => setCount(count - 1)}>
                <FiMinus />
              </div>
              <div>{count}</div>
              <div onClick={() => setCount(count + 1)}>
                <FiPlus />
              </div>
            </div>
            <button className="bg-black text-white w-[45%] lg:px-5 lg:py-2 rounded-3xl py-2 px-1">
              Add to Card
            </button>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default ProductDetail;
