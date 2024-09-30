import { useState } from "react";
import "./Modalka.css";
import { UrlInput } from "./UrlInput";

export const Modalka = ({
  isModalOpen,

  closeModal,
  onAddMovies,
  toggleModalHandler,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputUrl, setUrlInput] = useState("");
  const [inputReting, setRetingInpput] = useState("");
  // console.log(inputReting);

  const handleChange = (e) => {
    setInputName(e.target.value);
  };
  const handleUrlinput = (e) => {
    setUrlInput(e.target.value);
  };
  const handleReting = (e) => {
    setRetingInpput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovies = {
      id: Date.now().toString(),
      title: title,

      imageUrl: setUrlInput,
      rating: setRetingInpput,
    };
    onAddMovies(newMovies);
    toggleModalHandler();
  };

  return (
    <div className="modal">
      {isModalOpen && (
        <form className=" overlay" onSubmit={handleSubmit}>
          <div className=" modal">
            <h2 className="modal-h2">Модалка</h2>{" "}
            <input
              type="text"
              placeholder="Enter"
              className="input"
              value={inputName}
              onChange={handleChange}
            />
            <UrlInput
              type="url"
              placeholder="Input 2"
              className="input"
              value={inputUrl}
              onChange={handleUrlinput}
            />
            <input
              type="text"
              placeholder="Input 3"
              className="input"
              value={inputReting}
              onChange={handleReting}
            />
            <button type="submit" onClick={closeModal} className="button-title">
              войти
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
