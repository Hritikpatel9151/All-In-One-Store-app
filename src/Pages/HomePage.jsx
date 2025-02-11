import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  return (
    <>
      <div className="container bg-primary h-[80vh] w-full ">
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
        <div className="w-[200px] rounded-full flex items-center justify-center bg-white hover:bg-secondary hover:text-primary transition duration-200
        p-4 absolute bottom-[13%] right-[45%] hover:scale-110 ">
          <button><Link to="/products">Shop Now</Link></button>
        </div>
        
      </div>
      <div className="">
      <span className="w-[100px] h-[100px] absolute bottom-[30%] right-1 rounded-full animate-bounce bg-black"></span>
      <span className="w-[50px] h-[50px] absolute top-[40%] left-[35%] rounded-full animate-bounce bg-white"></span>
      <span className="w-[100px] h-[100px] absolute top-[80%] left-[10%] rounded-full  bg-black"></span>
      <span className="w-[60px] h-[60px] absolute  left-[11%] rounded-full animate-bounce  bg-primary"></span>
      </div>
      <div className="flex flex-col mt-[100px]">
          <h2 className="text-center text-2xl font-bold text-secondary ">
            Featured Products
          </h2>
          <ProductList />
        </div>
        <footer className="text-center p-4 bg-black text-white">
        &copy; 2023 All In One Store. All rights reserved.
        
      </footer>
    </>
  );
};

export default HomePage;
