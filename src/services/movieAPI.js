import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '68b942bb9ae0cb3e532a5c540add82e6';
const lang = 'en-US';

export const IMG_URL = 'https://image.tmdb.org/t/p/w200';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export async function getTrending(period) {
  const r = await axios.get(`trending/movie/${period}`);
  return r.data.results;
}

export async function getByQuery(query) {
  const r = await axios.get(`search/movie?query=${query}`);
  return r.data.results;
}

export async function getMovieDetails(movieId) {
  try {
    const resMovieDetails = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return await resMovieDetails.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCredits(movieId) {
  const r = await axios.get(`movie/${movieId}/credits?p=1`);
  return r.data;
}

export async function getMovieReviews(movieId) {
  const r = await axios.get(`movie/${movieId}/reviews`);
  return r.data.results;
}
