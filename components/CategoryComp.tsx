import React from "react";
import ProductComp from "./ProductComp";
import { ProductData } from "@/data/productsData";
// import { productData } from '@/data/product';

interface CategoryTitleProps {
  title: string;
}

const CategoryComp: React.FC<CategoryTitleProps> = ({ title }) => {
  const filteredProducts = ProductData.filter(
    (product) => product.category?.toLowerCase() === title.toLowerCase()
  ); 

  return (
    <div className="w-full h-auto flex flex-col gap-[24px]">
      <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px] md:leading-[30.24px] text-[#151515]">
        {title}
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[8px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.productId}
              className="flex justify-center items-center"
            >
              <ProductComp data={product} />
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryComp;
