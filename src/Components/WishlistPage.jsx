import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast} from 'react-hot-toast';

import { addToCartWithWishlist, removeFromWishlist } from "../Redux/features/WishlistSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCartWithWishlist(product));
     toast.success("Product added to cart successfully!");
  };

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Wishlist of User</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-primary shadow-2xl rounded-lg p-4">
          {wishlist.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-black transition-shadow duration-300 transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                className="h-48 object-cover mb-4 w-full rounded"
              />
              <p className="text-lg font-semibold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex space-x-2">
                <button
                  className="bg-primary text-[17px] text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-primary transition duration-200"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary hover:text-secondary transition duration-200"
                  onClick={() => (dispatch(removeFromWishlist({ id: product.id })).then(toast.success("Removed from wishlist"))) }
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
