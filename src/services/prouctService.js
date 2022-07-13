import axios from "axios";

export default class ProductService {

  BASE_URL = "http://localhost:5555";
  
  save(product) {
    return axios.post(`${this.BASE_URL}/api/productws/save`, product);
  }

  delete(id) {
    return axios.post(`${this.BASE_URL}/productws/delete/${id}`);
  }

  update(product) {
    return axios.post(`${this.BASE_URL}/api/productws/update`, product);
  }

  getById(id) {
    return axios.get(`${this.BASE_URL}/api/productws/getById/${id}`);
  }

  getAll() {
    return axios.get(`${this.BASE_URL}/api/productws/getAll`);
  }

  
}
