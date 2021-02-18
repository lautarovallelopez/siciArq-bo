import {connect} from 'react-redux';

import {submitUserRequest, getUserRequest, resetUser} from '@state/User/actions';
import {getLoading, getUser} from '@state/User/selectors';

import Editor from './Editor';

const mapStateToProps = state => ({
    user: getUser(state),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    submit: (values, resolve, reject) => dispatch(submitUserRequest(values, resolve, reject)),
    findUser: id => dispatch(getUserRequest(id)),
    resetUser: () => dispatch(resetUser())
});

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default EditorContainer;
