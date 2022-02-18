import { getInitialState } from "./state";

export default {
    loginRequest(state) {
        state.isLoaded = false;
    },
    loginSuccess(state, user) {
        state.user = user;
        state.isLoaded = true;
    },
    loginFailure(state, error) {
        state.user = null;
        state.error = error;
        state.isLoaded = true
    },


    registerRequest(state) {
        state.isLoaded = false;
    },
    registerSuccess(state, user) {
        state.user = user;
        state.isLoaded = true;
    },
    registerFailure(state, error) {
        state.user = null;
        state.error = error;
        state.isLoaded = true
    },

    loadMe(state, user) {
        state.user = user;
        state.isLoaded = true;
    },

    clearError(state) {
        state.error = null;
    },

    removeUser(state) {
        state.user = null;
    },

    reset(state) {
        const initialState = getInitialState()
        for (const key in initialState) {
            state[key] = initialState[key];
        }
    }
}