import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from 'constant';
import { CustomButton } from 'ui-kit/buttons';

import { Container, Title } from './styled';

const Home = () => {
  const dispatch = useDispatch();
  const goToAnotherPage = () => dispatch(push(routes.ANOTHER_PAGE));

  return (
    <Container>
      <Title>Bienvenido al Sistema de Codificación Informatizada</Title>
      <CustomButton onClick={goToAnotherPage}>Go to another page</CustomButton>
    </Container>
  );
};

export default Home;
