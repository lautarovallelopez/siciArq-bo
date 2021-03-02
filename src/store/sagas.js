import { all } from 'redux-saga/effects';
import { sessionSaga } from 'store/session/saga';

export default function* rootSaga() {
  yield all([sessionSaga()]);
}
