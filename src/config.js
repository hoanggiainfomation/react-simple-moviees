export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "ba8fbacddc7266dc1817cb8eb60c560a";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdEmdpointSearch = "https://api.themoviedb.org/3/search";
export const tmdAPI = {
  // https://api.themoviedb.org/3/movie/550?api_key=ba8fbacddc7266dc1817cb8eb60c560a
  getMoviList: (type, page = 1) => `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMoviDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=
  getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) => ` ${tmdEmdpointSearch}?api_key=${apiKey}=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
