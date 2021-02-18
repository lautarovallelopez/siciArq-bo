import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '@components/Home';
import Account from '@components/Account';
import Users from '@components/Users';
import Assignments from '@components/Assignments';
import FieldMaterials from '@components/FieldMaterials';
import Logs from '@components/Logs';
import Review from '@components/Review';
import roles from '@constants/roles';
import routes from '@constants/routes';

import Footer from '../Footer';
import Header from '../Header';
import ErrorBoundary from './ErrorBoundary';

const RouterWithSession = ({user: {roles: [role]}}) => (
    <HashRouter>
        <Header/>
        <ErrorBoundary>
            <main className="mt-20">
                <Container fluid>
                    <Switch>
                        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
                            <Route path={routes.USERS} component={Users}/>
                        )}
                        <Route path={routes.ACCOUNT} component={Account}/>
                        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
                            <Route path={routes.FIELD_MATERIALS} component={FieldMaterials}/>
                        )}
                        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER].includes(role) && (
                            <Route path={routes.REVIEW} component={Review}/>
                        )}
                        <Route path={routes.LOGS} component={Logs}/>
                        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
                            <Route path={routes.MONITORING} render={() => <h2>Monitoreo</h2>}/>
                        )}
                        {[roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR].includes(role) && (
                            <Route path={routes.ASSIGNMENTS} component={Assignments}/>
                        )}
                        <Route component={Home}/>
                    </Switch>
                </Container>
            </main>
        </ErrorBoundary>
        <Footer/>
    </HashRouter>
);

RouterWithSession.propTypes = {
    user: PropTypes.shape({
        roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
};

export default RouterWithSession;
