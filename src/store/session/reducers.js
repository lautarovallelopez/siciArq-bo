import { createReducer } from 'reduxsauce';
import { sessionTypes } from 'store/session/actions';
import { initialState } from 'store/session/initial-state';

const sessionValidateRequest = state => ({
  ...state,
  isValidating: true,
  isValidate: initialState.isValidate,
  error: initialState.error,
});

const sessionValidateSuccess = (state, { user }) => ({
  ...state,
  profile: user,
  isValidate: true,
  isValidating: initialState.isValidating,
  error: initialState.error,
});

const sessionValidateError = (state, { error }) => ({
  ...state,
  error,
  isValidating: initialState.isValidating,
  isValidate: initialState.isValidate,
});

const reducer = createReducer(initialState, {
  [sessionTypes.SESSION_VALIDATE_REQUEST]: sessionValidateRequest,
  [sessionTypes.SESSION_VALIDATE_SUCCESS]: sessionValidateSuccess,
  [sessionTypes.SESSION_VALIDATE_ERROR]: sessionValidateError,
});

export default reducer;
