export interface ProductDetail{
    id: string;
    name: string;
    price: string;
    description: string;
    imgSrc: string;
}

export const productData: ProductDetail[] = [
  {
    id: "p1",
    name: "Nike AirForce 1",
    price: "₦300,000",
    description:
      "Shopperz is a driving force behind the dreams of emerging entrepreneurs and a trusted partner for industry leaders",
    imgSrc: "/desktop/product1.png",
  },
];