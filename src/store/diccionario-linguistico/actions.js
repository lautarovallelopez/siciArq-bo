import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  diccionarioLinguisticoFetchRequest: ['page'],
  diccionarioLinguisticoFetchSuccess: ['diccionarios']
});

export const diccionarioLinguisticoTypes = Types;
export default Creators;
