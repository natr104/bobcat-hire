import axios from "axios";
const API_URL = 'http://127.0.0.1:3000/api/v1'

class AuthService {
    login(email, password) {
      return axios
        .post(API_URL + "login", { email, password })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
    logout() {
      localStorage.removeItem("user");
    }
    register(email, name, password, password_confirmation, phone_no, address) {
      return axios.post(API_URL + "signup", {
        email,
        name,
        password,
        password_confirmation,
        phone_no,
        address
      });
    }
  }
  export default new AuthService();