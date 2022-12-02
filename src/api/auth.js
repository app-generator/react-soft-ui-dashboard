import axios from "./index";
import { API_SERVER } from "config/constant";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${API_SERVER}users/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${API_SERVER}users/register`, data);
  };

  static Authorize = (code) => {
    return axios.get(`${API_SERVER}sessions/oauth/github?code=${code}`);
  };

  static Logout = (data) => {
    return axios.post(`${API_SERVER}users/logout`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };
}

export default AuthApi;
