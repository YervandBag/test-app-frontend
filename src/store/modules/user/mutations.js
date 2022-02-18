export default {
    CLEAR_ERROR(state) {
        state.error = null;
    },
    LOAD_USERS_REQUEST(state) {
        state.isLoading = true
    },
    LOAD_USERS_SUCCESS(state, users) {
        state.users = users;
        state.isLoading = false;
    },
    LOAD_USERS_FAILURE(state, error) {
        state.users = [];
        state.isLoading = false;
        state.error = error;
    }
}