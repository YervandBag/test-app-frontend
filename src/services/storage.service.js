
class StorageService {
    ACCESS_TOKEN = 'access_token';

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key, value) {
        return localStorage.setItem(key, value);
    }

    clearItem(key) {
        return localStorage.removeItem(key);
    }

    getToken() {
        return localStorage.getItem(this.ACCESS_TOKEN);
    }
    setToken(token) {
        return localStorage.setItem(this.ACCESS_TOKEN, token);
    }
    removeToken() {
        return localStorage.removeItem(this.ACCESS_TOKEN);
    }

}

export default new StorageService();