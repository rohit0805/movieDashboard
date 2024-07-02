import React from "react";
import "./movieDisplay.css";
import { imageURL } from "../../util";
import {LazyLoadImage} from 'react-lazy-load-image-component';

const MovieCard = ({ imagePath, title, rating, measureRef = null }) => {
  return (
    <div className="movieCardContainer" ref={measureRef}>
      <LazyLoadImage src={`${imageURL}${imagePath}`} width={200} height={300}/>
      <div className="movieCardInfo">
        <p>{title}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
