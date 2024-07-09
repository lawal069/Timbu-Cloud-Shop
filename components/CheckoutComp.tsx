import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckoutComp = () => {
  return (
    <div className="px-[20px] md:px-[120px] py-[24px] w-full flex flex-col justify-center items-center gap-[24px]">
      <div className="w-full flex flex-col md:flex-row gap-[24px] justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-[24px] pr-0 md:pr-[20px] py-0 md-py-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <div className="w-full text-[#151515] flex flex-col gap-4">
              <p className="text-base font-medium leading-[20.16px]">
                Buyer’s Information
              </p>
              <p className="font-normal text-sm">Enter your details </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <Input
              placeholder="Enter Your Name"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Phone Number"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Email Address"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Delivery Address"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-[24px] pl-0 md:pl-[20px] py-0 md-py-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <div className="w-full text-[#151515] flex flex-col gap-4">
              <p className="text-base font-medium leading-[20.16px]">
                Payment Info
              </p>
              <p className="font-normal text-sm">Enter your account details </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Input
              placeholder="Card Holder"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Mastercard"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Card Serial Number"
              className="w-full h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <div className="w-full flex gap-[10px]">
              <Input
                placeholder="CVV"
                className="w-1/2 h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
              />
              <Input
                placeholder="Card Expiry Date"
                className="w-1/2 h-[64px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
              />
            </div>
          </div>
        </div>
      </div>

      <Button className="w-full h-[60px] px-[24px] py-[20px] text-base text-[#fefefe] bg-[#151515] hover:bg-[#151515]">
        Pay
      </Button>
    </div>
  );
};

export default CheckoutComp;
