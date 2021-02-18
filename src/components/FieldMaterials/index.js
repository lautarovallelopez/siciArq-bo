import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import routes from '@constants/routes';

import StatesTable from './StatesTable';
import UpsTable from './UpsTable';
import AreasTable from './AreasTable';
import DwellingsTable from './DwellingsTable';

const FieldMaterials = ({match: {path}}) => (
    <Switch>
        <Route path={routes.FIELD_MATERIALS_BY_STATE} exact render={props => <UpsTable match={props.match}/>}/>
        <Route path={routes.FIELD_MATERIALS_BY_UPS} exact render={props => <AreasTable match={props.match}/>}/>
        <Route path={routes.FIELD_MATERIALS_BY_AREA} exact component={props => <DwellingsTable match={props.match}/>}/>
        <Route path={path} component={StatesTable}/>
    </Switch>
);

FieldMaterials.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired
};

export default FieldMaterials;
