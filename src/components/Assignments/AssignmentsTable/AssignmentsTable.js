import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';

import Pagination from '@components/common/Pagination';
import Spinner from '@components/common/Spinner';
import assignmentTypes from '@constants/assignmentTypes';
import roles from '@constants/roles';

import AssignmentsTableByArea from './Area';
import AssignmentsTableByAddress from './Address';
import AssignmentsTableByReassignment from './Reassignment';
import AssignmentsTableBySegment from './Segment';
import AssignmentsTableByUps from './Ups';

const AssignmentsTable = ({
    loading,
    requested,
    fetchUsers,
    searchParams,
    loadingUsers,
    assignmentType,
    displayAssignmentsTable,
    count,
    getAssignments,
    isValidGetAssignments
}) => {
    const [selectedPage, setSelectedPage] = useState(0);

    useEffect(() => {
        if (isValidGetAssignments) {
            const role = searchParams.assignmentType === assignmentTypes.UPS
                ? [roles.SUB_COORDINATOR]
                : [roles.TEAM_LEADER, roles.POLLSTER];
            fetchUsers(searchParams.state, role);
        }
    }, [requested, loading, searchParams]);

    const handleChangePage = page => {
        setSelectedPage(page);
        getAssignments({...searchParams, skip: page}, searchParams.assignmentType);
    };

    return (
        <Container fluid data-testid="assignments-table">
            <Spinner loading={loading || loadingUsers}>
                <>
                    {displayAssignmentsTable && (
                        <>
                            {assignmentType === assignmentTypes.AREA && <AssignmentsTableByArea/>}
                            {assignmentType === assignmentTypes.ADDRESS && <AssignmentsTableByAddress/>}
                            {assignmentType === assignmentTypes.REASSIGNMENT && <AssignmentsTableByReassignment/>}
                            {assignmentType === assignmentTypes.SEGMENT && <AssignmentsTableBySegment/>}
                            {assignmentType === assignmentTypes.UPS && <AssignmentsTableByUps/>}
                            {(requested && !loading && !loadingUsers) && count === 0 ? (
                                <h4 className="text-center">
                                    {' '}
                                    <FontAwesomeIcon icon={faListAlt} className="mr-2"/>
                                    No se encontraron asignaciones para los filtros seleccionados.
                                </h4>
                            ) : (
                                <Pagination onChange={handleChangePage} selectedPage={selectedPage} resultsCount={count} maxPage={5} pageSize={20}/>
                            )}
                        </>
                    )}
                </>
            </Spinner>
        </Container>
    );
};

AssignmentsTable.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    getAssignments: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    loadingUsers: PropTypes.bool.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string.isRequired,
        assignmentType: PropTypes.number,
        ups: PropTypes.number,
        area: PropTypes.number
    }),
    assignmentType: PropTypes.number,
    displayAssignmentsTable: PropTypes.bool.isRequired,
    isValidGetAssignments: PropTypes.bool.isRequired,
    count: PropTypes.number
};

AssignmentsTable.defaultProps = {
    searchParams: undefined,
    assignmentType: undefined,
    count: 0
};

export default AssignmentsTable;
