import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {getAllCaseTypes} from './actions/caseTypeActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
const store = configureStore();

injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store 
const history = syncHistoryWithStore(browserHistory, store);

//execute thunk > dispatch action > handled in reducer > sent to view:mapstatetoprops
store.dispatch(getAllCaseTypes());

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);


