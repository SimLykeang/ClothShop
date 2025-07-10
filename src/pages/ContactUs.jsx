import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full max-w-[60%] bg-white rounded-lg shadow-lg p-6 m-auto mt-5 mb-30">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 font-(family-name:--font-poppin-bold)">
        Contact Form
      </h2>
      <form className="flex flex-col">
        <input
          type="text"
          name="fullName"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
        />
        <input
          type="number"
          name="phone"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Phone Number"
        />

        <input
          type="date"
          name="dob"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Date of Birth"
        />
        <textarea
          name="message"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-[10px] sm:text-xl bg-gradient-to-r w-[40%] m-auto from-gray-900 to-black text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-white hover:text-white transition duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
