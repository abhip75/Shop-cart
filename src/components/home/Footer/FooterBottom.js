import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | Shopping Cart | All Rights Reserved |
          <a
            href="https://my-portfolio-abhip75.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Abhishek Pawar
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
