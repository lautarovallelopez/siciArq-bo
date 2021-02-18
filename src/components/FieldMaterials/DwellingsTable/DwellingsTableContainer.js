import {connect} from 'react-redux';

import {getFieldMaterialsByAreaRequest} from '@state/FieldMaterial/actions';
import {getFieldMaterialsByAreaData, getFieldMaterialsByAreaLoading, getFieldMaterialsByAreaRequested} from '@state/FieldMaterial/selectors';
import {getStateName} from '@state/StaticData/selectors';

import DwellingsTable from './DwellingsTable';

const mapStateToProps = (state, ownProps) => ({
    fieldMaterials: getFieldMaterialsByAreaData(state),
    loading: getFieldMaterialsByAreaLoading(state),
    requested: getFieldMaterialsByAreaRequested(state),
    stateName: getStateName(state, ownProps?.match?.params.state)
});

const mapDispatchToProps = dispatch => ({
    getFieldMaterials: (state, ups, area) => dispatch(getFieldMaterialsByAreaRequest(state, ups, area))
});

const DwellingsTableContainer = connect(mapStateToProps, mapDispatchToProps)(DwellingsTable);

export default DwellingsTableContainer;
