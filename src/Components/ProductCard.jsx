import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-black transition-shadow duration-300 ">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <img src={product.image} alt={product.name} className=" h-48 object-cover mb-4 w-full rounded" />
      <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
      <div className="flex space-x-2">
        <button className="bg-primary text-[17px] text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition duration-200">Add to Cart</button>
        <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary hover:text-secondary transition duration-200">Add to WishList</button>
      </div>
    </div>
  );
}

export default ProductCard;