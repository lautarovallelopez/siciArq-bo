import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Title = styled.h1`
  color: #212529;
  margin: 50px 0;
  text-align: center;
`;

export const Description = styled.p`
  color: #212529;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin: 20px 10px;
`;

export const WrapperDescription = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  min-width: 250px;
`;
