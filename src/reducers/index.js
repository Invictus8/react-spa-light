import { combineReducers } from 'redux'

import employees from './employees'
import settings from './settings'

export default combineReducers({
    employees,
    settings,
})
