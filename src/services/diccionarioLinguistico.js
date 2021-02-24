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
    static submit(diccionario){
        if(diccionario.FECHA_ALTA){
            delete diccionario.FECHA_ALTA;
            return Http.put(`/api/diccionarioLinguistico?${queryString.stringify({
                DESCRIPCION_ORIGINAL:diccionario.DESCRIPCION_ORIGINAL,
                ID_TIPOLOGIA_DE_DICCIONARIO: diccionario.ID_TIPOLOGIA_DE_DICCIONARIO,
                ID_VARIABLE: diccionario.ID_VARIABLE
            })}`, diccionario);
        }else{
            return Http.post(`/api/diccionarioLinguistico`, diccionario);
        }
    }
}

export default DiccionarioLinguistico;