import { Request, Response } from 'express';
import { UserService } from '../services/UserService'
import { UserInsert } from '../types/User'

const userService = new UserService();

export class UserController { 

    async create(req: Request, res: Response) {
        const data: UserInsert = req.body;

        const user = await userService.create(data);

        if(!user.success){
            return res.status(400).json({
                success: user.success,
                message: user.message,
                data: user.data
            });
        }

        return res.status(200).json({
            success: user.success,
            message: user.message,
            data: user.data
        });
    }

    async get_all(req: Request, res: Response) {
        const users = await userService.get_all();

        return res.status(200).json({
            success: true,
            message: 'Users listed successfully.',
            data: users
        })
    }
}