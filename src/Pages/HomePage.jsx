import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  return (
    <>
      {/* <div className="container bg-primary h-[80vh] w-full ">
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
        
      </footer>  update it in responsive for mobile tablet and others */}
      <div className="container bg-primary min-h-screen  w-full flex flex-col items-center p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8 w-full max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-secondary mb-4 text-left md:w-[80%]">
            Welcome to All In One Store!<span className="lg:w-10 lg:h-10 absolute top-[33%] left-[58%] rounded-full animate-bounce bg-white "></span>
          </h1>
          <p className="text-md md:text-lg text-gray-800 text-left md:w-[80%]">
            Discover a world of amazing products at unbeatable prices. Shop now
            and elevate your lifestyle with our premium collection!
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="relative w-full max-w-5xl h-80 flex justify-center items-center">
          <div className="bg-white h-20 w-20 md:h-36 md:w-36 rounded-full absolute right-6 bottom-22 md:bottom-[60%]"></div>
          <div className="bg-black h-20 w-20 md:h-36 md:w-36 rounded-full absolute top-16 right-11"></div>
        </div>

        {/* Shop Now Button */}
        <div className="w-40 md:w-48 lg:w-56 rounded-full flex items-center justify-center bg-white hover:bg-secondary hover:text-primary transition duration-200 p-3 md:p-4 absolute bottom-10 md:bottom-[13%] right-[50%] md:right-[45%] hover:scale-110">
          <button>
            <Link to="/products">Shop Now</Link>
          </button>
        </div>

        {/* Animated Floating Circles */}
        <div className="relative w-full max-w-5xl">
          <span className="lg:w-16 lg:h-16 absolute bottom-[30%] right-1 rounded-full animate-bounce bg-black md:w-20 md:h-20 md:bottom-[20px]"></span>
          <span className="lg:w-16 lg:h-16 absolute left-[10%] rounded-full bg-black md:bottom-[100px] "></span>
          <span className="lg:w-12 lg:h-12 absolute left-[11%] rounded-full animate-bounce bg-white md:bottom-[100px]"></span>
        </div>

        {/* Featured Products */}
        <div className="flex flex-col mt-16 w-full max-w-5xl px-4">
          <h2 className="text-center text-xl md:text-2xl font-bold text-secondary">
            Featured Products
          </h2>
          <ProductList />
        </div>

        {/* Footer */}
        <footer className="text-center p-4 bg-black text-white w-full mt-10">
          &copy; 2023 All In One Store. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default HomePage;
