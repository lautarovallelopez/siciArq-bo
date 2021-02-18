import styled from '@emotion/styled';
import {Button} from 'reactstrap';

const BackButtonContainer = styled.div(() => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

const StyledButton = styled(Button)(() => ({
    height: '33px'
}));

export {BackButtonContainer, StyledButton};
