import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import fontAwesomeIconPropTypes from '@util/propTypes/fontAwesomeIconPropTypes';

const Title = ({title, icon, id}) => (
    <Row className="form-group">
        <Col>
            <h3>
                <FontAwesomeIcon icon={icon} className="mr-2" data-testid={id}/>
                {title}
            </h3>
        </Col>
    </Row>
);

Title.propTypes = {
    id: PropTypes.string,
    icon: fontAwesomeIconPropTypes.isRequired,
    title: PropTypes.string.isRequired
};

Title.defaultProps = {
    id: 'icon'
};

export default Title;
