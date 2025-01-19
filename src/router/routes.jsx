/**
 * Node modules
 */
import { createBrowserRouter } from "react-router-dom";
/**
 * Components
 */
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Prodcuts from "../pages/Prodcuts";
import ProductDetails from "../pages/ProductDetails";

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
        element: <Prodcuts />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      }
    ]
  },
])



export default router;