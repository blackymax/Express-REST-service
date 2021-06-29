import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import User from '../../entity/user.model';
import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { env } from '../../common/config';

const JWT_SECRET_KEY = env.JWT_SECRET_KEY || '';

async function checkUser(user: Partial<User>): Promise<User | false> {
  const { login, password } = user;
  const userRepository = getRepository(User);
  const foundUser = await userRepository.findOne({ login });
  if (
    foundUser &&
    (await bcrypt.compare(String(password), String(foundUser?.password)))
  ) {
    return foundUser;
  }
  return false;
}
async function validate(user: Partial<User>, res: Response): Promise<Response> {
  try {
    const userFound = await checkUser(user);
    if (userFound) {
      const part = { userId: userFound.id, login: userFound.login };
      const token = jwt.sign(part, JWT_SECRET_KEY);
      return res.status(200).json({ token: token });
    }
    return res.status(403).json({ message: 'Forbidden' });
  } catch (err) {
    return res.status(401).json({ message: 'Not Authorized' });
  }
}

export { checkUser, validate };
