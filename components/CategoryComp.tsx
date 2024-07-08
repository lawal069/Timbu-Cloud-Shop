import React from "react";
import ProductComp from "./ProductComp";

interface CategoryTitleProps {
  title: string;
}

const CategoryComp: React.FC<CategoryTitleProps> = ({ title }) => {
  return (
    <div className="w-full h-[678px] flex flex-col gap-[24px] bg-red-600">
      <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px]md:leading-[30.24px] text-[#151515]">
        {title}
      </p>
      <div className="w-full flex flex-wrap gap-[8px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <ProductComp />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComp;
