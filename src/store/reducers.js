import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from 'store/session/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    session,
  });
