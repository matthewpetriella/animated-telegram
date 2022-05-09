import React, { useState } from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, price, stock, imgid, category } = currentPhoto;
  const [addCart, setAddItem] = useState(false);

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={`../assets/${category}/${imgid}.jpg`}
          alt="current category"
          className="img-thumbnail"
        />
        <p className="modal-description">{stock}</p>
        <p> {price}</p>
        <button type="button" onClick="addItem()">
          {" "}
          Add to Cart{" "}
        </button>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
