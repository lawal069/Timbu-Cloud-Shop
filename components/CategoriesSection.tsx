import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryComp from "./CategoryComp";

const CategoriesSection = () => {
  return (
    <Tabs
      defaultValue="all"
      className="w-full px-[20px] md:px-[120px] py-[40px]"
    >
      <div className="w-full flex justify-between">
        <h5 className="text-[20px] font-medium leading-[25.2px] md:block hidden">
          Categories
        </h5>
        <TabsList className="w-auto flex bg-transparent font-medium gap-[12px] text-[#151515] py-[24px]">
          <TabsTrigger
            value="all"
            className="data-[state=active]:text-[#3A9A32] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="men"
            className="data-[state=active]:text-[#3A9A32] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Men
          </TabsTrigger>
          <TabsTrigger
            value="women"
            className="data-[state=active]:text-[#3A9A32] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Women
          </TabsTrigger>
          <TabsTrigger
            value="kids"
            className="data-[state=active]:text-[#3A9A32] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Kids
          </TabsTrigger>
          <TabsTrigger
            value="sneakers"
            className="data-[state=active]:text-[#3A9A32] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Sneakers
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all">
        <div className="w-full py-[24px] flex flex-col gap-[24px]">
          {/* <CategoryComp title="For You" /> */}
          {/* <CategoryComp title="New Products" /> */}

          {/* Trending */}
          <div className="w-full">
            <p className="text-medium md:font-semibold text-base md:text-[24px] leading-[20.16px] md:leading-[30.24px] text-[#151515]">
              Trending
            </p>
            <div className="w-full flex">
              <div></div>
            </div>
          </div>
          <CategoryComp title="Men" />
          <CategoryComp title="Women" />
          <CategoryComp title="Sneakers" />
        </div>
      </TabsContent>
      <TabsContent value="men">
        <div className="w-full py-[24px] flex flex-col gap-[24px]">
          <CategoryComp title="Men" />
        </div>
      </TabsContent>
      <TabsContent value="women">
        <div className="w-full py-[24px] flex flex-col gap-[24px]">
          <CategoryComp title="Women" />
        </div>
      </TabsContent>
      <TabsContent value="kids">
        <div className="w-full py-[24px] flex flex-col gap-[24px]">
          <CategoryComp title="Kids" />
        </div>
      </TabsContent>
      <TabsContent value="sneakers">
        <div className="w-full py-[24px] flex flex-col gap-[24px]">
          <CategoryComp title="Sneakers" />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CategoriesSection;
