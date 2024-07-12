import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Content = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row rounded-[30px] sm:rounded-[62px] border border-[#757575] overflow-hidden p-4 sm:p-6 lg:p-10">
      <div className="left w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 lg:pr-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight sm:leading-none">
          Shop Our Stunning <br className="hidden sm:block" /> Shoe Collection
        </h1>
        <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base">
          We believe that every step you take should be a statement of <br className="hidden md:block" />
          confidence and individuality. Our meticulously crafted footwear <br className="hidden md:block" /> 
          blends timeless elegance with modern innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
          <button className="bg-white px-6 sm:px-8 py-2 rounded-[47px] font-bold text-sm sm:text-base">
            Buy now
          </button>
          <button className="text-white px-6 sm:px-8 py-2 rounded-[47px] font-bold text-sm sm:text-base border border-[#908D8D]">
            Explore
          </button>
        </div>
      </div>
      <div className="right w-full lg:w-1/2 flex items-center justify-center">
        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl border-black/[0.1] w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto rounded-xl border">
            <CardItem translateZ="100" className="w-full h-full relative">
              <Image
                src="/content.svg"
                layout="responsive"
                width={1000}
                height={1000}
                className="object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-4/5 h-16 bg-gradient-radial from-[#888A8FF0] via-[#888A8F80] to-transparent opacity-75 blur-lg rounded-full"></div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Content;