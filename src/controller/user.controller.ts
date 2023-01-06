import { Request, Response } from "express";
import UserService from "../service/user.service";

export default class UserController {
  // Attributs
  service: UserService;

  // Constructeur
  constructor(service: UserService) {
    this.service = service;
  }

  // Méthodes
  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAll();
    res.send(data);
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await this.service.getById(+id);
    res.send(data);
  };

  public post = async (req: Request, res: Response): Promise<void> => {
    const body = req.body;
    const user = await this.service.post(body);
    res.send(user);
  };

  public put = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const body = req.body;
    try {
      const user = await this.service.put(+id, body);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  };

  public patch = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const body = req.body;
    try {
      const user = await this.service.patch(+id, body);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  };

  public delete = (req: Request, res: Response): void => {
    const id = req.params.id;
    const user = this.service
      .delete(+id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => res.send("Suppression impossible"));
  };
}
