import styled from '@emotion/styled';
import {Button, Card} from 'reactstrap';

const AssignmentPreviewContainer = styled.div(() => ({
    marginTop: '10px'
}));

const StyledButton = styled(Button)(() => ({
    marginBottom: '10px'
}));

const StyledCard = styled(Card)(() => ({
    marginBottom: '10px'
}));

export {AssignmentPreviewContainer, StyledButton, StyledCard};
