import { createReducer } from 'reduxsauce';
import { diccionarioLinguisticoTypes } from 'store/diccionario-linguistico/actions';
import { initialState } from 'store/diccionario-linguistico/initial-state';

const diccionarioLinguisticoFetchRequest = state => ({
  ...state,
  diccionarios: initialState.diccionarios,
});

const diccionarioLinguisticoFetchSuccess = (state, { diccionarios }) => ({
  ...state,
  diccionarios,
});
console.log({
  [diccionarioLinguisticoTypes.DICCIONARIO_LINGUISTICO_FETCH_REQUEST]: diccionarioLinguisticoFetchRequest,
  [diccionarioLinguisticoTypes.DICCIONARIO_LINGUISTICO_FETCH_SUCCESS]: diccionarioLinguisticoFetchSuccess,
});
const reducer = createReducer(initialState, {
  [diccionarioLinguisticoTypes.DICCIONARIO_LINGUISTICO_FETCH_REQUEST]: diccionarioLinguisticoFetchRequest,
  [diccionarioLinguisticoTypes.DICCIONARIO_LINGUISTICO_FETCH_SUCCESS]: diccionarioLinguisticoFetchSuccess,
});

export default reducer;
