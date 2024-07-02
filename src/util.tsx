export const genreURL = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=2dca580c2a14b55200e784d157207b4d`;
export const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&vote_count.gte=100`;

export const imageURL = `https://image.tmdb.org/t/p/w500`;

export const transformGenresReponse = (response) => {
  return response?.data?.genres;
};

export const transformMoviesResponse = (response) => {
  return response?.data?.results;
};
