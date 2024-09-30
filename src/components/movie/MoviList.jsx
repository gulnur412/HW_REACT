import React from "react";
import "./MoviList.css"
import { MoviItem } from "./MoviItem";

export const MoviList = ({ movies,onhandlerRemoveItem,id,   }) => {

  return (
    <ul>
      {movies.map((item) => (
        
        <MoviItem key={item.id} {...item}onhandlerRemoveItem={onhandlerRemoveItem} movieId={id}    />
      ))}
    </ul>
  );
};


