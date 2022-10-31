import React from 'react'
import ReactDOM from 'react-dom'
//import HookApp from './container/HookApp'
import App from './container/App'
import { Provider } from 'react-redux'
import store from './store'
// console.log('index_store',store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,    
    document.getElementById('root')
)