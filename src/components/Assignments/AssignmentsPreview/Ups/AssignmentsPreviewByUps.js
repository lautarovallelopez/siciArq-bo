import React from 'react';
import PropTypes from 'prop-types';
import {CardBody, Col, Row} from 'reactstrap';

const AssignmentsPreviewByUps = ({id, assignment}) => (
    <CardBody data-testid={id}>
        <Row className="form-group">
            <Col sm={6}>
                <strong data-testid="subCoordinatorLabel">SubCoordinador: </strong>
                {' '}
                <span data-testid="subCoordinator">{assignment.subCoordinator}</span>
            </Col>
            <Col sm={6}>
                <strong data-testid="upsLabel">Ups:</strong>
                {' '}
                <span data-testid="ups">{assignment.ups}</span>
            </Col>
        </Row>
        <Row className="form-group">
            <Col sm={6}>
                <strong data-testid="areasLabel">Areas: </strong>
                {' '}
                <span data-testid="areas">{assignment.areas}</span>
            </Col>
            <Col sm={6}>
                <strong data-testid="dwellingsLabel">Viviendas:</strong>
                {' '}
                <span data-testid="dwellings">{assignment.dwellings}</span>
            </Col>
        </Row>
    </CardBody>
);

AssignmentsPreviewByUps.propTypes = {
    id: PropTypes.string.isRequired,
    assignment: PropTypes.shape({
        ups: PropTypes.number.isRequired,
        areas: PropTypes.number.isRequired,
        dwellings: PropTypes.number.isRequired,
        subCoordinator: PropTypes.string.isRequired
    }).isRequired
};

export default AssignmentsPreviewByUps;
