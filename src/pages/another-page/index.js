import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from 'constant';
import { CustomButton } from 'ui-kit/buttons';

import { Container, Title } from './styled';

const AnotherPage = () => {
  const dispatch = useDispatch();
  const goToHome = () => dispatch(push(routes.ROOT));

  return (
    <Container>
      <Title>Another page</Title>
      <CustomButton onClick={goToHome}>Back to home</CustomButton>
    </Container>
  );
};

export default AnotherPage;
