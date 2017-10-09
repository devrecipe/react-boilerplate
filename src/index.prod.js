/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './containers/App.js'

let store = createStore(reducers)

const render = () => ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)

render()
store.subscribe(() => render())
