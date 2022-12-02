import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/api';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(params.movieId).then(res => {
      setMovie(res);
    });
  }, [params.movieId]);

  if (!movie) return;
  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div>
        <h2>{movie.title}</h2>
        <img src={`${IMAGE_URL + movie.poster_path}`} alt={`${movie.title}`} />
        <p>User score: {movie.vote_average * 10}%</p>
        <p>Overview: {movie.overview}</p>
        <p>
          Genres:{' '}
          {movie.genres.map(ganre => (
            <span key={ganre.id}>{ganre.name}, </span>
          ))}
        </p>
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviws
      </Link>
      <Outlet />
    </>
  );
};
