import React from 'react';
import PropTypes from 'prop-types';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import {BackButtonContainer, StyledFontAwesomeIcon} from './styled';

const BackButton = ({title, to}) => (
    <BackButtonContainer data-testid="back-button">
        <Link to={to}>
            <StyledFontAwesomeIcon icon={faArrowCircleLeft} size="2x" data-testid="back-icon" className="d-print-none"/>
        </Link>
        <h2>{title}</h2>
    </BackButtonContainer>
);

BackButton.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default BackButton;
