import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import routes from '@constants/routes';

import Credential from './Credential';
import Editor from './Editor';
import UsersList from './UsersContainer';

const Users = ({match: {path}}) => (
    <Switch>
        <Route path={routes.NEW_USER} key="new" exact component={Editor}/>
        <Route path={routes.EDIT_USER} key="edit" exact component={Editor}/>
        <Route path={routes.USER_CREDENTIAL} key="credential" exact component={Credential}/>
        <Route path={path} key="list" component={UsersList}/>
    </Switch>
);

Users.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired
};

export default Users;
