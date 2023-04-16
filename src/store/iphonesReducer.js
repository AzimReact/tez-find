const defaultState = []

export const iphoneReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INIT_STATE":
            return [...state, ...action.payload]
        default:
            return state
    }
}