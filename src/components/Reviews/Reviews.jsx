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
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for that movie</p>
      )}
    </div>
  );
};
