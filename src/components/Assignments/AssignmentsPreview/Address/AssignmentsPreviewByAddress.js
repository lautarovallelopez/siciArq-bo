import React from 'react';
import PropTypes from 'prop-types';
import {CardBody, Col, Row} from 'reactstrap';

import Address from '@components/common/Address';

const AssignmentsPreviewByArea = ({id, assignment}) => (
    <CardBody data-testid={id}>
        <Row className="form-group">
            <Col sm={6}>
                <strong data-testid="teamLeaderLabel">Jefe de equipo: </strong>
                {' '}
                <span data-testid="teamLeader">{assignment.teamLeader}</span>
            </Col>
            <Col sm={6}>
                <strong data-testid="pollsterLabel">Encuestador: </strong>
                {' '}
                <span data-testid="pollster">{assignment.pollster}</span>
            </Col>
        </Row>
        <Row className="form-group">
            <Col sm={6}>
                <strong data-testid="upsLabel">Ups:</strong>
                {' '}
                <span data-testid="ups">{assignment.ups}</span>
            </Col>
            <Col sm={6}>
                <strong data-testid="areaLabel">Área: </strong>
                {' '}
                <span data-testid="area">{assignment.area}</span>
            </Col>
        </Row>
        <Row className="form-group">
            <Col sm={6}>
                <strong data-testid="segmentLabel">Segmento:</strong>
                {' '}
                <span data-testid="segment">{assignment.segment}</span>
            </Col>
            <Col sm={6}>
                <strong data-testid="listNumberLabel">N° Listado: </strong>
                {' '}
                <span data-testid="listNumber">
                    {`${assignment.listNumber}`}
                </span>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <strong data-testid="addressLabel">Dirección: </strong>
                {' '}
                <Address address={assignment}/>
            </Col>
        </Row>
    </CardBody>
);

AssignmentsPreviewByArea.propTypes = {
    id: PropTypes.string.isRequired,
    assignment: PropTypes.shape({
        ups: PropTypes.number.isRequired,
        area: PropTypes.number.isRequired,
        segment: PropTypes.number.isRequired,
        teamLeader: PropTypes.string.isRequired,
        pollster: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        floor: PropTypes.string,
        room: PropTypes.string,
        cadastralNumber: PropTypes.string,
        listNumber: PropTypes.number.isRequired
    }).isRequired
};

export default AssignmentsPreviewByArea;
