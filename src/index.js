import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk)); 
// second arguemnt is what connects the store to redux-thunk and its additional functionailty specifally with rmaking api requests in reducers


ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.querySelector('#root')
);