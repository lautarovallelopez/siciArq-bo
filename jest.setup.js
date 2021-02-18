import {render} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import packageJson from './package.json';

// Globalize common imports to make them available in all test files

global.React = React;
global.configureStore = configureStore;
global.VERSION = packageJson.version;

let mountedComponent;

global.render = (Component, props = {}, options = {}) => {
    if (!mountedComponent) {
        let component = <Component {...props}/>;

        if (options.router) {
            component = <MemoryRouter {...options.router}>{component}</MemoryRouter>;
        }

        if (options.store) {
            component = <Provider store={options.store}>{component}</Provider>;
        }

        mountedComponent = render(component);
    }

    return mountedComponent;
};

global.tearDown = () => {
    if (mountedComponent) {
        mountedComponent.unmount();
    }
    mountedComponent = undefined;
};
