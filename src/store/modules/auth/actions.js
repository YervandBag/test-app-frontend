import http from "../../../utils/http"
import router from "../../../router"
import StorageService from "../../../services/storage.service";

export default {
    clearError({ commit }, timeout = 3000) {
        setTimeout(() => {
            commit('clearError');
        }, timeout)
    },

    async loadMe({ commit, dispatch }) {
        try {
            const { data } = await http.get('api/users/loadMe')
            commit('loadMe', data.user)
        } catch (error) {
            dispatch('clearError')
        }
    },

    async login({ commit, dispatch }, payload) {
        try {
            commit('loginRequest')
            const { data } = await http.post('api/auth/login', payload)
            StorageService.setToken(data.access_token)
            commit('loginSuccess', data.user)
            router.push({ name: 'Users' })
        } catch (error) {
            commit('loginFailure', error.response?.data?.error || 'Something went wrong')
            dispatch('clearError')
        }
    },

    async githubLogin({ commit, dispatch }, payload) {
        try {
            commit('loginRequest')
            const { data } = await http.post('api/auth/githubLogin', payload)
            StorageService.setToken(data.access_token)
            commit('loginSuccess', data.user)
            router.push({ name: 'Users' })
        } catch (error) {
            commit('loginFailure', error.response?.data?.error || 'Something went wrong')
            dispatch('clearError')
        }
    },

    logout({ commit }) {
        commit('reset')
        StorageService.removeToken()
        router.push({ name: 'Login' })
    },

    async register({ commit, dispatch }, payload) {
        try {
            commit('registerRequest')
            const { data } = await http.post('api/auth/register', payload)
            localStorage.setItem('access_token', data.access_token)
            commit('registerSuccess', data.user)
            router.push({ name: 'Users' })
        } catch (error) {
            commit('registerFailure', error.response?.data?.error || 'Something went wrong')
            dispatch('clearError')

        }
    }
}