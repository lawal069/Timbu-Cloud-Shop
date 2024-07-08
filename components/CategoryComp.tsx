import React from "react";
import ProductComp from "./ProductComp";
import { ProductData } from "@/data/product";

interface CategoryTitleProps {
  title: string;
}

const CategoryComp: React.FC<CategoryTitleProps> = ({ title }) => {
  return (
    <div className="w-full h-auto md:h-[678px] flex flex-col gap-[24px]">
      <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px]md:leading-[30.24px] text-[#151515]">
        {title}
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[8px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            {ProductData.map((product) => (
              <ProductComp key={product.productId} data={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComp;
