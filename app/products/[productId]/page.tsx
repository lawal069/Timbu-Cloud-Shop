import ProductComp from "@/components/ProductComp";
import ProductDetail from "@/components/ProductDetail";
import { productData } from "@/data/product";
import React from "react";

interface pageProps {
  params: {
    productId: string;
  };
}

const ProductDetails = ({ params }: pageProps) => {
  const selectedProduct = productData.find(
      (product) =>product.id === params.productId
  );
  
  return (
    <div className="w-full flex flex-col">
      <ProductDetail />
      <div className="w-full flex flex-wrap gap-[8px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <ProductComp />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
