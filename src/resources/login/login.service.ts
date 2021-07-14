import { Repository } from 'typeorm';
import User from '../../entity/user.model';
import bcrypt from 'bcrypt';
import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '../../guards/authGuard';

@Injectable()
@UseGuards(AuthGuard)
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
    ) {}

  async checkUser(user: Partial<User>): Promise<User | false> {
    const { login, password } = user;
    const foundUser = await this.userRepo.findOne({ login });
    if (
      foundUser &&
      (await bcrypt.compare(String(password), String(foundUser?.password)))
    ) {
      return foundUser;
    }
    return false;
  }
}
