import React from 'react';
import PropTypes from 'prop-types';
import {
    ModalBody,
    Button
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faBan} from '@fortawesome/free-solid-svg-icons';

import {
    StyledModal, StyledModalHeader, StyledModalFooter, Text, Title
} from './styled';

const ConfirmModal = ({
    context,
    isOpen,
    closeModal
}) => {
    const handleAccept = () => {
        context.onAccept();
        closeModal();
    };

    return (
        <StyledModal
            isOpen={isOpen}
            centered
            toggle={closeModal}
            size={context?.large ? 'lg' : null}
        >
            <StyledModalHeader toggle={closeModal}>
                <Title>{context?.title}</Title>
            </StyledModalHeader>
            <ModalBody >
                <Text>{context?.message}</Text>
                {context?.children}
            </ModalBody>
            <StyledModalFooter>
                {context?.onAccept && (
                    <Button color="primary" onClick={handleAccept} data-testid="confirm-button">
                        <FontAwesomeIcon icon={faCheck}/>
                    &nbsp;Confirmar
                    </Button>
                )}
                <Button onClick={closeModal} color="outline" data-testid="cancel-button">
                    <FontAwesomeIcon icon={faBan}/>
                  &nbsp;Cancelar
                </Button>
            </StyledModalFooter>
        </StyledModal>
    );
};

ConfirmModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    context: PropTypes.shape({
        message: PropTypes.string.isRequired,
        onAccept: PropTypes.func,
        title: PropTypes.string.isRequired,
        children: PropTypes.element,
        large: PropTypes.bool
    }),
    isOpen: PropTypes.bool.isRequired
};

ConfirmModal.defaultProps = {
    context: undefined
};

export default ConfirmModal;
