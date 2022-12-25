import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '68b942bb9ae0cb3e532a5c540add82e6';
const lang = 'en-US';

export const IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export function getTrending() {
  return axios.get(`trending/movie/day`).then(r => r.data.results);
}

export function getByQuery(query) {
  return axios.get(`search/movie?query=${query}`).then(r => r.data.results);
}

export function getMovieDetails(movieId) {
  return axios.get(`movie/${movieId}/reviews`).then(r => r.data);
}

export function getMovieCredits(movieId) {
  return axios.get(`movie/${movieId}/credits/reviews`).then(r => r.data);
}

export function getMovieReviews(movieId) {
  return axios.get(`movie/${movieId}/reviews`).then(r => r.data.results);
}
