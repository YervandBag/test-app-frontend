import http from "../../../utils/http"

export default {
    clearError({ commit }, timeout = 3000) {
        setTimeout(() => {
            commit('CLEAR_ERROR');
        }, timeout)
    },

    async loadUsers({ commit, dispatch }) {
        try {
            commit('LOAD_USERS_REQUEST');
            const {data} = await http.get('api/users');
            commit('LOAD_USERS_SUCCESS', data.users);
        } catch (error) {
            commit('LOAD_USERS_FAILURE', error.message);
            dispatch('clearError')
        }
    }
}