import initialState from '../mocks/employees'

export default (state = initialState, action) => {
    const { type, payload } = action

    return state
}
