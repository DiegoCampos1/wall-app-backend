import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserNotFound } from '../errors/userNotFound.error';
import { UserNotCreate } from '../errors/userNotCreate.error';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private mailService: MailService,
  ) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.error(error);
      throw new UserNotFound(id);
    }
  }

  async create(user: User) {
    try {
      const createdUser = new this.userModel(user);
      // The next line send email after create user, it's necessary a configuration SMTP variables in .env
      // await this.mailService.sendUserConfirmation(user);
      return await createdUser.save();
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
