export default {
    user(state) {
        return state.user
    },
    isLoaded(state) {
        return state.isLoaded
    },
    errorMsg(state) {
        return state.error
    },
    isAuthenticated(state) {
        return Boolean(state.user)
    }
}