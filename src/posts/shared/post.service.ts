import { Injectable } from '@nestjs/common';
import { Message } from './post';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Message>,
  ) {}

  async getAll() {
    return await this.postModel.find().exec();
  }

  async getById(id: string) {
    return await this.postModel.findById(id).exec();
  }

  async create(message: Message) {
    const createdPost = new this.postModel(message);
    return await createdPost.save();
  }

  async update(id: string, post: Message) {
    await this.postModel.updateOne({ _id: id }, post).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.postModel.deleteOne({ _id: id }).exec();
  }
}
