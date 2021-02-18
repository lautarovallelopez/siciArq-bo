import {connect} from 'react-redux';

import {resetSearchParams, setSearchParams} from '@state/Common/actions';
import {getLogsRequest} from '@state/Log/actions';
import {getSearchParamsBySection} from '@state/Common/selectors';
import {getUser, isSubCoordinator} from '@state/Session/selectors';
import {getRolesToFilter} from '@state/StaticData/selectors';
import {sections} from '@constants';

import SearchParams from './SearchParams';

const mapStateToProps = state => ({
    searchParams: getSearchParamsBySection(state, sections.LOGS),
    currentUser: getUser(state),
    roles: getRolesToFilter(state),
    isSubCoordinator: isSubCoordinator(state)
});

const mapDispatchToProps = dispatch => ({
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams, sections.LOGS)),
    resetSearchParams: () => dispatch(resetSearchParams()),
    getLogs: params => dispatch(getLogsRequest(params))
});

const SearchParamsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchParams);

export default SearchParamsContainer;
