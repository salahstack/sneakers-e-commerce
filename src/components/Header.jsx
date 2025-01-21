/**
 * Node modules
 */
import { NavLink } from "react-router-dom";

/**
 * Assets
 */
import { logo, cartIcon, menuIcon } from "../assets";
/**
 * Components
 */
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import { IconButton } from "./Button";
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

  return (
    <>
      <header className="h-20 border-b border-b-outline/30 mb-6 md:mb-14 relative">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-5 h-full">
          <IconButton
            onClick={setShowSidebar}
            classes="md:hidden"
          >
            <img src={menuIcon} alt="menu" />
          </IconButton>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3">
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
          </nav>
          <div>
            <IconButton
              onClick={setShowCart}
              classes="relative"
            >
              <img src={cartIcon} alt="cart icon" />
              {totalItems > 0 && (
                <span className="absolute -top-2 right-0 w-6 h-6 bg-red-500 rounded-full grid place-content-center text-onPrimary text-xs">
                  {totalItems}
                </span>
              )}
            </IconButton>
          </div>
        </div>
        <Cart showCart={showCart} />
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
