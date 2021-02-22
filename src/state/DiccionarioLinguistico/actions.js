import * as types from './types';


export const fetchDiccionariosLinguisticosRequested = page => ({type : types.FETCH_DICCIONARIOS_LINGUISTICOS_REQUESTED, page});
export const fetchDiccionariosLinguisticosSucceeded = response => ({type : types.FETCH_DICCIONARIOS_LINGUISTICOS_SUCCEEDED, response});
export const updateDiccionarioLinguistico = updates => ({type : types.UPDATE_DICCIONARIO_LINGUISTICO, updates});
export const fetchOneDiccionarioLinguisticoRequested = ids => ({type : types.FETCH_ONE_DICCIONARIO_LINGUISTICO_REQUESTED, ids});
export const fetchOneDiccionarioLinguisticoSucceeded = diccionario => ({type : types.FETCH_ONE_DICCIONARIO_LINGUISTICO_SUCCEEDED, diccionario});
export const submitDiccionarioLinguisticoRequested = () =>({type : types.SUBMIT_DICCIONARIO_LINGUISTICO_REQUESTED});
export const submitDiccionarioLinguisticoSucceeded = response => ({type : types.SUBMIT_DICCIONARIO_LINGUISTICO_SUCCEEDED, response});
export const deleteDiccionarioLinguisticoRequested = (ids) =>({type : types.DELETE_DICCIONARIO_LINGUISTICO_REQUESTED, ids});
export const deleteDiccionarioLinguisticoSucceeded = response => ({type : types.DELETE_DICCIONARIO_LINGUISTICO_SUCCEEDED, response});