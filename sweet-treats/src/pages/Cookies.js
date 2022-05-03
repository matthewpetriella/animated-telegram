import React, { useState } from "react";
import Modal from "../components/Modal";

const Cookies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [cookieList] = useState([
    {
      name: "Chocolate Chip",
      Price: "$" + 2.0,
      Stock: 150,
      imgid: 0,
    },
    {
      name: "Oatmeal Raisin",
      Price: "$" + 2.0,
      Stock: 110,
      imgid: 1,
    },
    {
      name: "Peanut Butter",
      Price: "$" + 2.0,
      Stock: 24,
      imgid: 3,
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
      <div className="flex-row">
        {cookieList.map((image, i) => (
          <>
            <div className="projects">
              <h1 className="img-thumbnail p-2 ">{image.name}</h1>
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
