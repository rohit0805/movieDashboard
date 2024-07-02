import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Genres from "./components/genres/Genres";
import { Suspense, useEffect, useState } from "react";
import { getResponse } from "./services";
import {
  genreURL,
  movieURL,
  transformGenresReponse,
  transformMoviesResponse,
} from "./util";
import MovieDisplay from "./components/movies/MovieDisplay";
import { useOnScreen } from "./hooks/useOnScreen";

function App() {
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { measureRef, isIntersecting, observer } = useOnScreen();
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setLoading(true);
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };
  useEffect(() => {
    if (isIntersecting) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting]);

  const fetchGenres = async () => {
    const newGenres = await getResponse(genreURL, transformGenresReponse);
    setGenres(newGenres);
  };

  const fetchMovies = async () => {
    const newMovies = await getResponse(movieURL, transformMoviesResponse, {
      primary_release_year: 2023,
      page: page,
      with_genres: genreSelected,
    });
    setFilteredMovies([...filteredMovies, ...newMovies]);
    setLoading(false);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [genreSelected, page]);

  const onGenreHandler = (e) => {
    setFilteredMovies([]);
    setLoading(true);
    setGenreSelected(Number(e.target.value));
  };

  return (
    <Fragment>
      <header className="headingContainer">MovieFlex</header>
      <Genres
        genres={genres}
        onGenreHandler={onGenreHandler}
        genreSelected={genreSelected}
      />
      <MovieDisplay filteredMovies={filteredMovies} measureRef={measureRef} />
      <div className="loadingContainer">{loading && "Loading..."}</div>
    </Fragment>
  );
}

export default App;
