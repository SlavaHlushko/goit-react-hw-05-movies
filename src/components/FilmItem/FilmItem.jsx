import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
