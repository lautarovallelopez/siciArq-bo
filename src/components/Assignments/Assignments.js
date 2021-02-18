import React from 'react';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';

import Title from '@components/common/Title';

import AssignmentsTable from './AssignmentsTable';
import SearchParams from './SearchParams';

const Assignments = () => (
    <>
        <Title icon={faListAlt} title="Asignaciones"/>
        <SearchParams/>
        <AssignmentsTable/>
    </>
);

export default Assignments;
