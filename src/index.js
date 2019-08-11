import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header'
import Main from './Components/Main'
import AddForm from './Components/AddForm'
import Settings from './Components/Settings'

ReactDOM.render(
    <Router>
        <Header />
        <Route path='/' exact component={Main} />
        <Route path='/add' component={AddForm} />
        <Route path='/settings' component={Settings} />
    </Router>,
    document.querySelector('#root')
)

module.hot && module.hot.accept()
