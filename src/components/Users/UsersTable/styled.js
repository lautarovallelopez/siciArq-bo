import styled from '@emotion/styled';
import {DropdownToggle, DropdownMenu} from 'reactstrap';

const StyledDropdownToggle = styled(DropdownToggle)(props => ({
    cursor: 'pointer',
    ...(props.isOpen && {
        borderRadius: '50%',
        backgroundColor: '#E0E0E0',
        display: 'inline-block'
    })
}));

const StyledDropdownMenu = styled(DropdownMenu)(() => ({
    backgroundColor: '#d2d6d3'
}));

const DropdownContainer = styled.div(() => ({
    display: 'flex',
    alignItems: 'center'
}));

export {DropdownContainer, StyledDropdownToggle, StyledDropdownMenu};
