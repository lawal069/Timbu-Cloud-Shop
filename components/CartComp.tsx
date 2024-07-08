import React from "react";
import CartDetail from "./CartDetail";
import { Button } from "./ui/button";

const CartComp = () => {
  return (
    <div className="px-[20px] md:px-[120px] py-[24px] w-full flex flex-col justify-center items-center gap-[24px]">
      <div className="w-full flex justify-between items-center text-[20px] leading-[25.2px]">
        <p className="font-medium text-[#151515]">My Cart</p>
        <p className="font-normal text-[#3A9A32]">Edit</p>
      </div>

      <div className="w-full p-[8px] flex flex-col gap-4">
        <CartDetail />
        <CartDetail />
        <CartDetail />
      </div>

      <div className="w-full flex flex-col gap-[20px] py-[10px]">
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-medium">Sub-Total</p>
          <p className="text-[20px] font-bold leading-[25.2px]">₦47,000</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-medium">Delivery Fee</p>
          <p className="text-[20px] font-bold leading-[25.2px]">₦3,000</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-medium">Total</p>
          <p className="text-[20px] font-bold leading-[25.2px]">₦50,000</p>
        </div>

        <Button className="w-full bg-[#151515] hover:bg-[#151515] px-[24px] py-[20px] h-[60px]">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartComp;
