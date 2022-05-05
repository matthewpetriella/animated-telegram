import React, { useState } from "react";
import Modal from "../components/Modal";

const Cookies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [cookieList] = useState([
    {
      name: "Chocolate Chip",
      category: "cookies",
      Price: "$" + 2.0,
      Stock: 150,
      imgid: 0,
    },
    {
      name: "Sugar Cookie",
      category: "cookies",
      Price: "$" + 2.0,
      Stock: 110,
      imgid: 1,
    },
    {
      name: "Vanilla Cookie",
      category: "cookies",
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
      <h1 className="align-item-center"> Cookies</h1>
      <div className="flex-row">
        {cookieList.map((image, i) => (
          <>
            <div className="product-title">
              <h3 className="img-thumbnail p-2 ">{image.name}</h3>
              <img
                src={`../assets/cookies/${image.imgid}.jpg`}
                alt={image.name}
                className="img-thumbnail mx-2 p-2 "
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />
              <p> {image.Price}</p>
              <p> {image.Stock}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cookies;
