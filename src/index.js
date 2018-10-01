import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import App from './components/App'
import configureStore, { history } from './store/configureStore'
import './style/commonStyle'

const store = configureStore()

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/" component={Component}/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./components/App.js', () => {
        const NextApp = require('./components/App.js').default
        render(NextApp)
    })
}