import api from "./api";
import TokenService from "./token.service";

const AuthService = {
  login(data) {
    return api
      .post("/auth/login", data)
      .then(response => {
        if (response.data.tokens) {
          TokenService.setUser(response.data.tokens);
        }
        return response.data;
      });
  },

  logout() {
    TokenService.removeUser();
  },

  register(data) {
    return api.post("/auth/register", data)
      .then(response => {
        if (response.data.tokens) {
          TokenService.setUser(response.data.tokens);
        }
        return response.data;
      });
  }
}

export default AuthService;