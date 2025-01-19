/**
 * Components
 */
import Product from "./Product";

/**
 * Utils
 */
import products from "../utils/products";



const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        products.map((product, index) => {
          return <Product key={index} product={product}/>
        })
      }
    </div>
  )
}

export default ProductList