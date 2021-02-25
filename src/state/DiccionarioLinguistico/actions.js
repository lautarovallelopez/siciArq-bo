import * as types from './types';
import isEmpty from 'lodash/isEmpty';

export const fetchDiccionariosLinguisticosRequested = page => ({type : types.FETCH_DICCIONARIOS_LINGUISTICOS_REQUESTED, page});
export const fetchDiccionariosLinguisticosSucceeded = response => ({type : types.FETCH_DICCIONARIOS_LINGUISTICOS_SUCCEEDED, response});
export const updateDiccionarioLinguistico = updates => ({type : types.UPDATE_DICCIONARIO_LINGUISTICO, updates});
export const fetchOneDiccionarioLinguisticoRequested = ids => {
    if(ids.DESCRIPCION_ORIGINAL && ids.ID_TIPOLOGIA_DE_DICCIONARIO && ids.ID_VARIABLE){
        return {type : types.FETCH_ONE_DICCIONARIO_LINGUISTICO_REQUESTED, ids};
    }else{
        return {type: types.RESTORE_ONE_DICCIONARIO}
    }
    
}
export const fetchOneDiccionarioLinguisticoSucceeded = diccionario => ({type : types.FETCH_ONE_DICCIONARIO_LINGUISTICO_SUCCEEDED, diccionario});
export const submitDiccionarioLinguisticoRequested = () =>({type : types.SUBMIT_DICCIONARIO_LINGUISTICO_REQUESTED});
export const submitDiccionarioLinguisticoSucceeded = response => ({type : types.SUBMIT_DICCIONARIO_LINGUISTICO_SUCCEEDED, response});
export const deleteDiccionarioLinguisticoRequested = diccionario =>({type : types.DELETE_DICCIONARIO_LINGUISTICO_REQUESTED, diccionario});
export const deleteDiccionarioLinguisticoSucceeded = response => ({type : types.DELETE_DICCIONARIO_LINGUISTICO_SUCCEEDED, response});
