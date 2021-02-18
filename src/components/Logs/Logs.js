import React from 'react';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

import Title from '@components/common/Title';

import SearchParams from './SearchParams';
import LogsTable from './LogsTable';

const Logs = () => (
    <>
        <Title title="Sincronizaciones" id="logs-icon" icon={faHistory}/>
        <SearchParams/>
        <LogsTable/>
    </>
);

export default Logs;
