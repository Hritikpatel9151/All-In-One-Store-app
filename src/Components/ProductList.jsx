import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/Debounce";
import products from "../MokeData/products";
import { useMemo } from "react";

const ProductList = () => {
  const { search } = useSelector((state) => state.search);
  const updatedProducts = useSelector((state) => state.products.products);
  const allProducts = useMemo(() => 
    Array.isArray(updatedProducts) ? updatedProducts.concat(products) : products,
    [updatedProducts] 
  );
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      const results = allProducts.filter((product) =>
        product.title?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [debouncedSearch, allProducts]);

  return (
   <>
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-3 gap-4 p-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    ) : (
      <div className="p-4 flex items-center justify-center font-bold mt-6">
        <p>Product not found</p>
      </div>
    )}
   </>
  );
};

export default ProductList;
