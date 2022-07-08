import axios from "axios";

export default class ProductService {
  save(product) {
    return axios.post("api/productws/save", product);
  }

  delete(id) {
    return axios.post("api/productws/delete/"+id);
  }

  update(product) {
    return axios.post("api/productws/update", product);
  }

  getById(id) {
    return axios.get("api/productws/getById"+id);
  }

  getAll() {
    return axios.get("api/productws/getAll");
  }
}