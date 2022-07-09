import axios from "axios";

export default class UserService {
  login(body) {
    return axios.post("api/userws/login", body);
  }

  getById(id) {
    return axios.get("api/userws/getById/"+id);
  }
}
