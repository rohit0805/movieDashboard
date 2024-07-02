import React from "react";
import "./movieDisplay.css";
import MovieCard from "./MovieCard.tsx";

const MovieDisplay = ({filteredMovies,measureRef}) => {
  return (
    <div className="movieContainer">
      {filteredMovies.map((movie,index)=>{
        if(index === filteredMovies.length - 1){
          return <MovieCard key={movie.id} imagePath={movie.poster_path} title={movie.title} rating={movie.vote_average} measureRef={measureRef}/>
        }
        return <MovieCard key={movie.id} imagePath={movie.poster_path} title={movie.title} rating={movie.vote_average}/>
      })}
    </div>
  );
};

export default MovieDisplay;
