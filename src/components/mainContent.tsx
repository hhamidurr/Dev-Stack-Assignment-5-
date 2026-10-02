import { use, useState } from "react";
import type { ProductType } from "../type";
import LeftSection from "./left-sec";
import RightSection from "./right-sec";

interface PromiseType {
  productPromise: Promise<ProductType[]>;
}

const Main = ({ productPromise }: PromiseType) => {
  const products = use(productPromise);

  const [addProduct, setAddProduct] = useState<ProductType[]>([]);
  console.log(addProduct);
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-[#0F172A] text-[30px] lg:text-5xl font-bold mb-4 ">
          Explore the <span className="text-[#EC4899] mb-36">Technologies</span>
        </h2>
        <p className="text-[#64748B] text-[16px] lg:text-[20px] mb-16">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* left side section */}
          <LeftSection
            products={products}
            addProduct={addProduct}
            setAddProduct={setAddProduct}
          />
          {/* right side section */}
          <RightSection addProduct={addProduct} setAddProduct={setAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default Main;
