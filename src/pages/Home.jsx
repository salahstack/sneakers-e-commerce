/**
 * Node modules
 */
import { Link } from "react-router-dom";
/**
 * Assets
 */
import { brand } from "../assets";
/**
 * Components
 */
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <article>
      <section className="mb-14 pt-[124px] md:pt-32">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between md:justify-center gap-10 flex-col md:flex-row">
          <div>
            <h1 className="text-5xl font-medium">DISCOVER</h1>
            <h3 className="text-2xl my-2">Exclusive Sneakers</h3>
            <p className=" w-full max-w-[420px]">
              Exclusive Sneakers is a premium footwear brand that combines
              cutting-edge design with high-performance materials. With a focus
              on style, comfort, and innovation, the brand delivers a unique
              experience for sneaker enthusiasts. Each pair is crafted with
              attention to detail, featuring breathable fabrics, durable soles,
              and striking color combinations that make a bold fashion
              statement.
            </p>
            <Link to='/products' className="btn filled primary w-fit mt-4">
              SHOP NOW
            </Link>
          </div>
          <div className="h-96 overflow-hidden rounded-3xl">
            <img
              src={brand}
              alt="brand"
              className="w-full h-full object-cover ml-auto"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-3xl mb-8">Products</h3>
          <ProductList />
        </div>
      </section>
    </article>
  );
};

export default Home;
