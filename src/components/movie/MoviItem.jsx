import { useState } from "react";
import "./MoviItem.css";
import { Modalka } from "./UI/Modalka";

export const MoviItem = ({
  title,
  img,
  rating,
  id,
  onhandlerRemoveItem,
  
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className="li-movie">
      <img src={img} alt="" />
      <div className="avatar">
        <h3>{title}</h3>

        <div className="edit">
          <b className="b">{rating}/5</b>
          <button onClick={() => onhandlerRemoveItem(id)} className="delete">
            Delete
          </button>
          <button onClick={openModal} className="btn">
            Edit
          </button>

          <Modalka
            className="Modal-button"
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
          {/* <button onClick={onClick}className="btn">Edit</button> */}
        </div>
      </div>
    </li>
  );
};
