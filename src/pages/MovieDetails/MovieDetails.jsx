import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/api';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
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
      <button className={css.btn_back} type="button" onClick={handleGoBack}>
        ← Go back
      </button>
      <div className={css.movieDetails_wrapper}>
        <img
          src={`${IMAGE_URL + movie.poster_path}`}
          width="250px"
          alt={`${movie.title}`}
        />
        <div className={css.movieDetails_descroption}>
          <h2 className={css.movie_title}>{movie.title}</h2>
          <h3>User score:</h3>
          <p>{Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <p>
            {movie.genres.map(ganre => (
              <span key={ganre.id}>{ganre.name + ' '}</span>
            ))}
          </p>
        </div>
      </div>
      <h3>Additional information</h3>
      <Link to="cast" state={location.state} className={css.cast}>
        Cast
      </Link>
      <Link to="reviews" state={location.state} className={css.reviews}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
