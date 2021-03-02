import React from 'react';

import { Container, Wrapper, Items, Item, Logo, WrapperImage } from './styled';

const Footer = () => (
  <Container>
    <Wrapper>
      <Items noSmall>
        <Item align="left" bold>
          {`v${process.env.REACT_APP_VERSION}`}
        </Item>
        <Item align="left">SiCI</Item>
      </Items>
      <Items>
        <Item bold>Mesa de Servicios</Item>
        <Item>De Lunes a Viernes Hábiles (011) 5031 4630</Item>
      </Items>
      <Items noSmall>
        <WrapperImage>
          <Logo />
        </WrapperImage>
      </Items>
    </Wrapper>
  </Container>
);

export default Footer;
