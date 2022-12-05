import { Navigation } from 'components/Navigation/Navigation';
import { Container, Header } from 'components/App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
