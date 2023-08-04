import { UserRepository } from '../repositories/UserRepository'
import { UserInsert } from '../types/User'

const userRepository = new UserRepository();

export class UserService {

    async create(user: UserInsert){
        const user_insert = await userRepository.create(user);

        return user_insert;
    }

    async get_all(){
        const user = await userRepository.get_all();

        return user;
    }

}