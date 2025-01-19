/**
 * Node modules
 */
import { Link } from "react-router-dom";
/**
 * Utils
 */
import products from "../utils/products";
/**
 * Components
 */
import Product from "../components/Product";

const Products = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        <div>
          <h3 className="text-3xl text-center font-medium">
            Special Shoes With Offers
          </h3>
          <p className="my-7 text-onSurface mx-auto text-center w-full max-w-[700px]">
            Shop our premium collection of stylish and comfortable shoes, from
            classic designs to modern styles, all at great prices. Don&apos;t
            miss out—grab yours today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => {
              return (
                // <Link to={`/products/${product.id}`} key={index}>
                  <Product
                  key={index}
                    product={product}
                    text="Add to cart"
                    buy={true}
                  />
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
