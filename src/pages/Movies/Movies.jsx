import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input_search}
          type="text"
          name="movie"
          onChange={handleChange}
          value={query}
        />
        <button className={css.btn_search} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
