import { getByQuery } from '../../services/movieAPI';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmList } from '../../components/FilmList/FilmList';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const queryInput = searchParams.get('query');

  useEffect(() => {
    if (queryInput) {
      setQuery(queryInput);
      return;
    }
    setQuery('');
  }, [queryInput]);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    getByQuery(query)
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
    setQuery(searchQuery);
  };

  return (
    <main>
      <h2>Movies search page</h2>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length === 0 && queryInput ? (
        <p>Sorry, there is no any movie</p>
      ) : (
        <FilmList movies={movies} />
      )}
    </main>
  );
};

export default Movies;
