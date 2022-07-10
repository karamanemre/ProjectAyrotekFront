import axios from "axios";

export default class UserService {
  login(body) {
    return axios.post("api/userws/login", body);
  }

  getById(id) {
    return axios.get("api/userws/getById/"+id);
  }

  setAxiosHeader(token){
    let signature = `Bearer ${token})}`
    axios.defaults.headers['Authorization'] = signature
  }

  register(body){
    return axios.post("api/userws/save", body);
  }
}
