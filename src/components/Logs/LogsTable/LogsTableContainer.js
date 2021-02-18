import {connect} from 'react-redux';

import {setSearchParams} from '@state/Common/actions';
import {
    getLogsData, getLogsLoading, getLogsRequested, getLogsCount
} from '@state/Log/selectors';
import {getSearchParams} from '@state/Common/selectors';
import {sections} from '@constants';

import LogsTable from './LogsTable';

const mapStateToProps = state => ({
    logs: getLogsData(state),
    loading: getLogsLoading(state),
    requested: getLogsRequested(state),
    searchParams: getSearchParams(state),
    count: getLogsCount(state)
});

const mapDispatchToProps = dispatch => ({
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams, sections.LOGS))
});

const LogsTableContainer = connect(mapStateToProps, mapDispatchToProps)(LogsTable);

export default LogsTableContainer;
