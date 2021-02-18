import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Collapse} from 'reactstrap';

import {assignmentsPropTypes} from '@util/propTypes';
import assignmentTypes from '@constants/assignmentTypes';

import AssignmentsPreviewByAddress from './Address';
import AssignmentsPreviewByArea from './Area';
import AssignmentsPreviewBySegment from './Segment';
import AssignmentsPreviewByUps from './Ups';
import {AssignmentPreviewContainer, StyledButton, StyledCard} from './styled';

const AssignmentsPreview = ({assignments, assignmentType, isAddressOrReassignment}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AssignmentPreviewContainer>
            <StyledButton outline color="danger" onClick={() => setIsOpen(!isOpen)} data-testid="button">
                {`${isOpen ? 'Ocultar' : 'Mostrar'}`}
                {' '}
                asignaciones pendientes
            </StyledButton>
            <Collapse isOpen={isOpen}>
                {assignments.map((assignment, index) => (
                    <StyledCard key={`ups-${assignment.ups}-area-${assignment.area}`}>
                        {assignmentType === assignmentTypes.AREA && (
                            <AssignmentsPreviewByArea id={`assignments-preview-by-area-${index}`} assignment={assignment}/>
                        )}
                        {assignmentType === assignmentTypes.SEGMENT && (
                            <AssignmentsPreviewBySegment id={`assignments-preview-by-segment-${index}`} assignment={assignment}/>
                        )}
                        {assignmentType === assignmentTypes.UPS && (
                            <AssignmentsPreviewByUps id={`assignments-preview-by-ups-${index}`} assignment={assignment}/>
                        )}
                        {isAddressOrReassignment && (
                            <AssignmentsPreviewByAddress id={`assignments-preview-by-address-${index}`} assignment={assignment}/>
                        )}
                    </StyledCard>
                ))}
            </Collapse>
        </AssignmentPreviewContainer>
    );
};

AssignmentsPreview.propTypes = {
    assignments: PropTypes.arrayOf(assignmentsPropTypes).isRequired,
    assignmentType: PropTypes.number.isRequired,
    isAddressOrReassignment: PropTypes.bool.isRequired
};

export default AssignmentsPreview;
