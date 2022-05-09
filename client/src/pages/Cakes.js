import React, { useState } from "react";
// import Modal from "../components/Modal";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
// import ViewCart from "./ViewCart";

const Cakes = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  console.log(products);

  const [cakeList, setCakeList] = useState([
    {
      name: "Chocolate Cake",
      category: "cake",
      Price: "$" + 2.0,
      Stock: 150,
      imgid: 0,
    },
    {
      name: "Red Velvet",
      category: "cake",
      Price: "$" + 2.0,
      Stock: 110,
      imgid: 1,
    },
    {
      name: "Yellow Cake",
      category: "cake",
      Price: "$" + 2.0,
      Stock: 24,
      imgid: 2,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [cart, setCart] = useState([{}]);
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
  const addItems = (item) => {
    setCart([...cart, item]);
    console.log(cart);
    let cakeListUpdate = cakeList.map((e) => {
      if (e.name == item.name) {
        e.Stock--;
      }
      return e;
    });
    setCakeList(cakeListUpdate);
    console.log(cakeListUpdate);
  };
  return (
    <div>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )} */}
      <div className="container d-flex justify-content-evenly">
        <h1 className="product-title"> Cakes</h1>
        {cart.length > 0 ? (
          <>
            <Link
              to={{
                pathname: "/viewCart",
                state: {
                  cart: cart,
                },
              }}
            >
              <h3>View Cart</h3>
            </Link>
          </>
        ) : (
          <h3>Cart is empty</h3>
        )}
      </div>
      <div className="flex-row">
        {cakeList.map((image, i) => (
          <Cart
            i={i}
            name={image.name}
            category={image.category}
            price={image.Price}
            stock={image.Stock}
            imgid={image.id}
            addItems={addItems}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
