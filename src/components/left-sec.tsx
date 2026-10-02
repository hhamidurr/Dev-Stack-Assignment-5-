import type { Dispatch, SetStateAction } from "react";
import type { ProductType } from "../type";
import Card from "./card";

interface productProps {
  products: ProductType[];
  addProduct: ProductType[];
  setAddProduct: Dispatch<SetStateAction<ProductType[]>>
}

const LeftSection = ({ products, addProduct, setAddProduct }: productProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product, index) => {
          return <Card key={index} product={product} addProduct={addProduct} setAddProduct={setAddProduct}/>;
        })}
      </div>
    </>
  );
};

export default LeftSection;
