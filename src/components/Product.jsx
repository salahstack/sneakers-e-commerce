/**
 * Node modules
 */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * Assets
 */
import { addIcon, minusIcon } from "../assets";
/**
 * Hooks
 */
import useCart from "../hooks/useCart";

const Product = ({ product, text = "Discover", buy = false }) => {
  const { addItem, cartItems } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    !isProductInCart && setQuantity(0);
  }, [cartItems, product.id])

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => setQuantity((prev) => (prev === 0 ? prev : prev - 1));

  const resetQuantity = () => setQuantity(0);

  return (
    <div className="card rounded-lg overflow-hidden bg-surface shadow-md">
      <div className="card-banner">
        <figure className="h-56">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
      <div className="card-content p-3">
        <h4 className="text-xl truncate text-ellipsis overflow-hidden line-clamp-1">{product.name}</h4>
        <p className="truncate text-ellipsis overflow-hidden line-clamp-3">{product.description}</p>
        <span className="text-xl font-medium block">${(product.price).toFixed(2)}</span>
        <div className="flex items-center justify-between gap-2 mt-4">
          {
            buy ? (
              <button onClick={() => { addItem({...product, quantity}); resetQuantity(); }} className="grid place-content-center bg-primary text-onPrimary px-3 h-10 rounded-lg w-fit">{text}</button>
            ) : (
              <Link
                to="/products"
                className="grid place-content-center bg-primary text-onPrimary px-3 h-10 rounded-lg w-fit"
              >{text}</Link>
            )
          }
          {buy && (
            <div className="bg-outline/35 flex items-center justify-between p-2 rounded-lg flex-grow">
              <button className="w-6 h-6 grid place-content-center" onClick={incrementQuantity}>
                <img src={addIcon} alt="plus" />
              </button>
              <span>{quantity}</span>
              <button className="w-6 h-6 grid place-content-center" onClick={decrementQuantity}>
                <img src={minusIcon} alt="minus" />
              </button>
            </div>
          )}
        </div>
        {
          buy && (
            <Link to={`/products/${product.id}`} className="btn grid place-content-center bg-primary text-onPrimary px-3 h-10 rounded-lg mt-4">View Details</Link>
          )
        }
      </div>
    </div>
  );
};

export default Product;
