import React, { useState } from "react";
import Modal from "../components/Modal";

const Donut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [donutList] = useState([
    {
      name: "Blue Donut",
      category: "donuts",
      Price: "$" + 2.0,
      Stock: 150,
      imgid: 0,
    },
    {
      name: "Chocolate Donut",
      category: "donuts",
      Price: "$" + 2.0,
      Stock: 110,
      imgid: 1,
    },
    {
      name: "Pink Donut",
      category: "donuts",
      Price: "$" + 2.0,
      Stock: 24,
      imgid: 2,
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <h1 className="product-title"> Donuts</h1>
      <div>
        {donutList.map((image, i) => (
          <div className="products">
            <h3 className="img-thumbnail">{image.name}</h3>
            <img
              src={`../assets/donuts/${image.imgid}.jpg`}
              alt={image.name}
              className="img-thumbnail"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
            <p> {image.Price}</p>
            <p> {image.Stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donut;
