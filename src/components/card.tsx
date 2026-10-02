import { TiStarFullOutline } from "react-icons/ti";
import type { ProductType } from "../type";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface CardProps {
  product: ProductType;
  addProduct: ProductType[];
  setAddProduct: Dispatch<SetStateAction<ProductType[]>>;
}
const Card = ({ product, addProduct, setAddProduct }: CardProps) => {
  const [changeButton, setChangeButton] = useState(false);

  const handleProducts = () => {
    setAddProduct([...addProduct, product]);
    setChangeButton(true);

    toast.success(`${product.name} added successfully!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  

  return (
    <>
      <div className="card bg-base-100 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl w-full">
        <div className="card-body p-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-pink-50 to-violet-50 flex items-center justify-center mb-4">
                  <img
                    src={product.icon}
                    alt="skill"
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
              </div>

              <span className="badge badge-sm bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-white border-none px-3 py-3 font-medium">
                {product.badge}
              </span>
            </div>
          </div>

          <p className="text-gray-500 leading-6 mt-2">{product.description}</p>

          <div className="flex justify-between items-center mt-4 gap-2">
            <div className="px-4 py-2 text-sm bg-gray-50 rounded-lg border border-gray-200 text-gray-600 font-medium">
              {product.category}
            </div>

            <span className="text-sm text-gray-500 font-medium">
              {product.difficulty}
            </span>

            <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <TiStarFullOutline className="text-yellow-400 text-lg" />
              {product.rating}
            </span>
          </div>

          <div className="mt-6">
            <button
              onClick={() => handleProducts()}
              className={`btn btn-block border-none text-white bg-linear-to-r from-[#EC4899] to-[#8B5CF6] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300`}
              disabled={changeButton}
            >
              {changeButton ? "Added" : "Add to Stack"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
