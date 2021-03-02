import styled from 'styled-components';

export const CustomButton = styled.button.attrs({ type: 'button' })`
  max-width: 200px;
  border: none;
  background: #212529;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: background 200ms linear;
  &:hover {
    background: #219c97;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
