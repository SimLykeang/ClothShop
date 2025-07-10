import { useState } from "react";
import DropDownLink from "./DropDownLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header className="bg-gray-200 py-4 flex justify-between px-10 items-center">
        <div className="flex items-center gap-1.5">
          <div className="lg:hidden mt-[5px]">
            <button className="" onClick={() => setIsActive(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <Link
            to={"/"}
            className="text-2xl sm:text-3xl lg:text-4xl font-(family-name:--font-poppin-medium) text-(--primary-color)"
          >
            Shop.com
          </Link>
        </div>
        <div className=" gap-4 hidden lg:flex items-center font-(family-name:--font-poppin-regular)">
          <DropDownLink />
          <ul className="flex gap-4">
            <li>
              <Link to={"/product"}>Products</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="relative hidden sm:flex items-center w-[300px] leading-7">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon absolute left-4 w-4 h-4 fill-[#9e9ea7]"
            fill="currentColor"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            id="search"
            placeholder="Search"
            type="search"
            // class="input"
            className=" input w-full h-10 leading-7 pl-10 pr-4 rounded-lg border-2 border-transparent outline-none bg-[#f3f3f4] text-[#0d0c22] placeholder-[#9e9ea7] transition duration-300 ease-in-out focus:outline-none focus:border-[rgba(0,0,0,0.4)] hover:border-[rgba(0,0,0,0.4)] focus:bg-white hover:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_4px_rgba(0,0,0,0.1)]"
          />
        </div>
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:scale-120 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:scale-120 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </header>
      <header
        className={`${
          isActive ? "block" : "hidden"
        } absolute p-4 top-0 mt-[28px]  z-[999] w-[40%] lg:w-[0px] lg:hidden text-[rgba(0,0)] bg-white/50 backdrop-blur-sm min-h-screen transition-all ease-in duration-200`}
      >
        <div className=" sm:pt-4 sm:px-2 pt-0 flex justify-end">
          <button className="" onClick={() => setIsActive(!isActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start  mt-5 font-(family-name:--font-poppin-regular)">
          <DropDownLink />
          <ul className="flex gap-4 flex-col">
            <li>
              <Link to={"/product"}>Products</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
