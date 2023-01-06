import UserRepository from "../repository/user.repository";
import User from "../models/user.model";

export default class UserService {
  // Attributs
  private repo: UserRepository;

  // Constructeur
  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  getUniqueId = (userList: User[]): number => {
    const userIds = userList.map((user) => user.id);
    const maxId = userIds.reduce((acc, b) => Math.max(acc, b));
    const IdUnique = maxId + 1;
    return IdUnique;
  };

  // Méthodes
  getAll = (): Promise<User[]> => {
    return this.repo.getAll().catch((err) => err);
  };

  getById = (id: number): Promise<User> => {
    return this.repo.getById(id).catch((err) => err);
  };

  post = async (user: User): Promise<User> => {
    const userList: User[] = await this.getAll();
    const IdUnique = this.getUniqueId(userList);

    const data = new User(
      IdUnique,
      user.nom,
      user.prenom,
      user.date_de_naissance,
      user.nationalite
    );
    return this.repo.post(data).catch((err) => err);
  };

  put = (id: number, user: User): Promise<User> => {
    if (user.id != id) {
      throw "Erreur, cette id n'existe pas";
    }
    return this.repo.put(user).catch((err) => err);
  };

  patch = (id: number, user: User): Promise<User> => {
    if (user.id != id) {
      throw "Erreur, cette id n'existe pas";
    }
    return this.repo.patch(user).catch((err) => err);
  };

  delete = (id: number): Promise<any> => {
    return this.repo.delete(id);
  };
}
