import initialState from '../mocks/settings'

export default (state = initialState, action) => {
    const { type, payload } = action

    return state
}
