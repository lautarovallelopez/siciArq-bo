import styled from '@emotion/styled';
import {
    Modal,
    ModalHeader,
    ModalFooter
} from 'reactstrap';

const StyledModal = styled(Modal)(() => ({
    border: 0
}));

const StyledModalHeader = styled(ModalHeader)(() => ({
    borderBottom: 'none'
}));

const StyledModalFooter = styled(ModalFooter)(() => ({
    borderTop: 0,
    borderBottom: 0,
    backgroundColor: '#F1F2F4'
}));

const Text = styled.label(() => ({
    fontWeight: 400
}));

export {
    StyledModal, StyledModalHeader, StyledModalFooter, Text
};
