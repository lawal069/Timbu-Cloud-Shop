import Image from 'next/image';
import React from 'react'

const CartDetail = () => {
  return (
    <div className="w-full flex justify-between items-center h-[133px] p-[8px] gap-[24px]">
      <div className="flex items-center gap-[24px]">
        <Image src="/leather.png" alt="minus" width={130} height={117} />
        <div className="flex flex-col gap-4 ">
          <div className="text-[#151515] text-base font-semibold leading-[20.16px] flex flex-col gap-[8px]">
            <p>Niva Leather (Black)</p>
            <p>Color: Black</p>
            <p>Qty: 1</p>
          </div>
          <p className="font-bold text-[20px] leading-[25.2px]">₦31,000</p>
        </div>
      </div>
      <Image src="/minus.png" alt="minus" width={32} height={32} />
    </div>
  );
}

export default CartDetail