/**
 * Node modules
 */
import { useContext } from "react";

/**
 * Contexts
 */
import { CartContext } from "../contexts/CartContext";

const useCart = () => useContext(CartContext);
export default useCart;