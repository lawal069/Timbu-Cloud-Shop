"use client";

import Image from "next/image";
import React from "react";
import { ProductData } from "@/data/product";
import { Button } from "@/components/ui/button";
import ProductComp from "@/components/ProductComp";
import RateComp from "@/components/RateComp";
import CategoryComp from "@/components/CategoryComp";
import Link from "next/link";

interface pageProps {
  params: {
    productId: string;
  };
}

const ProductDetail = ({ params }: pageProps) => {
  const selectedProduct = ProductData.find(
    (product) => product.productId === params.productId
  );
  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full py-[40px] flex flex-col gap-[48px] bg-white">
        <div className="w-full bg-[#fefefe] flex flex-col gap-[24px] px-[20px] md:px-[120px]">
          <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px]md:leading-[30.24px] text-[#151515]">
            Product
          </p>
          <div className="w-full flex flex-col md:flex-row gap-[48px]">
            <div className="w-full md:w-[576px] h-[322px] md:h-[497px]">
              <div className="w-full h-full relative">
                <Image
                  src={selectedProduct?.imgSrc || ""}
                  alt=""
                  fill
                  className="w-auto object-contain absolute"
                />
              </div>
            </div>
            {/* right side */}
            <div className="w-full md:w-[576px] h-auto md:h-[497px] flex flex-col gap-4 py-[10px]">
              <div className="w-full flex gap-[10px]">
                <div className="w-full flex flex-col gap-4">
                  <p className="text-[#151515] font-semibold text-[20px]">
                    {selectedProduct?.name}
                  </p>
                  <p className="text-[#151515] font-bold text-[24px]">
                    {selectedProduct?.price}
                  </p>
                </div>
                <RateComp />
              </div>
              <div className="w-full flex flex-col gap-[12px] text-[#151515]">
                <p className="font-semibold text-base leading-[20.16px] py-[12px]">
                  Product Description
                </p>
                <p className="text-[14px] font-normal leading-[17.64px]">
                  {selectedProduct?.description}
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
                    <Image
                      src={"/minus.png"}
                      alt="minus"
                      width={24}
                      height={24}
                    />
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
                <Button
                  asChild
                  className="py-[10px] px-[24px] flex gap-[10px] w-[283px] h-[64px] rounded-[16px] bg-[#151515] hover:bg-[#151515]"
                >
                  <Link href={"/cart"}>
                    <Image src="/cart.png" alt="cart" width={16} height={20} />
                    <p className="font-medium text-base leading-[20.16px] text-[#fefefe]">
                      Add To Cart
                    </p>
                  </Link>
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
        </div>
        <div className="px-[20px] md:px-[120px]">
          <CategoryComp title="Related Item" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
