import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Button, ButtonGroup, Table, Tooltip
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import {getFullName} from '@util/ui';
import Address from '@components/common/Address';
import Dropdown from '@components/common/Dropdown';
import {assignmentsPropTypes, userPropTypes} from '@util/propTypes';
import roles from '@constants/roles';

import {
    Address as AddressHeader, Reassignment, StyledTH, Tr, UserTH
} from '../styled';

const AssignmentsTableByReassignment = ({
    assignments, teamLeaders, pollsters, updateAssignment
}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <Table striped data-testid="assignments-table-by-reassignment">
            <thead>
                <tr>
                    <StyledTH>UPS</StyledTH>
                    <StyledTH>Área</StyledTH>
                    <StyledTH>Segmento</StyledTH>
                    <StyledTH>N° Listado</StyledTH>
                    <AddressHeader>Domicilio</AddressHeader>
                    <th data-testid="team-leader">Jefe de equipo</th>
                    <th data-testid="pollster">Encuestador</th>
                    <Reassignment>Reasignar</Reassignment>
                    <>
                        <UserTH id="user-header" data-testid="user-header">
                            Usuario
                            &nbsp;
                            <FontAwesomeIcon icon={faUser} className="mr-2"/>
                        </UserTH>
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen}
                            target="user-header"
                            toggle={toggle}
                            data-testid="user-tooltip"
                        >
                            Es la persona que posee actualmente la encuesta
                        </Tooltip>
                    </>
                </tr>
            </thead>
            <tbody>
                {assignments.map((assignment, index) => (
                    <Tr key={assignment.id} toAssign={assignment.toAssign}>
                        <td className="text-center" data-testid={`ups-${index}`}>{assignment.ups}</td>
                        <td className="text-center" data-testid={`area-${index}`}>{assignment.area}</td>
                        <td className="text-center" data-testid={`segment-${index}`}>{assignment.segment}</td>
                        <td className="text-center" data-testid={`list-number-${index}`}>
                            {`${assignment.listNumber}`}
                        </td>
                        <td className="text-center" data-testid={`address-${index}`}>
                            <Address address={assignment}/>
                        </td>
                        <td>
                            <Dropdown
                                options={teamLeaders}
                                getOptionValue={option => option.id}
                                getOptionLabel={option => getFullName(option)}
                                onChange={({target: {id, value}}) => (
                                    value === assignment.teamLeader ? {} : updateAssignment({...assignment, [id]: value})
                                )}
                                control="teamLeader"
                                value={assignment.teamLeader}
                                isClearable
                                id={`teamLeader-${index}`}
                                disabled={!!assignment.teamLeader && ![2, 3].includes(assignment.situation)}
                            />
                        </td>
                        <td>
                            <Dropdown
                                options={pollsters}
                                getOptionValue={option => option.id}
                                getOptionLabel={option => getFullName(option)}
                                onChange={({target: {id, value}}) => (
                                    value === assignment.pollster ? {} : updateAssignment({...assignment, [id]: value})
                                )}
                                control="pollster"
                                value={assignment.pollster}
                                isClearable
                                id={`pollster-${index}`}
                                disabled={!!assignment.pollster && ![2, 3].includes(assignment.situation)}
                            />
                        </td>
                        <td data-testid={`reassign-${index}`}>
                            <div className="d-flex align-items-center justify-content-center">
                                <ButtonGroup>
                                    <Button
                                        data-testid={`reassign-teamLeader-${index}`}
                                        outline
                                        color="primary"
                                        onClick={() => updateAssignment({...assignment, role: roles.TEAM_LEADER})}
                                        active={assignment.role === roles.TEAM_LEADER}
                                        disabled={!assignment.teamLeader}
                                    >
                                        Jefe de equipo
                                    </Button>
                                    <Button
                                        data-testid={`reassign-pollster-${index}`}
                                        outline
                                        color="primary"
                                        onClick={() => updateAssignment({...assignment, role: roles.POLLSTER})}
                                        active={assignment.role === roles.POLLSTER}
                                        disabled={!assignment.pollster}
                                    >
                                        Encuestador
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </td>
                        <td className="text-center" data-testid={`user-${index}`}>
                            {`${assignment.user?.surname}, ${assignment.user?.name}`}
                        </td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

AssignmentsTableByReassignment.propTypes = {
    updateAssignment: PropTypes.func.isRequired,
    assignments: PropTypes.arrayOf(assignmentsPropTypes),
    teamLeaders: PropTypes.arrayOf(userPropTypes),
    pollsters: PropTypes.arrayOf(userPropTypes)
};

AssignmentsTableByReassignment.defaultProps = {
    teamLeaders: [],
    pollsters: [],
    assignments: []
};

export default AssignmentsTableByReassignment;
