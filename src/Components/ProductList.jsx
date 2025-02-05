import ProductCard from "./ProductCard";
import products from "../MokeData/products";

const ProductList = () => {
  return (
    <div className="   grid grid-cols-3  gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
