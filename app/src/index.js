import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Main} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();

