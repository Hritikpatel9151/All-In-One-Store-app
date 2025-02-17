import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/Debounce";
import products from "../MokeData/products";
import { useMemo } from "react";
import Filters from "./Filters";
  
const itemsPerPage =6;
const ProductList = () => {
  const { search } = useSelector((state) => state.search);
  const updatedProducts = useSelector((state) => state.products.products);
  const allProducts = useMemo(() => 
    Array.isArray(updatedProducts) ? updatedProducts.concat(products) : products,
    [updatedProducts] 
  );
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [category, setCategory] = useState("all");
  const debouncedSearch = useDebounce(search, 500);

  const [currentPage,setCurrentPage] = useState(1);

  useEffect(() => {
    let results = allProducts;

    if (debouncedSearch) {
      results = results.filter((product) =>
        product.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      results = results.filter((product) => product.title === category);
    }

    results = results.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === "price-asc") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      results.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
    setCurrentPage(1);
  }, [debouncedSearch, allProducts, sortOption, priceRange, category]);
  

{/* Pagination logic */}
const totalPages = allProducts.length > 0 ? Math.ceil(allProducts.length / itemsPerPage) : 0;
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
   <>
    {currentProducts.length > 0 ? (
      <>
      <Filters 
        setSortOption={setSortOption} 
        setPriceRange={setPriceRange} 
        setCategory={setCategory} 
        priceRange={priceRange}
      
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-primary text-black font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-primary text-black px-4 font-semibold py-2 rounded-md ml-2 hover:bg-black hover:text-white transition duration-300"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= allProducts.length}
        >
          Next
        </button>
      </div>
      </>
    ) : (
      <div className="p-4 flex items-center justify-center font-bold mt-6">
        <p>Product not found</p>
      </div>
    )}
   </>
  );
};

export default ProductList;
