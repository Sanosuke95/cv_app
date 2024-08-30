import http from '../utils/http-common';

class AuthService {
    constructor() {
        this.prefix = "/api";
    }

    login(data) {
        return http.post(`${this.prefix}/login`, data);
    }

    register(data) {
        return http.post(`${this.prefix}/register`, data);
    }

    contact() {
        return http.get(`${this.prefix}/contact`);
    }

    profile() {
        return http.get(`${this.prefix}/user/profile`);
    }

    check() {
        return http.get(`${this.prefix}/checkUser`);
    }

    logout() {
        return http.delete(`${this.prefix}/user/delete`);
    }
}

export default AuthService;