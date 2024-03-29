import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Main from './components/Main'
import AddForm from './components/AddForm'
import Settings from './components/Settings'
import rootReducer from './reducers'
import './style.css'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Container>
                <Header />
                <Route path='/' exact component={Main} />
                <Route path='/add' component={AddForm} />
                <Route path='/settings' component={Settings} />
            </Container>
        </Router>
    </Provider>,
    document.querySelector('#root')
)

module.hot && module.hot.accept()
