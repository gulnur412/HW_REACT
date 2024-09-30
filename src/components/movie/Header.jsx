import React from "react";
import "./Header.css";
import { Button } from "./UI/Button";

export const Header = ({}) => {
  return (
    <header className="movie_header">
      <div className="header-button">
        <h1>Favorite Movies</h1>
        <Button type="submit">ADD MOVIE</Button>
      </div>
    </header>
  );
};

export default Header;
