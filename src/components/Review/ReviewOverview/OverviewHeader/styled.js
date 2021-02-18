import styled from '@emotion/styled';
import {Col, DropdownToggle, DropdownMenu} from 'reactstrap';

const StyledBeginningCol = styled(Col)(() => ({
    paddingLeft: '0'
}));

const StyledEndingCol = styled(Col)(() => ({
    paddingRight: '0'
}));

const StyledDropdownToggle = styled(DropdownToggle)(props => ({
    cursor: 'pointer',
    marginTop: '20%',
    display: 'inline-block',
    ...(props.isopen === 'true' && {
        borderRadius: '50%',
        backgroundColor: '#E0E0E0'
    })
}));

const StyledDropdownMenu = styled(DropdownMenu)(() => ({
    backgroundColor: '#d2d6d3'
}));

export {
    StyledBeginningCol, StyledEndingCol, StyledDropdownToggle, StyledDropdownMenu
};
