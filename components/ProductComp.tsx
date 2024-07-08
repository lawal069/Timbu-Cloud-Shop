import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { ProductDetail } from "@/data/product";

const ProductComp = () => {
  return (
    <Card className="w-[191px] md:w-[394px] h-[300px] rounded-[8px] flex flex-col">
      <div className="h-[213px] w-full">
        <div className="w-full h-full relative">
          <Image
            src={"/desktop/nike.png"}
            alt="nike"
            className="w-auto object-contain absolute rounded-t-[8px]"
            fill
          />
        </div>
      </div>
      <div className="w-full h-[87px] flex px-3 justify-center">
        <div className="w-[336.67px] flex flex-col justify-center gap-2">
          <h6 className="text-base font-medium leading-[20.16px]">
            Nike AirForce 1
          </h6>
          <h5 className="text-base md:text-xl font-semibold leading-[20.16px] md:leading-[25.2px]">
            ₦300,000
          </h5>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={"/heart-plus.png"} alt="heart" width={24} height={24} />
        </div>
      </div>
    </Card>
  );
};

export default ProductComp;
