import styled from 'styled-components';

export const Items = styled.nav`
  top: 0;
  position: fixed;
  right: 0;
  height: 55px;
  @media screen and (max-width: 408px) {
    display: none;
  }
`;

export const Item = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  color: ${({ active }) => (active ? '#219c97' : '#fff')};
  text-decoration: none;
  padding: 10px 20px;
  line-height: normal;
  font-size: 20px;
  font-weight: bold;
  -webkit-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  height: 100%;
  align-items: center;
  &:hover {
    color: #fff;
    background: #219c97;
    border-radius: 20px;
    padding: 10px 23px;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const SidebarItem = styled.button.attrs({ type: 'button' })`
  border: none;
  width: 100%;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: ${({ active }) => (active ? '#219c97' : '#fff')};
  padding: 25px;
  margin-left: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  &:disabled {
    color: #808080;
    cursor: not-allowed;
  }

  &:last-of-type {
    border: none;
    margin-bottom: 0;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
