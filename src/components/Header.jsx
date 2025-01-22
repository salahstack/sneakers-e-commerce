/**
 * Node modules
 */
import { Link, NavLink } from "react-router-dom";

/**
 * Assets
 */
import { logo, cartIcon, menuIcon } from "../assets";
/**
 * Components
 */
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import { Button, IconButton } from "./Button";
/**
 * hooks
 */
import useCart from "../hooks/useCart";
import useToggle from "../hooks/useToggle";

const Header = () => {
  const [showCart, setShowCart] = useToggle();
  const [showSidebar, setShowSidebar] = useToggle();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (current, accumulator) => current + accumulator.quantity,
    0
  );
  const totalItemsPrice = cartItems.reduce((current, accumulator) => {
    return current + accumulator.price * accumulator.quantity;
  }, 0);
  return (
    <>
      <header className="h-20 border-b border-b-outline/30 fixed top-0 left-0 w-full bg-surface shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-5 h-full">
          <IconButton onClick={setShowSidebar} classes="lg:hidden">
            <img src={menuIcon} alt="menu" />
          </IconButton>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <nav className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-2">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Link to='/login' className="btn px-5 whitespace-nowrap">Sign in</Link>
              <Link to='/register' className="btn filled primary px-5 whitespace-nowrap">Sign up</Link>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <IconButton onClick={setShowCart} classes="relative">
              <img src={cartIcon} alt="cart icon" />
              {totalItems > 0 && (
                <span className="absolute -top-2 right-0 w-6 h-6 bg-red-500 rounded-full grid place-content-center text-onPrimary text-xs">
                  {totalItems}
                </span>
              )}
            </IconButton>
            <span className="font-medium">${totalItemsPrice.toFixed(2)}</span>
          </div>
        </div>
        <Cart showCart={showCart} />
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
