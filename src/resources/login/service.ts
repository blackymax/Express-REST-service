import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "../../entity/user.model";

async function checkUser(user: Partial<User>): Promise<User|false> {
    const { login, password } = user;
    const userRepository = getRepository(User);
    const foundUser = await userRepository.findOne({login});
    if (foundUser && await bcrypt.compare(String(password), String(foundUser?.password))) {
        return foundUser;
    }
    return false;
}

export { checkUser };
