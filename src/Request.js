export const API_KEY = "f96bf82f9e551e58d77db20452a6bcfa";
const requests = [
  {
    title: "Popular in Netflix",
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  },
  {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`,
  },
  {
    title: "Science Fiction",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
  },
  {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`,
  },
  {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  },
  {
    title: "Tv Popular",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Movie Popular",
    url: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=2`,
  },
];
export default requests;
