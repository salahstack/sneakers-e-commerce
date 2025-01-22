/**
 * Node modules
 */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/**
 * Utils
 */
import products from "../utils/products";
/**
 * Assets
 */
import { addIcon, minusIcon, CartWhiteIcon } from "../assets";
import useCart from "../hooks/useCart";
/**
 * Components
 */
import { Button } from "../components/Button";

const ProductDetails = () => {
  const { addItem, cartItems } = useCart();
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    !isProductInCart && setQuantity(0);
  }, [cartItems, product.id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => setQuantity((prev) => (prev === 0 ? prev : prev - 1));

  const resetQuantity = () => setQuantity(0);

  const [productImage, setProductImage] = useState(product.image);
  const handleImageChange = (image) => setProductImage(image);

  return (
    <section className="pt-[124px] md:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <Link to='/products' className="btn text-onBackground w-10 h-10 flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
        <span>back</span>
        </Link>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-9 mt-4 md:mt-9">
          <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-[480px]">
            <figure className="overflow-hidden rounded-md h-[20rem] md:h-[23rem] w-[inherit]">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex items-center gap-4 flex-wrap">
              {product.images.map((image, index) => {
                return (
                  <button
                    className={`active:scale-95 duration-150 ${
                      image === productImage ? "ring-2 ring-primary" : ""
                    } w-16 h-16 rounded-md overflow-hidden`}
                    key={index}
                    onClick={() => handleImageChange(image)}
                  >
                    <figure className="overflow-hidden">
                      <img
                        src={image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <h2 className="text-4xl font-medium">{product.name}</h2>
            <p className="text-lg text-onSurface">{product.description}</p>
            <span className="text-4xl font-semibold">
              ${product.price.toFixed(2)}
            </span>
            <div className="bg-outline/35 flex items-center justify-between px-3 h-12 rounded-lg">
              <button
                onClick={incrementQuantity}
                className="btn w-8 h-8 grid place-content-center"
              >
                <img src={addIcon} alt="plus" />
              </button>
              <span>{quantity}</span>
              <button
                onClick={decrementQuantity}
                className="btn w-8 h-8 grid place-content-center"
              >
                <img src={minusIcon} alt="minus" />
              </button>
            </div>
            <Button
              onClick={() => {addItem({ ...product, quantity }); resetQuantity()}}
            >
              <img src={CartWhiteIcon} alt="cart" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
