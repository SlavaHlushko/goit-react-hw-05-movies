import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '68b942bb9ae0cb3e532a5c540add82e6';
const lang = 'en-US';

export const IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  language: lang,
};

export function getTrending() {
  return axios.get(`trending/movie/day`).then(r => r.data.results);
}
