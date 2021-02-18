import {connect} from 'react-redux';

import {getMessage, getType} from '@state/Common/selectors';
import {resetNotification} from '@state/Common/actions';
import {getLoading} from '@state/Session/selectors';

import Snackbar from './Snackbar';

const mapStateToProps = state => ({
    message: getMessage(state),
    notificationType: getType(state),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    resetNotification: () => dispatch(resetNotification())
});

const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(Snackbar);

export default SnackbarContainer;
