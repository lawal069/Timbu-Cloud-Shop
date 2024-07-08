import Image from "next/image";
import React from "react";
import RateComp from "./RateComp";
import { Button } from "./ui/button";

const ProductDetail = () => {
  return (
    <section className="w-full">
      <div className="w-full px-[120px] py-[40px] flex gap-[48px] bg-[#FEFEFE] justify-center items-center">
        <div className="w-[576px] h-[497px]">
          <div className="w-full h-full relative">
            <Image
              src="/desktop/product1.png"
              alt=""
              fill
              className="w-auto object-contain absolute"
            />
          </div>
        </div>
        {/* right side */}
        <div className="w-[576px] h-[497px] flex flex-col gap-4 py-[10px]">
          <div className="w-full flex gap-[10px]">
            <div className="w-full flex flex-col gap-4">
              <p className="text-[#151515] font-semibold text-[20px]">
                Suade Shoe (Black)
              </p>
              <p className="text-[#151515] font-bold text-[24px]">₦31,000</p>
            </div>
            <RateComp />
          </div>
          <div className="w-full flex flex-col gap-[12px] text-[#151515]">
            <p className="font-semibold text-base leading-[20.16px] py-[12px]">
              Product Description
            </p>
            <p className="text-[14px] font-normal leading-[17.64px]">
              Shopperz is a driving force behind the dreams of emerging
              entrepreneurs and a trusted partner for industry leaders
            </p>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[452px] flex flex-col gap-4">
              <p className="font-semibold text-base leading-[20.16px] py-[12px]">
                Color
              </p>
              <div className="flex gap-[10px] ">
                <div className="rounded-full w-[24px] h-[24px] bg-[#000000]"></div>
                <div className="rounded-full w-[24px] h-[24px] bg-[#ffffff] border border-1"></div>
                <div className="rounded-full w-[24px] h-[24px] bg-[#160751]"></div>
              </div>
            </div>
            <div className="w-[108px] flex flex-col gap-[10px] justify-end items-end">
              <p className="fontn-semibold text-[20px] leading-[25.2px]">
                Quantity
              </p>
              <div className="flex gap-[10px]">
                <Image src={"/minus.png"} alt="minus" width={24} height={24} />
                <p>1</p>
                <Image src={"/plus.png"} alt="add" width={24} height={24} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <p className="font-semibold text-base leading-[20.16px] py-[12px]">
              Size
            </p>
            <div className="w-full flex gap-[10px]">
              <div className="w-[107.2px] h-[40px] rounded-[8px] px-[8px] py-[11px] bg-black text-[#fefefe] flex items-center justify-center">
                30-32
              </div>
              <div className="w-[107.2px] h-[40px] rounded-[8px] px-[8px] py-[11px] bg-white text-[#151515] flex items-center justify-center">
                33-35
              </div>
              <div className="w-[107.2px] h-[40px] rounded-[8px] px-[8px] py-[11px] bg-white text-[#151515] flex items-center justify-center">
                36-38
              </div>
              <div className="w-[107.2px] h-[40px] rounded-[8px] px-[8px] py-[11px] bg-white text-[#151515] flex items-center justify-center">
                39-41
              </div>
              <div className="w-[107.2px] h-[40px] rounded-[8px] px-[8px] py-[11px] bg-white text-[#151515] flex items-center justify-center">
                43-35
              </div>
            </div>
          </div>
          <div className="w-full flex gap-[10px]">
            <Button className="py-[10px] px-[24px] flex gap-[10px] w-[283px] h-[64px] rounded-[16px] bg-[#151515] hover:bg-[#151515]">
              <Image src="/cart.png" alt="cart" width={16} height={20} />
              <p className="font-medium text-base leading-[20.16px] text-[#fefefe]">
                Add To Cart
              </p>
            </Button>
            <Button className="py-[10px] px-[24px] flex gap-[10px] w-[283px] h-[64px] rounded-[16px] bg-transparent hover:bg-transparent border border-black">
              <Image src="/love.png" alt="save" width={20} height={18.35} />
              <p className="font-medium text-base leading-[20.16px] text-[#151515]">
                Save For Later
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
