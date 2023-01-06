import User from "../models/user.model";
import "dotenv/config";
import axios from "axios";

export default class UserRepository {
  // Attributs
  private URL = process.env.JSONSERVER as string;

  // Méthodes
  getAll = async (): Promise<User[]> => {
    return axios.get(this.URL).then((res) => res.data);
  };

  getById = async (id: number): Promise<User> => {
    return axios.get(`${this.URL}/${id}`).then((res) => res.data);
  };

  post = async (user: User): Promise<User> => {
    return axios.post(this.URL, user).then((res) => res.data);
  };

  put = async (user: User): Promise<User> => {
    return axios.put(`${this.URL}/${user.id}`, user).then((res) => res.data);
  };

  patch = async (user: User): Promise<User> => {
    return axios.patch(`${this.URL}/${user.id}`, user).then((res) => res.data);
  };

  delete = (id: number): Promise<any> => {
    return axios.delete(`${this.URL}/${id}`);
  };
}
