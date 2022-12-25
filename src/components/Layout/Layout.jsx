import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Box } from '../Box.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box pl="20px" pr="20px">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
