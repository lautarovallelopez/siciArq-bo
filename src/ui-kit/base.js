import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({ center, right }) => {
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'initial';
  }};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? 1 : 'initial')};
  align-items: ${({ left, center, right }) => {
    if (!left && !center && !right) {
      return 'initial';
    }
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'flex-start';
  }};
  justify-content: ${({ centered }) => (centered ? 'center' : 'initial')};
  padding-right: ${({ right }) => (right ? '20px' : 0)};
  ${({ $bsStyle }) => $bsStyle || ''}
`;
