export const baseURL = "https://api.themoviedb.org";
export const posterBaseURL = "https://image.tmdb.org/t/p/w342";
export const backdropBaseURL = "https://image.tmdb.org/t/p/original";
export const findById = "https://api.themoviedb.org/3/find";
export const getMovieDetails = "https://api.themoviedb.org/3/movie/{movie_id}";

export const tmdb = {
  // Discover
  discover_movies: "https://api.themoviedb.org/3/discover/movie",
  discover_tv: "https://api.themoviedb.org/3/discover/tv",

  // Trending
  trending_all: "https://api.themoviedb.org/3/trending/all/{time_window}",
  trending_movie: "https://api.themoviedb.org/3/trending/movie/{time_window}",
  trending_tv: "https://api.themoviedb.org/3/trending/tv/{time_window}",
  trending_people: "https://api.themoviedb.org/3/trending/person/{time_window}",

  // Movie lists

  movie_airing_today: "https://api.themoviedb.org/3/movie/now_playing",
  movie_popular: "https://api.themoviedb.org/3/movie/popular",
  movie_top_rated: "https://api.themoviedb.org/3/movie/top_rated",
  movie_upcoming: "https://api.themoviedb.org/3/movie/upcoming",

  // TV Series lists
  tv_airing_today: "https://api.themoviedb.org/3/tv/airing_today",
  tv_on_the_air: "https://api.themoviedb.org/3/tv/on_the_air",
  tv_popular: "https://api.themoviedb.org/3/tv/popular",
  tv_top_rated: "https://api.themoviedb.org/3/tv/top_rated",

  // People lists
  people_popular: "https://api.themoviedb.org/3/person/popular",

  // Genre
  genre_movie: "https://api.themoviedb.org/3/genre/movie/list",
  genre_tv: "https://api.themoviedb.org/3/genre/tv/list",
};

export const api = {
  moviesNowPlaying: `${baseURL}/3/movie/now_playing`,
  moviesPopular: `${baseURL}/3/movie/popular`,
  moviesTopRated: `${baseURL}/3/movie/top_rated`,
  moviesUpcoming: `${baseURL}/3/movie/upcoming`,
};
