import {connect} from 'react-redux';

import {getFieldMaterialsRequest} from '@state/FieldMaterial/actions';
import {getFieldMaterialsData, getFieldMaterialsLoading, getFieldMaterialsRequested} from '@state/FieldMaterial/selectors';

import StatesTable from './StatesTable';

const mapStateToProps = state => ({
    fieldMaterials: getFieldMaterialsData(state),
    loading: getFieldMaterialsLoading(state),
    requested: getFieldMaterialsRequested(state)
});

const mapDispatchToProps = dispatch => ({
    getFieldMaterials: () => dispatch(getFieldMaterialsRequest())
});

const StatesTableContainer = connect(mapStateToProps, mapDispatchToProps)(StatesTable);

export default StatesTableContainer;
