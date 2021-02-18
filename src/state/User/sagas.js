import {
    put,
    call,
    delay,
    all,
    takeEvery
} from 'redux-saga/effects';

import UserService from '@services/user';
import {
    getUserError,
    getUsersError,
    getUsersSuccess,
    getUserSuccess,
    submitUserError,
    deleteUserSuccess,
    deleteUserError,
    getUsersByStateAndRoleSuccess,
    getUsersByStateAndRoleError
} from '@state/User/actions';
import {handleError, setNotification} from '@state/Common/actions';
import {sagasDelay} from '@constants';
import types from '@constants/notificationTypes';
import {
    SUBMIT_PASSWORD_RECOVERY_REQUESTED,
    SUBMIT_USER_REQUEST,
    GET_USER_REQUEST,
    GET_USERS_REQUEST,
    DELETE_USER_REQUEST,
    GET_USERS_BY_STATE_AND_ROLE_REQUEST
} from '@state/User/types';

export function* submitUser({values, resolve, reject}) {
    try {
        yield call(UserService.save, values);
        if (resolve) {
            yield call(resolve);
        }
        yield put(setNotification({
            message: `Usuario ${values.id ? 'editado' : 'creado'} correctamente.`,
            notificationType: types.SUCCESS
        }));
    } catch (error) {
        yield put(submitUserError(error));
        if (reject) {
            yield call(reject);
        }
        yield put(setNotification({
            message: `No se ha podido ${values.id ? 'editar' : 'crear'} el usuario, intente mas tarde.`,
            notificationType: types.ERROR
        }));
    }
}

export function* fetchUser({id}) {
    try {
        const user = yield call(UserService.fetchUser, id);
        yield put(getUserSuccess(user));
    } catch (error) {
        yield put(getUserError(error));
        yield put(setNotification({
            message: 'No se ha podido traer el usuario, intente mas tarde',
            notificationType: types.ERROR
        }));
    }
}

export function* fetchUsers({filters}) {
    try {
        const {documents, total} = yield call(UserService.fetchUsers, filters);
        yield put(getUsersSuccess({users: documents, total}));
    } catch (error) {
        yield put(getUsersError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de usuarios, intente mas tarde',
            notificationType: types.ERROR
        }));
    }
}

export function* deleteUser({user}) {
    try {
        yield call(UserService.deleteUser, user.id);
        yield put(deleteUserSuccess(user.id));
        yield put(setNotification({
            message: `Usuario ${user.deleted ? 'habilitado' : 'deshabilitado'} correctamente.`,
            notificationType: types.SUCCESS
        }));
    } catch (err) {
        yield put(deleteUserError(err));
        yield put(setNotification({
            message: `No se ha podido ${user.deleted ? 'habilitar' : 'deshabilitar'} el usuario, intente más tarde.`,
            notificationType: types.ERROR
        }));
    }
}

export function* submitPasswordRecovery({user}) {
    try {
        const result = yield call(UserService.submitPasswordRecovery, user);
        if (result.error) {
            yield put(handleError({err: result.error, failed: true}));
            yield delay(sagasDelay);
            yield put(handleError({err: result.error, failed: false}));
            return;
        }
    } catch (err) {
        yield put(handleError({err, failed: true}));
    }
}

export function* getUsersByStateAndRole({state, role}) {
    try {
        const {documents} = yield call(UserService.fetchUsers, {state, role});
        yield put(getUsersByStateAndRoleSuccess(documents));
    } catch (error) {
        yield put(getUsersByStateAndRoleError(error));
        yield put(setNotification({
            message: 'No se ha podido traer la lista de usuarios, intente mas tarde',
            notificationType: types.ERROR
        }));
    }
}

function* sessionSaga() {
    yield all([
        takeEvery(SUBMIT_USER_REQUEST, submitUser),
        takeEvery(GET_USER_REQUEST, fetchUser),
        takeEvery(GET_USERS_REQUEST, fetchUsers),
        takeEvery(DELETE_USER_REQUEST, deleteUser),
        takeEvery(SUBMIT_PASSWORD_RECOVERY_REQUESTED, submitPasswordRecovery),
        takeEvery(GET_USERS_BY_STATE_AND_ROLE_REQUEST, getUsersByStateAndRole)
    ]);
}

export default sessionSaga;
