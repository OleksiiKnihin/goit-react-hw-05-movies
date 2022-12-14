import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
