import React from "react";
import { useNavigate} from "react-router-dom";
import ProductList from "../Components/ProductList";


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
     
      <div className="container bg-primary min-h-screen  w-full flex flex-col items-center p-4 md:p-8 mt-[60px]">
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
        <div className="w-40 md:w-48 lg:w-56  rounded-full flex items-center justify-center bg-white hover:bg-secondary hover:text-primary transition-transform duration-300 ease-in-out p-3 lg:p-4 absolute bottom-[15%] lg:bottom-[13%] right-[50%] lg:right-[45%] hover:scale-110 ">
            <button className="" onClick={() => navigate("/products")}>
              <div className="text-animation">
                <span>S</span>
                <span>h</span>
                <span>o</span>
                <span>p</span>
                <span> </span>
                <span>N</span>
                <span>o</span>
                <span>w</span>
              </div>
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
          &copy; 2025 All In One Store. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default HomePage;
