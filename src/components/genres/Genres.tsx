import React from "react";
import "./genre.css";

const Genres = ({ genres, onGenreHandler, genreSelected }) => {
  return (
    <div className="genresContainer">
      {genres.map((genre) => {
        return (
          <button
            value={genre.id}
            key={genre.id}
            className={`genreButton ${
              genreSelected === genre.id ? "genreSelected" : ""
            }`}
            onClick={onGenreHandler}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

export default Genres;
