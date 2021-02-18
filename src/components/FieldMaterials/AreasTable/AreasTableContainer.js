import {connect} from 'react-redux';

import {getFieldMaterialsByUpsRequest} from '@state/FieldMaterial/actions';
import {getFieldMaterialsByUpsData, getFieldMaterialsByUpsLoading, getFieldMaterialsByUpsRequested} from '@state/FieldMaterial/selectors';
import {getStateName} from '@state/StaticData/selectors';

import AreasTable from './AreasTable';

const mapStateToProps = (state, ownProps) => ({
    fieldMaterials: getFieldMaterialsByUpsData(state),
    loading: getFieldMaterialsByUpsLoading(state),
    requested: getFieldMaterialsByUpsRequested(state),
    stateName: getStateName(state, ownProps?.match?.params.state)
});

const mapDispatchToProps = dispatch => ({
    getFieldMaterials: (state, ups) => dispatch(getFieldMaterialsByUpsRequest(state, ups))
});

const AreasTableContainer = connect(mapStateToProps, mapDispatchToProps)(AreasTable);

export default AreasTableContainer;
