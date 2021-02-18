import {connect} from 'react-redux';

import {getFieldMaterialsByStateRequest} from '@state/FieldMaterial/actions';
import {getFieldMaterialsByStateData, getFieldMaterialsByStateLoading, getFieldMaterialsByStateRequested} from '@state/FieldMaterial/selectors';
import {getStateName} from '@state/StaticData/selectors';

import UpsTable from './UpsTable';

const mapStateToProps = (state, ownProps) => ({
    fieldMaterials: getFieldMaterialsByStateData(state),
    loading: getFieldMaterialsByStateLoading(state),
    requested: getFieldMaterialsByStateRequested(state),
    stateName: getStateName(state, ownProps?.match?.params.state)
});

const mapDispatchToProps = dispatch => ({
    getFieldMaterials: state => dispatch(getFieldMaterialsByStateRequest(state))
});

const UpsTableContainer = connect(mapStateToProps, mapDispatchToProps)(UpsTable);

export default UpsTableContainer;
