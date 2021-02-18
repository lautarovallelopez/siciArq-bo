/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {head} from 'lodash';

import Root from 'containers/Root';
import configureStore from 'store';
import 'sass/app.scss';
import App from 'App';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Root store={store} App={App}/>
    </AppContainer>,
    head(document.getElementsByTagName('article'))
);
