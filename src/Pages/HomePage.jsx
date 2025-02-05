import React from "react";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  return (
    <>
      <div className="container bg-primary h-[80vh] ">
        <div className="text-center mb-8 ">
          <h1 className="w-[60%] text-[100px] font-extrabold text-secondry mb-4 text-start ">
            Welcome to All In One Store!
          </h1>
          <p className="text-lg text-gray-800 text-left text-[20px]">
            Discover a world of amazing products at unbeatable prices. Shop now
            and elevate your lifestyle with our premium collection!
          </p>
          <div className="bg-white h-[180px] w-[180px] rounded-full absolute right-6 bottom-[40%] "></div>
          <div className="bg-black h-[180px] w-[180px] rounded-full absolute top-[100px] right-11"></div>
       
        </div>
        <div className="w-full">
          <h2 className="text-center text-2xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
