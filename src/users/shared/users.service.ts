import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserNotFound } from '../errors/userNotFound.error';
import { UserNotCreate } from '../errors/userNotCreate.error';
import { MailService } from '../../mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private mailService: MailService,
  ) {}

  async getAll() {
    const allUsers = await this.userModel.find().exec();
    return allUsers.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
    }));
  }

  async getById(id: string) {
    try {
      const user = await this.userModel.findById(id).exec();
      return {
        id: user._id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      console.error(error);
      throw new UserNotFound(id);
    }
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(user: User) {
    try {
      const createdUser = new this.userModel(user);
      // The next line send email after create user, it's necessary a configuration SMTP variables in .env
      // await this.mailService.sendUserWelcomeEmail(user);
      const useraved = await createdUser.save();
      return {
        id: useraved._id,
        name: useraved.name,
        email: useraved.email,
      };
    } catch (error) {
      console.error(error);
      throw new UserNotCreate();
    }
  }

  async update(id: string, user: User) {
    try {
      await this.userModel.updateOne({ _id: id }, user).exec();
      return this.getById(id);
    } catch (error) {
      console.error(error);
      throw new UserNotFound(id);
    }
  }
}
