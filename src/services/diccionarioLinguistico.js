import Http from './http';
import API from '@constants/apiRoutes';
import transformRoute from '@util/transformRoute';
class DiccionarioLinguistico {
    static fetch(page) {
        return Http.get(`/api/diccionarioLinguistico?page=${page-1}`);
    }
    static delete(diccionario){
        return Http.delete(transformRoute(API.diccionarioLinguistico.DELETE_ONE, diccionario));
    }
    static fetchOne({DESCRIPCION_ORIGINAL, ID_TIPOLOGIA_DE_DICCIONARIO, ID_VARIABLE}) {
        return Http.get(`/api/diccionarioLinguistico/${DESCRIPCION_ORIGINAL}/${ID_TIPOLOGIA_DE_DICCIONARIO}/${ID_VARIABLE}`);
    }
    static submit(diccionarioActual, diccionarioOrignal){
        
        if(diccionarioActual.FECHA_ALTA){
            const {FECHA_ALTA, ...diccionario} = diccionarioActual;
            return Http.put(transformRoute(API.diccionarioLinguistico.DELETE_ONE, diccionarioOrignal), diccionario);
        }else{
            return Http.post(`/api/diccionarioLinguistico`, diccionarioActual);
        }
    }
}

export default DiccionarioLinguistico;