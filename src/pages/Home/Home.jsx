import { useState, useEffect } from 'react';
import { getTrending } from '../../services/movieAPI';
import { Box } from '../../components/Box.styled';
import { FilmList } from '../../components/FilmList/FilmList';
import { Title } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending('day').then(data => {
      setTrending(data);
    });
  }, []);

  return (
    <Box pl="20px">
      <Title>Trending today</Title>
      <FilmList movies={trending} />
    </Box>
  );
};

export default Home;
