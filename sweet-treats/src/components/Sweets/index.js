import React, { useState } from "react";

const Sweets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [desserts] = useState([
    {
      name: "Cookies",
    },
    {
      name: " Pastries",
    },
    {
      name: "Cakes",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {desserts.map((name, i) => (
          <>
            <div className="projects">
              <h1 className="img-thumbnail p-2">{name.name}</h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Sweets;
