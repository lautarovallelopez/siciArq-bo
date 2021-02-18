import {connect} from 'react-redux';

import {getRolesToFilter} from '@state/StaticData/selectors';
import {getUsersRequest} from '@state/User/actions';

import SearchParams from './SearchParams';

const mapStateToProps = state => ({
    roles: getRolesToFilter(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: filters => dispatch(getUsersRequest(filters))
});

const SearchParamsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchParams);

export default SearchParamsContainer;
