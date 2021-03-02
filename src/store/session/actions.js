import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  sessionValidateRequest: ['queryParams'],
  sessionValidateSuccess: ['user'],
  sessionValidateError: ['error'],
});

export const sessionTypes = Types;
export default Creators;
