import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from 'store/session/reducers';
import diccionarioLinguistico from 'store/diccionario-linguistico/reducers';

export default history =>
  combineReducers({
    router: connectRouter(history),
    session,
    diccionarioLinguistico
  });
