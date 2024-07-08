export interface ProductDetail {
  productId?: string;
  name?: string;
  price?: string;
  description?: string;
  imgSrc?: string;
}

export const ProductData: ProductDetail[] = [
  {
    productId: "01",
    name: "Nike AirForce 1",
    price: "₦300,000",
    description:
      "Shopperz is a driving force behind the dreams of emerging entrepreneurs and a trusted partner for industry leaders",
    imgSrc: "/desktop/product1.png",
  },
];