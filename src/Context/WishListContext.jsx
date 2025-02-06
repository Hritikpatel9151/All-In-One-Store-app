import { createContext, useState } from "react";

export const WishListContext=createContext();
const WishListProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (product) => {
        setWishList([...wishList, { ...product, quantity: 1 }]);

    }
    const removeFromWishList = (productId) => {
        setWishList(wishList.filter(product => product.id!== productId));
    }
  return (
    <WishListContext.Provider value={{wishList,addToWishList,removeFromWishList}}>{children}</WishListContext.Provider>
  )
}

export default WishListProvider;
