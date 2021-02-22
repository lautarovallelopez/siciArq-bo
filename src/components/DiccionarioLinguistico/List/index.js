import {connect} from 'react-redux';
import get from 'lodash/get';

import {
    fetchDiccionariosLinguisticosRequested,
    deleteDiccionarioLinguisticoRequested
} from '@state/DiccionarioLinguistico/actions';

import Component from './Component';

// Store Redux - StaticData
/*const mapStateToProps = state => ({
    page: get(state, 'diccionarioLinguistico.page'),
    limit: get(state, 'diccionarioLinguistico.limit'),
    total: get(state, 'diccionarioLinguistico.total'),
    diccionarios: get(state, 'diccionarioLinguistico.diccionarios'),
    tableHeaders: get(state, 'diccionarioLinguistico.tableHeaders'),
    formHeaders: get(state, 'diccionarioLinguistico.formHeaders')
});*/

const mapStateToProps = state => {
    console.log(state);
    return {
        page: get(state, 'diccionarioLinguistico.page'),
        limit: get(state,   'diccionarioLinguistico.limit'),
        total: get(state, 'diccionarioLinguistico.total'),
        diccionarios: get(state, 'diccionarioLinguistico.diccionarios'),
        tableHeaders: get(state, 'diccionarioLinguistico.tableHeaders'),
        formHeaders: get(state, 'diccionarioLinguistico.formHeaders')
    }
};

const mapDispatchToProps = dispatch => ({
    fetchDiccionarios: page=>dispatch(fetchDiccionariosLinguisticosRequested(page)),
    deleteDiccionario: ids=>dispatch(deleteDiccionarioLinguisticoRequested(ids))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
