import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import List from './List';
import Edit from './Edit';
const DiccionarioLinguistico = ({match : {path}})=>(
    <Switch>
        <Route path={`${path}/new`} exact component={Edit} />
        <Route path={`${path}/:DESCRIPCION_ORIGINAL/:ID_TIPOLOGIA_DE_DICCIONARIO/:ID_VARIABLE`} exact component={Edit} />
        <Route path={`${path}/:page`} component={List} />
        <Route path={path}>
            <Redirect to={`${path}/1`} />
        </Route>
    </Switch>
);

export default DiccionarioLinguistico;