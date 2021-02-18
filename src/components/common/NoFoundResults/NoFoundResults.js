import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import fontAwesomeIconPropTypes from '@util/propTypes/fontAwesomeIconPropTypes';

const NoFoundResults = ({title, icon, show}) => (show ? (
    <h4 className="text-center">
        {' '}
        <FontAwesomeIcon icon={icon} className="mr-2" data-testid="icon"/>
        {title}
    </h4>
) : (
    <span data-testid="empty"/>
));

NoFoundResults.propTypes = {
    title: PropTypes.string.isRequired,
    icon: fontAwesomeIconPropTypes.isRequired,
    show: PropTypes.bool.isRequired
};

export default NoFoundResults;
