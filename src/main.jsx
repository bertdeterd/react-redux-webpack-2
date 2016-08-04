import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {getAllCaseTypes} from './actions/caseTypeActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

injectTapEventPlugin();

//execute thunk > dispatch action > handle in reducer > view:mapstatetoprops
store.dispatch(getAllCaseTypes());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);


