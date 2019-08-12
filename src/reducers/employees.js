import initialState from '../mocks/employees'

const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

export const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    payload: employee,
})

export default (state = initialState, action) => {
    const { type, payload } = action

    return type === ADD_EMPLOYEE
        ? ([
            ...state,
            payload,
        ])
        : state
}
