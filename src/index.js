import React from 'react'
import ReactDOM from 'react-dom'

import Main from './Components/Main'

ReactDOM.render(
    <Main />,
    document.querySelector('#root')
)

module.hot && module.hot.accept()
