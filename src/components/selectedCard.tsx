import type { ProductType } from "../type";
import { RxCross2 } from "react-icons/rx";

interface selectedProps {
  product: ProductType;
  addProduct: ProductType[];
  setAddProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const Selected = ({ product, addProduct, setAddProduct }: selectedProps) => {

  const handleDeleteProduct = (product: ProductType) => {
    const updatedProducts = addProduct.filter(
      item => item.name !== product.name,
    );
    console.log(updatedProducts);
    setAddProduct(updatedProducts);
  };



  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-2">
        <div className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-pink-50 to-violet-50 flex items-center justify-center">
              <img
                src={product.icon}
                alt="skill"
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
          <button
            onClick={() => handleDeleteProduct(product)}
            className=" p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <RxCross2 className="text-lg font-bold rounded-md text-red-800" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Selected;
