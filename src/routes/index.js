import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';
import { HashRouter } from 'react-router-dom';
import Header from 'components/header';
import Footer from 'components/footer';

import SessionRoutes from './session-routes';
import { Layout } from './styled';

const Routes = () => (
  <ConnectedRouter history={history}>
    <HashRouter>
      <Header />
      <Layout>
        <SessionRoutes />
      </Layout>
      <Footer />
    </HashRouter>
  </ConnectedRouter>
);

export default Routes;
