import React from 'react';
import { routes } from 'constant';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Menu from 'components/menu';
import { clearToken } from 'services/storage';

import { Container, Wrapper, Logo } from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const handleRedirect = ({ target: { id } }) => dispatch(push(id));

  const handleLogout = () => {
    clearToken();
    window.location.href = routes.ROOT;
  };

  return (
    <Container>
      <Wrapper>
        <Logo id={routes.ROOT} onClick={handleRedirect}>
          SiCI
        </Logo>
      </Wrapper>
      <Menu onRedirect={handleRedirect} onLogout={handleLogout} />
    </Container>
  );
};

export default Header;
