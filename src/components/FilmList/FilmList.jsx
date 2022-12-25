import { FilmItem } from 'components/FilmItem/FilmItem';
import PropTypes from 'prop-types';
import { List, Item } from './FilmList.styled';

export const FilmList = ({ films }) => {
  <List>
    {films.map(({ id, original_title }) => {
      return (
        <Item key={id}>
          <FilmItem filmId={id} name={original_title} />
        </Item>
      );
    })}
  </List>;
};

FilmList.PropTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
