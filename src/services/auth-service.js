import axios from "axios";
const API_URL = 'http://127.0.0.1:3000/api/v1'

const register = (email, name, password, password_confirmation, phone_no, address) => {
  return axios.post(API_URL + "/signup", {
    user: {
      email,
      name,
      password,
      password_confirmation,
      phone_no,
      address
    }
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "/login", { user: { email, password } })
    .then((response) => {
      console.log(response)
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};