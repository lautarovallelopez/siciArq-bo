import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    ModalBody,
    Row
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faBan} from '@fortawesome/free-solid-svg-icons';

import Dropdown from '@components/common/Dropdown';
import Spinner from '@components/common/Spinner';
import {operations} from '@constants';
import {parseStateId} from '@util/ui';

import {
    StyledModal, StyledModalHeader, StyledModalFooter, Text
} from './styled';

const ReviewOperationsModal = ({
    context,
    users,
    loading,
    fetchUsers,
    reassignSurvey,
    superviseSurvey
}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetchUsers({state: parseStateId(context.stateId), role: context.assigneeRoles});
    }, []);

    const handleUserChange = ({target: {value}}) => setUser(value);

    const handleAccept = () => {
        const actions = {
            [operations.REASSIGN]: reassignSurvey,
            [operations.SUPERVISE]: superviseSurvey
        };
        if (actions[context.title]) {
            actions[context.title](context.surveyId, context.addressId, user);
        }
        context.onClose();
    };

    return (
        <StyledModal
            isOpen={context.isOpen}
            centered
            toggle={context.onClose}
            size="md"
        >
            <StyledModalHeader toggle={context.onClose}>
                {`${context.title} encuesta`}
            </StyledModalHeader>
            <ModalBody>
                <Spinner loading={loading}>
                    <Row>
                        <Col sm={12}>
                            {users.length > 0 ? (
                                <Dropdown
                                    options={users}
                                    getOptionValue={option => option.id}
                                    getOptionLabel={option => option.label}
                                    onChange={handleUserChange}
                                    label="Usuario a asignar"
                                    control="user"
                                    value={user}
                                    isClearable
                                />
                            ) : (
                                <Text>
                                    No hay usuarios disponibles para asignar.
                                </Text>
                            )}
                        </Col>
                    </Row>
                </Spinner>
            </ModalBody>
            <StyledModalFooter>
                <Button
                    onClick={handleAccept}
                    color="primary"
                    disabled={!user}
                    data-testid="accept-button"
                >
                    <FontAwesomeIcon icon={faCheck}/>
                    &nbsp;
                    {context.title}
                </Button>
                <Button
                    onClick={context.onClose}
                    color="outline"
                    data-testid="cancel-button"
                >
                    <FontAwesomeIcon icon={faBan}/>
                    &nbsp;
                    Cancelar
                </Button>
            </StyledModalFooter>
        </StyledModal>
    );
};

ReviewOperationsModal.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    reassignSurvey: PropTypes.func.isRequired,
    superviseSurvey: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool.isRequired,
    context: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        stateId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        surveyId: PropTypes.number.isRequired,
        assigneeRoles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        user: PropTypes.string,
        addressId: PropTypes.number.isRequired
    }).isRequired
};

ReviewOperationsModal.defaultProps = {
    users: []
};

export default ReviewOperationsModal;
