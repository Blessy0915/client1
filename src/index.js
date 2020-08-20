import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'


import configureStore from './store/configureStore'
import { startSetEmployees} from './actions/Employee'
import { startSetProjects } from './actions/Project'
import { startSetLogs } from './actions/Log'

const store = configureStore()
console.log(store.getState())

store.dispatch(startSetEmployees())
store.dispatch(startSetProjects())
store.dispatch(startSetLogs())
store.subscribe(()=>
{
    console.log(store.getState())
})



const jsx = (
  <Provider store = { store }>
        <App/> 
  </Provider>

)
ReactDOM.render(jsx,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
