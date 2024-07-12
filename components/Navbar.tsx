import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-row items-center justify-between p-2 sm:p-5">
        <Image
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-10 h-10 sm:w-[62px] sm:h-[62px] bg-white rounded-full"
        />
        <nav className="flex-grow flex flex-row items-center justify-center text-xs sm:text-sm md:text-base text-[#FFFFFF]">
          <a className="mx-1 sm:mx-2 md:mx-5 hover:text-teal-400 cursor-pointer">
            Home
          </a>
          <a className="mx-1 sm:mx-2 md:mx-5 hover:text-teal-400 cursor-pointer">
            About
          </a>
          <a className="mx-1 sm:mx-2 md:mx-5 hover:text-teal-400 cursor-pointer">
            Testimonials
          </a>
          <a className="mx-1 sm:mx-2 md:mx-5 hover:text-teal-400 cursor-pointer">
            Contact
          </a>
        </nav>
        <button className="inline-flex font-semibold items-center rounded-[47px] bg-gray-100 border-0 py-1 px-2 sm:px-3 focus:outline-none hover:bg-gray-200 text-xs sm:text-sm md:text-base">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
