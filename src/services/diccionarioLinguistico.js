import Http from './http';
import queryString from 'query-string';
class DiccionarioLinguistico {
    static fetch(page) {
        return Http.get(`api/diccionarioLinguistico?page=${page-1}`);
    }
    static delete(ids){
        return Http.delete(`api/diccionarioLinguistico?${queryString.stringify(ids)}`);
    }
    static fetchOne({DESCRIPCION_ORIGINAL, ID_TIPOLOGIA_DE_DICCIONARIO, ID_VARIABLE}) {
        return Http.get(`api/diccionarioLinguistico/${DESCRIPCION_ORIGINAL}/${ID_TIPOLOGIA_DE_DICCIONARIO}/${ID_VARIABLE}`);
    }
    static submit(rolSici){
        if(rolSici.FECHA_ALTA){
            delete rolSici.FECHA_ALTA;
            return Http.put(`api/rolSici?${queryString.stringify({
                ID_USUARIO:rolSici.ID_USUARIO,
                ID_ROL_USUARIO: rolSici.ID_ROL_USUARIO
            })}`, rolSici);
        }else{
            return Http.post(`api/rolSici`, rolSici);
        }
    }
}

export default DiccionarioLinguistico;