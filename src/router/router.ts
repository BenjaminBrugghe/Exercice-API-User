import express from "express";
import UserController from "../controller/user.controller";
import UserRepository from "../repository/user.repository";
import UserService from "../service/user.service";

// Instances de classes
const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);
const router = express.Router();

// Routes

router.get("/user", controller.getAll);
router.get("/user/:id", controller.getById);
router.post("/user", controller.post);
router.put("/user/:id", controller.put);
router.patch("/user/:id", controller.patch);
router.delete("/user/:id", controller.delete);

export default router;
