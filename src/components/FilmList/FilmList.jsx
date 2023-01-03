import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './FilmList.styled';
import PropTypes from 'prop-types';

export const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

FilmList.propTypes = {
  movies: PropTypes.array.isRequired,
};
