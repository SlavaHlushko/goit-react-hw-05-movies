import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from './FilmItem.styled';

export const FilmItem = ({ filmId, name }) => {
  const location = useLocation();
  return (
    <Link
      to={`/movies/${filmId}`}
      state={{
        from: location,
      }}
    >
      {name}
    </Link>
  );
};

FilmItem.propTypes = {
  filmId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
