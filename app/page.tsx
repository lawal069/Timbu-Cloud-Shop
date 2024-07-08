import CategoryComp from "@/components/CategoryComp";
import ProductComp from "@/components/ProductComp";
import ProductDetail from "@/components/ProductDetail";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[300px]">
          <div className="w-full h-full relative">
            <Image
              src="/desktop/desktop-showcase.png"
              alt="showcase"
              fill
              className="w-auto absolute object-contain"
            />
          </div>
        </div>
        <section className="w-full px-[24px] md:px-[120px] py-[40px] flex flex-col">
          {/* Category Option */}
          <div className="w-full h-[49px] bg-[#fefefe] flex justify-between items-center">
            <h5 className="hidden md:flex font-medium text-[20px] leading-[25.2px]">
              Categories
            </h5>
            <div className="flex gap-[5px]">
              {CategoriesData.map((category, index) => (
                <div key={index} className="px-[20px] py-[15px]">
                  <p className="font-medium text-[#151515]">{category.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products Display */}
          <div className="w-full py-[24px]">
            <CategoryComp title="For You" />
            {/* <CategoryComp title="New Products" /> */}
            {/* Trending */}
            <div className="w-full">
              <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px]md:leading-[30.24px] text-[#151515]">
                Trending
              </p>
            </div>
            {/* <CategoryComp title="Women" />
            <CategoryComp title="Sneakers" /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

const CategoriesData = [
  {
    name: "All",
  },
  {
    name: "Men",
  },
  {
    name: "Women",
  },
  {
    name: "Kids",
  },
  {
    name: "Sneakers",
  },
  {
    name: "Slippers",
  },
];
