import initialState from '../mocks/settings'

const CHANGE_SETTINGS = 'CHANGE_SETTINGS'

export const changeSettings = setting => ({
    type: CHANGE_SETTINGS,
    payload: setting,
})

export default (state = initialState, action) => {
    const { type, payload } = action

    return type === CHANGE_SETTINGS
        ? ({
            ...state,
            [payload.key]: {
                ...state[payload.key],
                visible: payload.checked,
            },
        })
        : state
}
