import {connect} from 'react-redux';
import get from 'lodash/get'
//import {} from '@actions/diccionarioLinguistico';
import Component from './Component';
import {
    fetchOneDiccionarioLinguisticoRequested,
    updateDiccionarioLinguistico,
    submitDiccionarioLinguisticoRequested
 } from '@state/DiccionarioLinguistico/actions'
// Store Redux - StaticData
const mapStateToProps = state => ({
    diccionario: get(state, 'diccionarioLinguistico.diccionarioActual')
});

const mapDispatchToProps = dispatch => ({
    getOne: ids => dispatch(fetchOneDiccionarioLinguisticoRequested(ids)),
    update: diccionario => dispatch(updateDiccionarioLinguistico(diccionario)),
    submit: ()=>dispatch(submitDiccionarioLinguisticoRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
