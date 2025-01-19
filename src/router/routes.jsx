/**
 * Node modules
 */
import { createBrowserRouter } from "react-router-dom";
/**
 * Components
 */
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

/**
 * Router
 */
const router = createBrowserRouter([
  {

    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
])



export default router;