import {connect} from 'react-redux';

import {getAssignmentsRequest, updateAssignmentsRequest} from '@state/Assignment/actions';
import {getAssignmentsPending, getAssignmentsToUpdateLoading, isValidGetAssignments} from '@state/Assignment/selectors';
import {openConfirmModal, resetSearchParams, setSearchParams} from '@state/Common/actions';
import {getSearchParamsBySection} from '@state/Common/selectors';
import {getUserRole, getUserState} from '@state/Session/selectors';
import {getAssignmentsTypesData} from '@state/Type/selectors';
import {sections} from '@constants';

import SearchParams from './SearchParams';

const mapStateToProps = state => ({
    searchParams: getSearchParamsBySection(state, sections.ASSIGNMENTS),
    assignments: getAssignmentsPending(state),
    loading: getAssignmentsToUpdateLoading(state),
    assignmentsTypesOptions: getAssignmentsTypesData(state),
    isValidGetAssignments: isValidGetAssignments(state),
    role: getUserRole(state),
    state: getUserState(state)
});

const mapDispatchToProps = dispatch => ({
    getAssignments: (params, assignmentType) => dispatch(getAssignmentsRequest(params, assignmentType)),
    setSearchParams: searchParams => dispatch(setSearchParams(searchParams, sections.ASSIGNMENTS)),
    updateAssignments: (assignments, assignmentType) => dispatch(updateAssignmentsRequest(assignments, assignmentType)),
    openConfirmModal: context => dispatch(openConfirmModal(context)),
    resetSearchParams: () => dispatch(resetSearchParams())
});

const SearchParamsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchParams);

export default SearchParamsContainer;
