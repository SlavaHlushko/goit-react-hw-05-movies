import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movieAPI';
import { ReviewsList } from './Review.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data);
    });
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>We don't have any reviews for yhis movie</p>;
  }
  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>
              <b>Author:</b>
              <b>{author}</b>
            </p>
            <p>{content}</p>
          </li>
        );
      })}
    </ReviewsList>
  );
};
