import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiews } from 'services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    getRewiews(params.movieId).then(res => setReviews(res));
  }, [params.movieId]);

  return (
    <div>
      {
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              {review.content}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
