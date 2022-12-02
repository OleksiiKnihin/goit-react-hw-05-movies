import { getTrendingMovies } from 'services/api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      // console.log(res.results);
      setMovies(res.results);
    });
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
