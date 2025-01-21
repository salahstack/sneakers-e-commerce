/**
 * Assets
 */
import { deleteIcon } from "../assets";
/**
 * Hooks
 */
import useCart from "../hooks/useCart";
/**
 * Components
 */
import { IconButton } from "./Button";

const CartItem = ({ item }) => {
  const { deleteItem } = useCart();
  return (
    <div className="flex items-center gap-5">
      <figure className="w-16 h-16 rounded-lg overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full" />
      </figure>
      <div>
      <h6 className="text-onSurface">{item.name}</h6>
      <span className=" mt-3 font-medium text-sm text-onSurface">${item.price.toFixed(2)} x {item.quantity}  <strong className="text-onBackground">${(item.price * item.quantity).toFixed(2)}</strong></span>
      </div>
      <IconButton onClick={() => deleteItem(item)} classes="ml-auto">
        <img src={deleteIcon} alt="delete" />
      </IconButton>
    </div>
  )
}

export default CartItem