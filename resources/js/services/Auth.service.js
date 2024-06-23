import http from '../utils/http-common';

class AuthService {
    constructor() {
        this.prefix = "/api";
    }

    login(data) {
        return http.post(`${this.prefix}/login`, data);
    }
}

export default AuthService;