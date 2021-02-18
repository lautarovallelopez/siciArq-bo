import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BackButtonContainer = styled.div(() => ({
    display: 'flex'
}));

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(() => ({
    marginRight: '10px'
}));

export {BackButtonContainer, StyledFontAwesomeIcon};
