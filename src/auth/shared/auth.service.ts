import { UsersService } from './../../users/shared/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.usersService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { _id, name, email } = user;
      return { id: _id, name, email };
    }
    return null;
  }
}
