import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  overflow: hidden;
  background: #252932;
  height: 55px;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  overflow: hidden;
  height: 100%;
`;

export const Logo = styled.div.attrs({ role: 'button' })`
  color: #f2f2f2;
  font-size: 40px;
  float: left;
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #219c97;
  }
`;
