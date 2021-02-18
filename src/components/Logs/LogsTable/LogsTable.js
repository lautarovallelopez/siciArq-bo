import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Container, Table
} from 'reactstrap';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';

import Spinner from '@components/common/Spinner';
import {logsPropTypes} from '@util/propTypes';
import NoFoundResults from '@components/common/NoFoundResults';
import Pagination from '@components/common/Pagination';
import {getDateOrSD, getFullName} from '@util/ui';

const LogsTable = ({
    logs,
    loading,
    requested,
    searchParams,
    setSearchParams,
    count
}) => {
    const [selectedPage, setSelectedPage] = useState(0);

    const handleChangePage = page => {
        setSelectedPage(page);
        setSearchParams({...searchParams, skip: page});
    };

    return (
        <Container fluid data-testid="logs-table">
            <Spinner loading={loading && requested}>
                {!!count && (
                    <Table responsive striped data-testid="table">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Último login</th>
                                <th>Fecha de sincronizacion</th>
                                <th>Versión App</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, index) => (
                                <tr id={log.id} key={log.id}>
                                    <td className="text-center" data-testid={`user-${index}`}>
                                        {getFullName(log.user)}
                                    </td>
                                    <td className="text-center" data-testid={`login-date-${index}`}>
                                        {getDateOrSD(log.loginDate)}
                                    </td>
                                    <td className="text-center" data-testid={`sync-date-${index}`}>
                                        {getDateOrSD(log.syncDate)}
                                    </td>
                                    <td className="text-center" data-testid={`version-${index}`}>
                                        {log.version}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
                <NoFoundResults
                    icon={faListAlt}
                    show={count === 0}
                    title="No se encontraron sincronizaciones para los filtros solicitados."
                />
                {!!count && (
                    <Pagination
                        onChange={handleChangePage}
                        selectedPage={selectedPage}
                        resultsCount={logs.length}
                        maxPage={5}
                        pageSize={20}
                    />
                )}
            </Spinner>
        </Container>
    );
};

LogsTable.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    logs: PropTypes.arrayOf(logsPropTypes),
    loading: PropTypes.bool.isRequired,
    requested: PropTypes.bool.isRequired,
    searchParams: PropTypes.shape({
        state: PropTypes.string
    }),
    count: PropTypes.number
};

LogsTable.defaultProps = {
    logs: [],
    searchParams: undefined,
    count: undefined
};

export default LogsTable;
