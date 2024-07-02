import React from "react";
import "./movieDisplay.css";
import { imageURL } from "../../util";

const MovieCard = ({ imagePath, title, rating, measureRef = null }) => {
  return (
    <div className="movieCardContainer" ref={measureRef}>
      <img src={`${imageURL}${imagePath}`} />
      <div className="movieCardInfo">
        <p>{title}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
