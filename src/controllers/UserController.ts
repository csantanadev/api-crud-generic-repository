import { Request, Response } from "express";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import { UserOrm } from "../entities/UserOrm";

export default class UserController {

    constructor() { }

    async create(request: Request, response: Response) {

        const { name, email, password } = request.body;

        try {
            const userRepo = new UserRepository(UserOrm);
            await userRepo.save(new User(name, email, password));
            return response.status(201).send()

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

    async show(request: Request, response: Response) {

        try {

            const userRepo = new UserRepository(UserOrm);
            const allUsers = await userRepo.findAll();
            return response.json(allUsers);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

    async list(request: Request, response: Response) {

        try {

            const userRepo = new UserRepository(UserOrm);
            const { id }  = request.params;

            const user = await userRepo.findOne(id);

            return response.json(user);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

    async delete(request: Request, response: Response) {

        try {

            const userRepo = new UserRepository(UserOrm);
            const { id }  = request.params;

            await userRepo.delete(id);

            return response.status(204).send()

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

    async update(request: Request, response: Response) {

        try {
            const { name, email, password } = request.body;
            const { id }  = request.params;

            const userRepo = new UserRepository(UserOrm);

            await userRepo.update(id, new User(name, email, password));

            return response.status(204).send()

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

}
