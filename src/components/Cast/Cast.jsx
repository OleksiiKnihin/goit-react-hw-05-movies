import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';
import css from './Cast.module.css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    getActors(params.movieId).then(res => setCast(res));
  }, [params.movieId]);

  return (
    <div>
      {
        <ul className={css.actor_list}>
          {cast.map(actor => (
            <li key={actor.id} className={css.actor_item}>
              <img
                src={`${
                  actor.profile_path
                    ? IMAGE_URL + actor.profile_path
                    : actor.gender === 1
                    ? require('../../Images/person_wom.jpg')
                    : require('../../Images/person_men.jpg')
                }`}
                width="80px"
                alt={`${actor.name}`}
              />
              <div className={css.description_wraper}>
                <h3>{actor.name}</h3>
                {actor.character.length > 0 && (
                  <p>Character: {actor.character}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Cast;
