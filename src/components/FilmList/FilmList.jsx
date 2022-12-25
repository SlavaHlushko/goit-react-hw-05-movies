import { FilmItem } from '../FilmItem/FilmItem';
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

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};