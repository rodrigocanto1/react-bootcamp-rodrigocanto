import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cartItems: [] });

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productsInLocaleStorage = localStorage.getItem("cartProducts");
      return productsInLocaleStorage ? JSON.parse(productsInLocaleStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    setCartItems(
      cartItems.filter((productInCart) => productInCart.id !== product)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
