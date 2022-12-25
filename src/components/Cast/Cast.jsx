import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits, IMG_URL } from '../../services/movieAPI';
import { CastList, CastItem, CastImage, CharacterSpan } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(movie => {
      setCast(movie.cast);
    });
  }, [movieId]);
  return (
    <CastList>
      {cast.map(({ profile_path, name, original_name, character, cast_id }) => {
        return (
          <CastItem key={cast_id}>
            {profile_path ? (
              <CastImage src={IMG_URL + profile_path} alt={name} width="150" />
            ) : (
              <CastImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt={name}
                width="200"
              />
            )}

            <p>{original_name}</p>
            <p>
              <CharacterSpan>Character: </CharacterSpan>
              <span>{character}</span>
            </p>
          </CastItem>
        );
      })}
    </CastList>
  );
};
