import Image from "next/image";
import React from "react";

const RateComp = () => {
  return (
    <div className="w-[68px] h-[32px] rounded-[8px] bg-[#151515] px-[8px] py-[4px] flex justify-center items-center">
      <Image src={"/rate-star.png"} alt="star" width={24} height={24} />
      <p className="text-base font-normal leading-[20.16px] text-[#FEFEFE]">
        4.7
      </p>
    </div>
  );
};

export default RateComp;
