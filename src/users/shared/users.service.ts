import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserNotFound } from '../errors/userNotFound.error';
import { UserNotCreate } from '../errors/userNotCreate.error';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      throw new UserNotFound(id);
    }
  }

  async create(user: User) {
    try {
      const createdUser = new this.userModel(user);
      return await createdUser.save();
    } catch (error) {
      throw new UserNotCreate();
    }
  }

  async update(id: string, user: User) {
    try {
      await this.userModel.updateOne({ _id: id }, user).exec();
      return this.getById(id);
    } catch (error) {
      throw new UserNotFound(id);
    }
  }
}
