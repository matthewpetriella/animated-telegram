import React, { useState } from "react";
import Modal from "../components/Modal";

const Cakes = () => {
  const [cakeList] = useState([
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

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <h1 className="product-title"> Cakes</h1>
      <div className="flex-row">
        {cakeList.map((image, i) => (
          <div className="projects">
            <h1 className="img-thumbnail m-1 p-2 ">{image.name}</h1>
            <img
              src={`../assets/cake/${image.imgid}.jpg`}
              alt={image.name}
              className="img-thumbnail mx-2 p-2 "
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

export default Cakes;
