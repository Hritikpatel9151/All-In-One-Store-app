import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // setCart([...cart, { ...product, quantity: 1 }]);
    setCart((prevProduct)=>{
      const existingProduct = prevProduct.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProduct.map((p) =>
          p.id === product.id ? {...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevProduct, {...product, quantity: 1 }];
    })
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id!== productId));
  };
  
  const updateQuantity = (productId, newQuantity) => {
    setCart(cart.map((product) =>
      product.id === productId ? {...product, quantity: newQuantity } : product
    ));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
