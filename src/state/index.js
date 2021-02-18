import {all} from 'redux-saga/effects';

import {reducer as assignmentReducer, saga as assignmentSaga} from './Assignment';
import {
    reducer as commonReducer
} from './Common';
import {reducer as fieldMaterialReducer, saga as fieldMaterialSaga} from './FieldMaterial';
import {reducer as logReducer, saga as logSaga} from './Log';
import {
    reducer as reviewReducer, saga as reviewSaga
} from './Review';
import {
    reducer as sessionReducer, saga as sessionSaga
} from './Session';
import {reducer as staticDataReducer, saga as staticDataSaga} from './StaticData';
import {reducer as typeReducer, saga as typeSaga} from './Type';
import {
    reducer as userReducer, saga as userSaga
} from './User';

export const reducers = {
    assignment: assignmentReducer,
    common: commonReducer,
    fieldMaterial: fieldMaterialReducer,
    log: logReducer,
    review: reviewReducer,
    session: sessionReducer,
    staticData: staticDataReducer,
    type: typeReducer,
    user: userReducer
};

export function* rootSaga() {
    yield all([assignmentSaga(), fieldMaterialSaga(), logSaga(), reviewSaga(), sessionSaga(), staticDataSaga(), typeSaga(), userSaga()]);
}
