const DEFAULT_STATE = {
    auth: false,
    name: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}