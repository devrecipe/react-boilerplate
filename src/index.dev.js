/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App.js'

const store = createStore(reducers)
const rootElement = document.getElementById('app')
const render = Component => ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter>
                <Route path='/' component={Component}/>
            </BrowserRouter>
        </Provider>
    </AppContainer>,
    rootElement
)

render(App)
store.subscribe(() => render(App))

if (module.hot) {
    module.hot.accept('./containers/App.js', () => {
        const UpdatedApp = require('./containers/App.js').default
        render(UpdatedApp)
    })
}
