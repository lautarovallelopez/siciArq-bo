import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Container, Col, Row
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

import types from '@constants/notificationTypes';

import {StyledAlert} from './styled';

const Snackbar = ({
    notificationType, message, loading, resetNotification
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (notificationType) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
                resetNotification();
            }, 3000);
        }
    }, [notificationType]);

    return (
        <Container fluid>
            <Row>
                <Col sm={12} className="text-center">
                    <StyledAlert
                        color="success"
                        isOpen={isVisible && !loading && notificationType === types.SUCCESS}
                        toggle={() => setIsVisible(false)}
                    >
                        <FontAwesomeIcon icon={faCheckCircle}/>
                            &nbsp;
                        {message}
                    </StyledAlert>
                    <StyledAlert
                        color="danger"
                        isOpen={isVisible && !loading && notificationType === types.ERROR}
                        toggle={() => setIsVisible(false)}
                    >
                        <FontAwesomeIcon icon={faExclamationCircle}/>
                            &nbsp;
                        {message}
                    </StyledAlert>
                </Col>
            </Row>
        </Container>
    );
};

Snackbar.propTypes = {
    resetNotification: PropTypes.func.isRequired,
    message: PropTypes.string,
    notificationType: PropTypes.oneOf([types.SUCCESS, types.ERROR]),
    loading: PropTypes.bool.isRequired
};

Snackbar.defaultProps = {
    notificationType: undefined,
    message: undefined
};

export default Snackbar;
