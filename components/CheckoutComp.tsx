"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const CheckoutComp = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectionChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="px-[20px] md:px-[120px] py-[24px] w-full flex flex-col justify-center items-center gap-[24px]">
      <div className="w-full flex flex-col gap-[24px] justify-center items-center">
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
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Phone Number"
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Email Address"
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Delivery Address"
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Logic Radio Button */}
        <div className="w-full md:w-auto flex flex-col">
          <div className="w-full flex flex-col gap-[24px]">
            <div className="w-full text-[#151515] flex flex-col gap-4">
              <p className="text-base font-medium leading-[20.16px]">
                Available Shipping Method
              </p>
              <p className="font-normal text-sm">
                Choose your preferred delivery company{" "}
              </p>
            </div>
          </div>
          <RadioGroup defaultValue="" onValueChange={handleSelectionChange}>
            <div className="items-center px-[8px] py-4 flex justify-between">
              <div className="flex gap-4 items-center">
                <RadioGroupItem value="comfortable" id="r2" />
                <div className="flex flex-col">
                  <Label
                    htmlFor="r2"
                    className="text-base font-medium text-[#151515]"
                  >
                    GIG Logistics
                  </Label>
                  <Label className="text-sm font-normal text-[#151515]">
                    2 days after order
                  </Label>
                </div>
              </div>
              <p className="text-[#3A9A32] text-sm font-semibold">₦3,000</p>
            </div>

            <div className="items-center px-[8px] py-4 flex justify-between">
              <div className="flex gap-4 items-center">
                <RadioGroupItem value="comfortable" id="r3" />
                <div className="flex flex-col">
                  <Label
                    htmlFor="r3"
                    className="text-base font-medium text-[#151515]"
                  >
                    Swift Logistics
                  </Label>
                  <Label className="text-sm font-normal text-[#151515]">
                    1 days after order
                  </Label>
                </div>
              </div>
              <p className="text-[#3A9A32] text-sm font-semibold">₦5,000</p>
            </div>
          </RadioGroup>
          {/* {selectedValue && <Button>Pay</Button>} */}
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
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Mastercard"
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <Input
              placeholder="Card Serial Number"
              className="w-full h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
            />
            <div className="w-full flex gap-[10px]">
              <Input
                placeholder="CVV"
                className="w-1/2 h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
              />
              <Input
                placeholder="Card Expiry Date"
                className="w-1/2 h-[48px] rounded-[8px] border border-[#151515] p-4 bg-transparent text-[#151515]"
              />
            </div>
          </div>
        </div>
      </div>

      {selectedValue && (
        <Button
          asChild
          className="w-full h-[60px] px-[24px] py-[20px] text-base text-[#fefefe] bg-[#151515] hover:bg-[#151515]"
        >
          <Link href={"/payment"}>Pay</Link>
        </Button>
      )}
    </div>
  );
};

export default CheckoutComp;
