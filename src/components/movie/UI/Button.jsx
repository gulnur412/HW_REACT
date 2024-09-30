import React from "react";
import "./Button.css";


export const Button = ({ children, type, onClick, value, ...props }) => {
  return (
    <button
      className="movie_button"
      onClick={onClick}
      type={type}
      value={value}
      {...props}
    >
      {children}
    </button>
  );
};
