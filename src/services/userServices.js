import axios from "axios";

export default class UserService {

  BASE_URL = "http://localhost:8085";
  
  login(body) {
    return axios.post(`${this.BASE_URL}/api/userws/login`, body);
  }

  getById(id) {
    return axios.get(`${this.BASE_URL}/api/userws/getById/${id}`);
  }

  setAxiosHeader(token){
    const signature = `Bearer ${token})}`
    axios.interceptors.request.use((config) => {
      config.headers.authorization = signature;
      return config;
    });
  }

  register(body){
    return axios.post(`${this.BASE_URL}/api/userws/save`, body);
  }
}
