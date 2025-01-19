/**
 * Hooks
 */
import useCart from "../hooks/useCart";
/**
 * Components
 */
import CartItem from "./CartItem";

const Cart = ({ showCart }) => {
  const { cartItems } = useCart();
  return (
    <div className={`cart ${showCart ? 'active' : ''} flex flex-col min-h-60 rounded-md p-4 bg-surface shadow-md absolute right-4 md:right-6 top-[calc(100%+16px)] max-w-[400px] w-[calc(100%-32px)] z-30`}>
      <div className="pb-4 mb-4 border-b-[1px] border-b-outline/30">
        <p className="font-medium text-lg">Cart</p>
      </div>
        <div className="flex flex-col flex-grow gap-3 ">
          {
            cartItems.length > 0 ? cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />
            }) : (
              <h5 className="font-semibold text-lg text-onSurface m-auto">Your cart is empty</h5>
            )
          }
        </div>
    </div>
  );
};

export default Cart;
