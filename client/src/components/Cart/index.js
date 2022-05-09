import react from "react";

const Cart = ({ name, category, price, stock, addItems, i }) => {
  return (
    <div className="projects">
      <h1 className="img-thumbnail m-1 p-2 ">{name}</h1>
      <img
        src={`../assets/cake/$imgid}.jpg`}
        alt={name}
        className="img-thumbnail mx-2 p-2 "
      />
      <p> {"$" + price}</p>
      <p> {stock}</p>
      {stock > 0 ? (
        <button
          type="button"
          onClick={() => addItems({ name: name, qty: 1, price: price })}
          className="button-${i}"
        >
          Add to cart
        </button>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};

export default Cart;
