import styled from 'styled-components';
import logoIndec from 'assets/png/logo-footer-new.png';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #252932;
  display: flex;
  max-height: 50px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  overflow: hidden;
  height: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100%;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 678px) {
    ${({ noSmall }) => (noSmall ? 'display: none;' : '')}
  }
`;

export const Item = styled.p`
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => align || 'center'};
`;

export const Logo = styled.img.attrs({
  src: logoIndec,
  alt: 'indec',
  width: '200px',
  height: '40px',
})`
  align-self: flex-end;
`;

export const WrapperImage = styled.div`
  align-self: flex-end;
`;
