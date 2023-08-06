import db from '../database/database';
import bcrypt from 'bcrypt';
import { UserInsert } from '../types/User'

export class UserRepository {
    async create(user: UserInsert){

        try {
            const user_insert = await db.user.create({
                data: {...user,
                password: this.encryptPassword(user.password)}
            });

            return {
                success: true,
                message: 'User inserted successfully.',
                data: user_insert
            }
        } catch(err) {
            return {
                success: false,
                message: 'Error on insert user: ' + err,
                data: []
            }
        }
    }

    async get_all(){
        const user = await db.user.findMany({});

        return user;
    }

    encryptPassword(password: string) {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(password, salt);
	}
}