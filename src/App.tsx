import { Suspense, useState } from "react";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Main from "./components/mainContent";
import Nav from "./components/nav";
import type { ProductType } from "./type";
import { ToastContainer } from "react-toastify";

const products = async():Promise<ProductType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const [fetchProducts ] = useState( () => products())
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div className="text-center text-2xl">Loading ....</div>}>
        <Main productPromise={fetchProducts}/>
      </Suspense>
      <ToastContainer/>
      <Footer />
    </>
  );
}

export default App;
