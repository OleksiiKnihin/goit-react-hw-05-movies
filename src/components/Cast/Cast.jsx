import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    getActors(params.movieId).then(res => setCast(res));
  }, [params.movieId]);

  return (
    <div>
      {
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`${IMAGE_URL + actor.profile_path}`}
                width="50px"
                alt={`${actor.name}`}
              />
              {actor.name}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
