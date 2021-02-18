import {connect} from 'react-redux';

import {closeConfirmModal} from '@state/Common/actions';
import {getIsOpenModal, getModalContext} from '@state/Common/selectors';

import ConfirmModal from './ConfirmModal';

const mapStateToProps = state => ({
    isOpen: getIsOpenModal(state),
    context: getModalContext(state)
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeConfirmModal())
});

const ConfirmModalContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);

export default ConfirmModalContainer;
