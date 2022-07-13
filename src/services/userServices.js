import axios from "axios";

export default class UserService {

  BASE_URL = "http://localhost:5555";
  
  login(body) {
    return axios.post(`${this.BASE_URL}/api/userws/login`, body);
  }

  getById(id) {
    return axios.get(`${this.BASE_URL}/api/userws/getById/${id}`);
  }

  setAxiosHeader(token){
    let signature = `Bearer ${token})}`
    axios.defaults.headers['Authorization'] = signature
  }

  register(body){
    return axios.post(`${this.BASE_URL}/api/userws/save`, body);
  }
}
