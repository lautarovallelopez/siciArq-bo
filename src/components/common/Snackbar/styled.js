import styled from '@emotion/styled';
import {Alert} from 'reactstrap';

const StyledAlert = styled(Alert)(() => ({
    height: '50px',
    width: '50%',
    transform: 'translateX(50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    position: 'absolute'
}));

// eslint-disable-next-line
export {StyledAlert};
