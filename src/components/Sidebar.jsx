/**
 * Node modules
 */
import { NavLink } from "react-router-dom";
/**
 * Assets
 */
import { closeIcon, logo } from "../assets";
import { IconButton } from "./Button";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
    {
      showSidebar && (<div onClick={setShowSidebar} className="fixed inset-0 bg-black/70 z-40"></div>)
    }
      <div
        className={`sidebar ${
          showSidebar ? "active" : ""
        } md:hidden w-[320px] p-5 max-w-full fixed top-0 left-0 bottom-0 z-50 bg-surface shadow-md`}
      >
        <div className="flex items-center justify-between gap-4 h-14 mb-5">
          <NavLink to="/" onClick={setShowSidebar}>
            <img src={logo} alt="logo" />
          </NavLink>
          <IconButton
            onClick={setShowSidebar}
          >
            <img src={closeIcon} alt="close" />
          </IconButton>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink onClick={setShowSidebar}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={setShowSidebar}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={setShowSidebar}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={setShowSidebar}
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
      </div>
    </>
  );
};

export default Sidebar;
