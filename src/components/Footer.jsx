import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Visa from "../assets/Images/PayMethod/visa.png";
import Money from "../assets/Images/PayMethod/money.png";
import PayPal from "../assets/Images/PayMethod/paypal.png";
import ApplePay from "../assets/Images/PayMethod/apple-pay.png";
import GooglePay from "../assets/Images/PayMethod/google-pay.png";

const Footer = () => {
  return (
    <div className="max-w-[100%] flex flex-col items-center bg-gray-200 mt-20 relative p-5">
      <div className="flex flex-col sm:flex-row sm:justify-evenly sm:items-center gap-4 rounded-2xl w-[90%] bg-black text-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-7 lg:py-10">
        <h1 className="text-2xl lg:text-3xl font-(family-name:--font-poppin-extrabold) md:w-[40%]">
          STAY UPTO DATE ABOUT OUR LASTEST OFFERS
        </h1>
        <div className="flex flex-col gap-2 w-[100%] sm:w-[30%]">
          <input
            type="text"
            className="text-gray-500 text-[16px] focus:outline-black bg-white w-[100%] px-4 py-2 rounded-2xl"
            placeholder="Enter Your Email"
          />
          <button className="text-black text-[16px] font-semibold focus:outline-black bg-white w-[100%] px-4 py-2 rounded-2xl">
            Subcribe
          </button>
        </div>
      </div>
      <div className="mt-35 md:flex md:justify-between md:items-start">
        <div className="md:w-[35%] md:flex md:flex-col md:gap-5">
          <h1 className="text-2xl font-(family-name:--font-poppin-extrabold)">
            Shop.com
          </h1>
          <p className="my-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            natus.
          </p>
          <div className="flex gap-2">
            <div className="border-1 group border-gray-500 bg-white rounded-full p-1 hover:bg-black transition-all duration-150">
              <FaFacebookF className="text-black group-hover:text-white" />
            </div>
            <div className="border-1 group border-gray-500 bg-white rounded-full p-1 hover:bg-black transition-all duration-150">
              <FaTwitter className="text-black group-hover:text-white" />
            </div>
            <div className="border-1 group border-gray-500 bg-white rounded-full p-1 hover:bg-black transition-all duration-150">
              <FaInstagram className="text-black group-hover:text-white" />
            </div>
            <div className="border-1 group border-gray-500 bg-white rounded-full p-1 hover:bg-black transition-all duration-150">
              <FaGithub className="text-black group-hover:text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-9 gap-y-5 mt-10 md:mt-0 md:gap-x-0 lg:w-[65%] lg:flex-nowrap lg:gap-x-7">
          <div className="w-[45%] md:w-[40%] lg:w-[30%]">
            <h1 className="text-[1rem] font-(family-name:--font-poppin-medium)">
              COMPANY
            </h1>
            <ul className="text-[13px] leading-6 mt-2">
              <li>About</li>
              <li>Features</li>
              <li>Work</li>
              <li>Carrer</li>
            </ul>
          </div>
          <div className="w-[45%] md:w-[40%]">
            <h1 className="text-[1rem] font-(family-name:--font-poppin-medium)">
              HELP
            </h1>
            <ul className="text-[13px] leading-6 mt-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Term & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-[45%] md:w-[40%]">
            <h1 className="text-[1rem] font-(family-name:--font-poppin-medium)">
              FAQ
            </h1>
            <ul className="text-[13px] leading-6 mt-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="w-[45%] md:w-[40%]">
            <h1 className="text-[1rem] font-(family-name:--font-poppin-medium)">
              RESOURCES
            </h1>
            <ul className="text-[13px] leading-6 mt-2">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] mt-5">
        <hr />
        <p className="text-[16px] text-center text-gray-600 mt-1">
          Shop.com©2000-2025, All Right Reserved
        </p>
        <div className="w-[70%] flex justify-center items-center m-auto gap-3 mt-2">
          <div className="bg-white px-3 py-1 rounded-[5px]">
            <img src={Visa} alt="visaPay" className="w-8" />
          </div>
          <div className="bg-white px-3 py-1 rounded-[5px]">
            <img src={Money} alt="visaPay" className="w-8" />
          </div>
          <div className="bg-white px-3 py-1 rounded-[5px]">
            <img src={PayPal} alt="visaPay" className="w-8" />
          </div>
          <div className="bg-white px-3 py-1 rounded-[5px]">
            <img src={ApplePay} alt="visaPay" className="w-8" />
          </div>
          <div className="bg-white px-3 py-1 rounded-[5px]">
            <img src={GooglePay} alt="visaPay" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
