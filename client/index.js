import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './reducers/reducer';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
