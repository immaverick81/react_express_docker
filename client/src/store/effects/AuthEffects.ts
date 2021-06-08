import axios from 'axios';
import { API_URL } from '../../constants/constants';
import jwtDecode from 'jwt-decode';
const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "v1/auth/login", {
      email,
      password,
    },{ headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      if (response.data.data) {
        const userDetails = jwtDecode(response.data.data.split(' ')[1]);
        const auth = { token: response.data.data.split(' ')[1], user: userDetails};
        localStorage.setItem("auth", JSON.stringify(auth));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("auth");
};


export default { login, logout };