import { Request, Response } from "express";
import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/signup', (req: Request, res: Response) => {
    return userController.create(req, res);
});

userRoutes.get('/', (req: Request, res: Response) => {
    return userController.show(req, res);
});

userRoutes.get('/:id', (req: Request, res: Response) => {
    return userController.list(req, res);
});


userRoutes.delete('/:id', (req: Request, res: Response) => {
    return userController.delete(req, res);
});

userRoutes.put('/:id', (req: Request, res: Response) => {
    return userController.update(req, res);
});


export { userRoutes }