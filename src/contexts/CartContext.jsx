/**
 * Node modules
 */
import { createContext, useCallback, useMemo, useState } from "react";

const initialCntxValue = [];

const CartContext = createContext(initialCntxValue);

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);


  const addItem = useCallback((product) => {
    if(product.quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
      return;
    }
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if(isProductInCart) {
      setCartItems(cartItems.map((item) => 
      item.id === product.id ? { ...item, quantity: product.quantity } : item));
      return;
    }

    setCartItems([...cartItems, product])
  }, [cartItems]);


  const deleteItem = useCallback((product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }, [cartItems])

  const contextValue = useMemo(() => ({ deleteItem, addItem, cartItems }), [addItem, deleteItem, cartItems])

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };