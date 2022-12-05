import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '373e832b48f62bfeb70ce2c9599b5505';

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
  return res.data;
};

export const getMovieById = async movieId => {
  const res = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  console.log(res.data);
  return res.data;
};

export const getMoviesByQuery = async query => {
  const res = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return res.data.results;
};

export const getActors = async movieId => {
  const res = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  console.log(res.data.cast);
  return res.data.cast;
};

export const getRewiews = async movieId => {
  const res = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return res.data.results;
};
