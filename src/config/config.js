export const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "de087c1ac41855cc9ba52d6c878ac34b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};
export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};
