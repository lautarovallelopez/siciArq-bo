import {connect} from 'react-redux';

import {setSearchParams} from '@state/Common/actions';
import {getSituationsRequest} from '@state/Type/actions';
import {getUsersByStateAndRoleRequest} from '@state/User/actions';
import {getSurveysRequest} from '@state/Review/actions';
import {getSearchParamsBySection} from '@state/Common/selectors';
import {getPollsters, getTeamLeaders} from '@state/User/selectors';
import {getUser, isSubCoordinator} from '@state/Session/selectors';
import {sections} from '@constants';
import roles from '@constants/roles';

import SearchParams from './SearchParams';

const mapStateToProps = state => ({
    searchParams: getSearchParamsBySection(state, sections.REVIEW),
    teamLeaders: getTeamLeaders(state, roles.TEAM_LEADER),
    pollsters: getPollsters(state, roles.POLLSTER),
    currentUser: getUser(state),
    isSubCoordinator: isSubCoordinator(state)
});

const mapDispatchToProps = dispatch => ({
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams, sections.REVIEW)),
    fetchUsers: (stateId, role) => dispatch(getUsersByStateAndRoleRequest(stateId, role)),
    getSurveys: params => dispatch(getSurveysRequest(params)),
    getSituations: status => dispatch(getSituationsRequest(status))
});

const SearchParamsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchParams);

export default SearchParamsContainer;
