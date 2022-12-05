import { getTrendingMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      // console.log(res.results);
      setMovies(res.results);
    });
  }, []);
  return (
    <>
      <h2 className={css.title}>Trending movies</h2>
      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
};
